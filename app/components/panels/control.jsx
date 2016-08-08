import React from 'react';
import Slider from 'app/components/slider';

const ControlPanel = (props) => {
  let {fontSize, imageWidth} = props.settings;

  return (
    <div className="panel panel-control">
      <div className="panel-heading">
        <h3 className="align-center">Controls</h3>
      </div>
      <div className="padded">
        <h4>Adjust text size</h4>
        <Slider value={fontSize} onChange={props.onFontSizeChange} min="5" max="15" />

        <h4>Adjust image width</h4>
        <Slider value={imageWidth} onChange={props.onImageWidthChange} min="50" max="400" />

        <h4>Use your own image</h4>
        <div id="drop-zone" className="m-b-2">
          <p>Drop image here or select file below</p>
          <input type="file" name="image" id="image" />
          <label htmlFor="image" className="btn">Select file</label>
        </div>
        <small>
          <strong>Note:</strong> Not every image works well with this type of
          mosaic. Images with high contrast between light and dark values and
          few details work best. Closely-cropped portraits with the subject
          against a dark background are ideal.
        </small>
      </div>
    </div>
  )
}

export default ControlPanel;
