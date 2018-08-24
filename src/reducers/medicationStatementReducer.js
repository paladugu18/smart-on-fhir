import * as types from '../actions/actionTypes';
import initialState from './initialState';

// Reducer to handle patient medication statements actions
export default function medicationStatementReducer(state = initialState.medications, action) {
  switch (action.type) {
    case types.LOAD_MEDICATIONS_SUCCESS:
      return action.medications;

    case types.LOAD_MEDICATIONS_FAILURE:
      return state;

    default:
      return state;
  }
}
