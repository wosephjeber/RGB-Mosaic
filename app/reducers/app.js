import {combineReducers} from "redux";

import settings from './settings';
import sidePanel from './side_panel';
import welcome from './welcome';

export default combineReducers({
  settings,
  sidePanel,
  welcome
})
