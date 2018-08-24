import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import log from '../utils/logger';

// Patient actions

/**
 * Creates an action to indicate patient data is retrieved successfully.
 * @param {Object} patient - Patient JSON data.
 */
export const loadPatientSuccess = patient => ({
  type: types.LOAD_PATIENT_SUCCESS,
  patient,
});

/**
 * Creates an action to indicate an error occurred while retrieving 
 * patient data.
 */
export const loadPatientFailure = () => ({
  type: types.LOAD_PATIENT_FAILURE,
});

/**
 * Retrieves the patient data using FHIR API asynchronously.
 * @param {Object} smart
 */
export const loadPatient = smart => (dispatch) => {
  dispatch(beginAjaxCall());
  return smart.patient.read()
    .then((patient) => {
      log.info('Patient data retrieved.');
      dispatch(loadPatientSuccess(patient));
    }, (err) => {
      log.error({ err }, 'An error occurred while retrieving patient  data.');
      dispatch(ajaxCallError(err));
      dispatch(loadPatientFailure(err));
    });
};
