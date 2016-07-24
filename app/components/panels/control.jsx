import React from 'react';

const ControlPanel = () => {
  return (
    <div className="panel panel-control">
      <div className="panel-heading">
        <h3 className="align-center">Controls</h3>
      </div>
      <div className="padded">
        <h4>Adjust text size</h4>
        <div>Slider will go here</div>

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
