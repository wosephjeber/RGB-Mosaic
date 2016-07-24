import React from 'react';
import PanelButtons from 'app/components/panels/buttons';
import SidePanels from 'app/components/panels';
import WelcomePanel from 'app/components/welcome_panel';

const RGBMosaic = (props) => {
  let {changePanel, closePanel, hideWelcomePanel, sidePanel, welcome} = props;

  return (
    <div>
      <WelcomePanel show={welcome} onHide={hideWelcomePanel} />
      <SidePanels open={sidePanel.open} activePanel={sidePanel.activePanel} />
      <PanelButtons changePanel={changePanel} closePanel={closePanel} />
    </div>
  )
}

export default RGBMosaic;
