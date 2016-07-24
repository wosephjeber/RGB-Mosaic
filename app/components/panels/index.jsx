import React from 'react';
import ControlPanel from 'app/components/panels/control';
import InfoPanel from 'app/components/panels/info';
import classnames from 'classnames';

const SidePanels = (props) => {
  let {activePanel, open} = props;
  let panel;

  if (activePanel === 'info') {
    panel = <InfoPanel />;
  } else if (activePanel === 'control') {
    panel = <ControlPanel />;
  }

  let className = classnames('panels', {
    'open': open
  })

  return (
    <div className={className}>
      {panel}
    </div>
  )
}

export default SidePanels
