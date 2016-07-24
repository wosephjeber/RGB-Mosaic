import {connect} from 'react-redux';
import ControlPanel from 'app/components/panels/control';

const mapStateToProps = (state, ownProps) => {
  return {
    settings: state.settings
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFontSizeChange: (e) => {
      dispatch({ type: 'CHANGE_FONT_SIZE', fontSize: e.target.value });
    },
    onImageWidthChange: (e) => {
      dispatch({ type: 'CHANGE_IMAGE_WIDTH', imageWidth: e.target.value });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel)
