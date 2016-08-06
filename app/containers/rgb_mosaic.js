import {connect} from 'react-redux';
import RGBMosaic from 'app/components/rgb_mosaic';

const mapStateToProps = (state, ownProps) => {
  return {
    sidePanel: state.sidePanel,
    settings: state.settings,
    welcome: state.welcome,
    downloadImage: () => {
      console.log('downloading image');
      window.open(state.output);
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changePanel: (panel) => {
      dispatch({ type: 'CHANGE_PANEL', panel: panel });
    },
    closePanel: () => {
      dispatch({ type: 'CLOSE_PANEL' });
    },
    hideWelcomePanel: () => {
      dispatch({ type: 'HIDE_WELCOME' });
      dispatch({ type: 'CHANGE_IMAGE', image: 'app/images/obama-2.jpg' })
    },
    onRender: (image) => {
      dispatch({ type: 'OUTPUT_RENDERED', output: image });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RGBMosaic)
