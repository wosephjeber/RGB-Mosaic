import {combineReducers} from "redux";

import output from './output';
import settings from './settings';
import sidePanel from './side_panel';
import welcome from './welcome';

export default combineReducers({
  output,
  settings,
  sidePanel,
  welcome
})
