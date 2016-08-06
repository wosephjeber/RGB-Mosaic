import React from 'react';
import classnames from 'classnames';

const PanelButtons = (props) => {
  function changePanel(panel) {
    return () => {
      props.changePanel(panel);
    }
  }

  function panelButton(panel) {
    let className = classnames('panel-btn', `btn-${panel}`, {
      'active': props.activePanel === panel
    });

    return (
      <div className={className} onClick={changePanel(panel)}></div>
    )
  }

  return (
    <div className="panel-buttons">
      <div className="panel-btn btn-close" onClick={props.closePanel}></div>
      {panelButton('info')}
      {panelButton('control')}
      <div className="panel-btn btn-download" onClick={props.downloadImage}></div>
    </div>
  )
}

export default PanelButtons;
