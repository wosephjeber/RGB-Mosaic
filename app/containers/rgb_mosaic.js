import {connect} from 'react-redux';
import RGBMosaic from 'app/components/rgb_mosaic';

const mapStateToProps = (state, ownProps) => {
  return {
    sidePanel: state.sidePanel,
    settings: state.settings,
    welcome: state.welcome
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changePanel: (panel) => {
      dispatch({type: 'CHANGE_PANEL', panel: panel});
    },
    closePanel: () => {
      dispatch({type: 'CLOSE_PANEL'});
    },
    hideWelcomePanel: () => {
      dispatch({type: 'HIDE_WELCOME'});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RGBMosaic)
