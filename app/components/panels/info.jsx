import React from 'react';

const InfoPanel = () => {
  return (
    <div className="panel panel-info">
      <div className="panel-heading">
        <h3 className="align-center">Introduction</h3>
      </div>
      <div className="padded">
        <h4>What is this?</h4>
        <p>
          What you're seeing is a digital image converted into a mosiac
          made up of the RGB values for each pixel. Each color value is
          displayed at its designated intensity.
        </p>
        <p>
          Scroll through the mosaic to the left, and step away from your screen
          to see the red, green, and blue text start to resolve into the distinct
          colors of each pixel.
        </p>
        <p>
          This mosaic works best on a larger screen (the bigger the better),
          but hopefully you can still get a sense for it on smaller screens.
        </p>
        <p>
          Play with the settings to adjust the text size of each pixel, and
          upload your own photo to see how it looks as an RGB mosaic.
        </p>
      </div>
    </div>
  )
}

export default InfoPanel;
