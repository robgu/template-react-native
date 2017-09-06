import { combineReducers } from 'redux';
import { i18n } from 'redux-pagan';

import page1 from './modules/Page1/state';

export default combineReducers({
  i18n,
  page1,
});