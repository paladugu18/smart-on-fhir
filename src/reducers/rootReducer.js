import { combineReducers } from 'redux';

import ajaxCallsInProgress from './ajaxStatusReducer';
import medicationStatements from './medicationStatementReducer';
import patient from './patientReducer';

// Redux root reducer
const rootReducer = combineReducers({
  ajaxCallsInProgress,
  patient,
  medicationStatements,
});

export default rootReducer;
