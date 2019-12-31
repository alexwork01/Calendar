import { combineReducers } from 'redux';

import appReducer from '../reducers/appReducer';
import calendarReducer from '../reducers/calendarReducer';

export default combineReducers({
  app: appReducer,
  calendar: calendarReducer
});
