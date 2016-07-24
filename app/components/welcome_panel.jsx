import React from 'react';
import classnames from 'classnames';

const WelcomePanel = (props) => {
  let className = classnames('welcome-screen', {
    'show': props.show
  })

  return (
    <div className={className}>
      <div className="content align-center padded">
        <h1 className="align-center">RGB Mosaic <small>Exposing the RGB color model behind your digital images</small></h1>
        <div className="align-center">
          <button type="button" className="btn green" onClick={props.onHide}>Click to start</button>
        </div>
      </div>
      <div className="credit align-center">
        &copy;2016 Joseph Weber | <a href="http://wosephjeber.com">Blog</a> | <a href="http://twitter.com/wosephjeber">Twitter</a> | <a href="https://github.com/wosephjeber/rgb-mosaic">View on GitHub</a>
      </div>
    </div>
  )
}

export default WelcomePanel
