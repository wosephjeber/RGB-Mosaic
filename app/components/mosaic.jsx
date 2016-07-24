import React, {PropTypes} from 'react';
import {isEqual} from 'lodash';

function getPixelData(image) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    let canvas = document.createElement('canvas');

    img.addEventListener('load', () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      let context = canvas.getContext('2d');
      context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);

      let imageData = context.getImageData(0,0, img.naturalWidth, img.naturalHeight);
      resolve(imageData);

      canvas = null;
      img = null;
    })

    img.src = image;
  });
}

function getRowsOfPixels(data, imageWidth) {
  let pixels = [];
  let rows = [];

  for (let i = 0, len = data.length; i < len; i += 4) {
    pixels.push(data.slice(i, i + 4));
  }

  for (let i = 0, len = pixels.length; i < len; i += imageWidth) {
    rows.push(pixels.slice(i, i + imageWidth));
  }

  return rows;
}

function resizeImage(image, width) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    let canvas = document.createElement('canvas');

    img.addEventListener('load', () => {
      let aspectRatio = img.naturalHeight / img.naturalWidth;
      let height = width * aspectRatio;
      canvas.width = width
      canvas.height = height;

      let context = canvas.getContext('2d');
      context.drawImage(img, 0, 0, width, height);

      let resizedImage = canvas.toDataURL('image/jpeg', '.9');

      resolve(resizedImage);

      canvas = null;
      img = null;
    })

    img.src = image;
  });
}

class Mosaic extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.renderCanvas();
  }

  componentDidUpdate() {
    this.renderCanvas();
  }

  shouldComponentUpdate(newProps) {
    return isEqual(newProps, this.props) ? false : true;
  }

  renderCanvas() {
    let {image, imageWidth, fontSize} = this.props.settings;

    if (!image) return;

    resizeImage(image, imageWidth).then((resizedImage) => {
      getPixelData(resizedImage).then((imageData) => {
        this.drawToCanvas(getRowsOfPixels(imageData.data, imageData.width));
      });
    });
  }

  drawToCanvas(rows) {
    function drawPixel(rgb, x, y) {
      let [r, g, b] = rgb;

      context.fillStyle = `rgb(${r}, 0, 0)`;
      context.fillText(r, x * pixelDimension, y * pixelDimension);

      context.fillStyle = `rgb(0, ${g}, 0)`;
      context.fillText(g, x * pixelDimension, y * pixelDimension + fontSize);

      context.fillStyle = `rgb(0, 0, ${b})`;
      context.fillText(b, x * pixelDimension, y * pixelDimension + fontSize * 2);
    }

    let {fontSize} = this.props.settings

    let context = this._canvas.getContext('2d');
    let imageHeight = rows.length;
    let imageWidth = rows[0].length;
    let pixelDimension = fontSize * 3;

    this._canvas.width = imageWidth * pixelDimension;
    this._canvas.height = imageHeight * pixelDimension;

    context.font = `${fontSize}px monospace`;
    context.textBaseline = 'top';
    context.textAlign = 'center';

    rows.map((row, y) => {
      row.map((pixel, x) => {
        drawPixel(pixel, x, y);
      })
    })
  }

  render() {
    return (
      <div className="mosaic">
        <canvas ref={(c) => {this._canvas = c}}></canvas>
      </div>
    )
  }
}

Mosaic.PropTypes = {
  settings: PropTypes.object.isRequired
}

export default Mosaic;
