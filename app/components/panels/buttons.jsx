import React from 'react';

const PanelButtons = (props) => {
  function changePanel(panel) {
    return () => {
      props.changePanel(panel);
    }
  }

  return (
    <div className="panel-buttons">
      <div className="panel-btn btn-close" onClick={props.closePanel}></div>
      <div className="panel-btn btn-info" onClick={changePanel('info')}></div>
      <div className="panel-btn btn-control" onClick={changePanel('control')}></div>
    </div>
  )
}

export default PanelButtons;
