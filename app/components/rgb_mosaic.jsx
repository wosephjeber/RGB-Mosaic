import React from 'react';
import PanelButtons from 'app/components/panels/buttons';
import SidePanels from 'app/components/panels';
import WelcomePanel from 'app/components/welcome_panel';

const RGBMosaic = (props) => {
  let {changePanel, closePanel, hideWelcomePanel, sidePanel, welcome} = props;
  let {activePanel} = sidePanel

  return (
    <div>
      <WelcomePanel show={welcome} onHide={hideWelcomePanel} />
      <SidePanels open={sidePanel.open} activePanel={activePanel} />
      <PanelButtons changePanel={changePanel} closePanel={closePanel} activePanel={activePanel} />
    </div>
  )
}

export default RGBMosaic;
