var TextFromImage = function(source, width) {
  resizeImage(source, width, function(source) {
    var canvas = document.createElement('canvas');
    var image = new Image();
    image.src = source;
    console.log('loading image');
    
    image.addEventListener('load', function() {
      progressBar.add(30);
      console.log('image loaded');
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      context = canvas.getContext('2d');
      
      context.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight);
      
      imageData = context.getImageData(0,0, image.naturalWidth, image.naturalHeight);
      
      drawPixels(imageData, image.naturalWidth);
    });
  });
  
  
  function drawPixels(pixels, lineWidth) {
    var data = pixels.data;
    var pixelQuantity = pixels.data.length / 4;
    console.log('drawing ' + pixelQuantity + ' pixels');
    var mosaicDiv = document.querySelector('#mosaic');
    mosaicDiv.style.display = 'none';
    mosaicDiv.innerHTML = '';
    mosaicDiv.style.width = (3 * lineWidth) + 'em';
    for (var i = 0; i < data.length; i += 4) {
      if ((i / 4) % lineWidth === 0 ) {
        var linebreak = document.createElement('div');
        linebreak.className = 'clear';
        mosaicDiv.appendChild(linebreak);
      }
      var pixel = document.createElement('div');
      pixel.className = 'pixel';
      
      var rDiv = document.createElement('div');
      rDiv.innerHTML = data[i];
      rDiv.style.color = 'rgb(' + data[i] + ', 0, 0)';
      var gDiv = document.createElement('div');
      gDiv.innerHTML = data[i + 1];
      gDiv.style.color = 'rgb(0,' + data[i + 1] + ', 0)';
      var bDiv = document.createElement('div');
      bDiv.innerHTML = data[i + 2];
      bDiv.style.color = 'rgb(0, 0, ' + data[i + 2] + ')';
      
      pixel.appendChild(rDiv);
      pixel.appendChild(gDiv);
      pixel.appendChild(bDiv);
      
      mosaicDiv.appendChild(pixel);
      
      if ((i / 4 / pixelQuantity) % 0.25 === 0 ) {
        progressBar.add(0.25 * 20);
      }
    }
    
    setTimeout(function() {
      mosaicDiv.style.display = 'block';
      fadeOut(overlay, 500);
    }, 500);
  }
  
  function resizeImage(source, width, callback) {
    var canvas = document.createElement('canvas');
    var image = new Image();
    
    image.addEventListener('load', function() {
      progressBar.add(30);
      var naturalHeight = image.naturalHeight;
      var naturalWidth = image.naturalWidth;
      var newHeight = width * (naturalHeight / naturalWidth);
      var newWidth = width;
      canvas.width = newWidth;
      canvas.height = newHeight;
      
      context = canvas.getContext('2d');
      
      context.drawImage(image, 0, 0, newWidth, newHeight);
      
      var resizedImage = canvas.toDataURL('image/jpeg', '.9');
      
      canvas = null;
      image = null;
      
      callback.call(null, resizedImage);
    });
    
    image.src = source;
  }
};

var DropZone = function(selector, callback) {
  _this = this;
  
  var element = document.querySelector(selector);
  var input = element.querySelector('input[type="file"]');
  
  element.addEventListener('dragover', function(event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    
    element.className = 'dragover';
  }, false);
  
  element.addEventListener('dragleave', function(event) {
    event.stopPropagation();
    event.preventDefault();
    
    element.className = '';
  });
  
  element.addEventListener('drop', function(event) {
    event.stopPropagation();
    event.preventDefault();
    
    callback.call(_this, event);
  }, false);
  
  input.addEventListener('change', function(event) {
    callback.call(_this, event);
  });
};

var ProgressBar = function() {
  var _this = this;
  var element = document.querySelector('.progress-bar');
  var bar = element.querySelector('.progress');
  
  this.percent = 0;
  
  this.show = function() {
    element.classList.add('show');
  };
  
  this.hide = function() {
    element.classList.remove('show');
  };
  
  this.to = function(percent) {
    _this.percent = percent;
    update();
  };
  
  this.add = function(percent) {
    _this.percent += percent;
    update();
  };
  
  function update() {
    console.log('Progress: ' + _this.percent);
    bar.style.width = _this.percent + '%';
  }
};
