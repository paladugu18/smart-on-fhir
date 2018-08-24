import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import log from '../utils/logger';

// Patient Medication Statements action

/**
 * Creates an action to indicate patient medication statements data 
 * is retrieved successfully.
 * @param {Array} medications - Patient medication statements data.
 */
export const loadPatientMedicationsSuccess = medications => ({
  type: types.LOAD_MEDICATIONS_SUCCESS,
  medications,
});

/**
 * Creates an action to indicate an error occurred while retrieving 
 * patient medication statements data.
 */
export const loadPatientMedicationsFailure = () => ({
  type: types.LOAD_MEDICATIONS_FAILURE,
});

/**
 * Retrieves the patient medications data using FHIR API asynchronously.
 * @param {Object} smart
 */
export const loadMedications = smart => (dispatch) => {
  dispatch(beginAjaxCall());
  return smart.patient.api.fetchAll({
    type: 'MedicationStatement',
  }).then((medications) => {
    log.info('Patient medication statements retrieved.');
    dispatch(loadPatientMedicationsSuccess(medications));
  }, (err) => {
    log.error({ err }, 'An error occurred while retrieving patient medication statements.');
    dispatch(ajaxCallError());
    dispatch(loadPatientMedicationsFailure(err));
  });
};
