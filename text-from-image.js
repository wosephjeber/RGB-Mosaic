var TextFromImage = function(source, width) {
  resizeImage(source, width, function(source) {
    var canvas = document.createElement('canvas');
    var image = new Image();
    image.src = source;
    console.log('loading image');
    
    image.addEventListener('load', function() {
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
    console.log('drawing ' + (pixels.data.length / 4) + ' pixels');
    var outputDiv = document.querySelector('#output');
    outputDiv.innerHTML = '';
    outputDiv.style.width = lineWidth * 15 + 'px';
    for (var i = 0; i < data.length; i += 4) {
      if ((i / 4) % lineWidth === 0 ) {
        var linebreak = document.createElement('div');
        linebreak.className = 'clear';
        outputDiv.appendChild(linebreak);
      }
      var pixel = document.createElement('div');
      pixel.className = 'pixel';
      
      var rDiv = document.createElement('div');
      rDiv.innerHTML = data[i];
      rDiv.style.color = 'rgb(' + data[i] + ', 0, 0)';
      var gDiv = document.createElement('div');
      gDiv.innerHTML = data[i + 1];
      gDiv.style.color = 'rgb(0,' + data[i] + ', 0)';
      var bDiv = document.createElement('div');
      bDiv.innerHTML = data[i + 2];
      bDiv.style.color = 'rgb(0, 0, ' + data[i] + ')';
      
      pixel.appendChild(rDiv);
      pixel.appendChild(gDiv);
      pixel.appendChild(bDiv);
      
      outputDiv.appendChild(pixel);
    }
  }
  
  function resizeImage(source, width, callback) {
    var canvas = document.createElement('canvas');
    var image = new Image();
    
    image.addEventListener('load', function() {
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
