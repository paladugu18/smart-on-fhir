import * as types from '../actions/actionTypes';
import initialState from './initialState';

// Reducer to handle patient actions
export default function patientReducer(state = initialState.patient, action) {
  switch (action.type) {
    case types.LOAD_PATIENT_SUCCESS:
      return action.patient;

    case types.LOAD_PATIENT_FAILURE:
      return state;

    default:
      return state;
  }
}
