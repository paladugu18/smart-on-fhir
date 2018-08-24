import ajaxStatusReducer from '../ajaxStatusReducer';
import * as ajaxStatusActions from '../../actions/ajaxStatusActions';
import * as medicationActions from '../../actions/medicationStatementActions';
import * as patientActions from '../../actions/patientActions';

describe('AJAX Status Reducer', () => {
  describe("With action type-'BEGIN_AJAX_CALL'", () => {
    it('should return a new state by adding one to previous state', () => {
      const initialState = 1;

      const action = ajaxStatusActions.beginAjaxCall();
      const newState = ajaxStatusReducer(initialState, action);

      expect(newState).toEqual(2);
    });
  });

  describe("With action type-'AJAX_CALL_ERROR'", () => {
    it('should return a new state by subtracting one from previous state', () => {
      const initialState = 2;

      const action = ajaxStatusActions.ajaxCallError();
      const newState = ajaxStatusReducer(initialState, action);

      expect(newState).toEqual(1);
    });
  });

  describe("With action type-'LOAD_MEDICATIONS_SUCCESS'", () => {
    it('should return a new state by subtracting one from previous state', () => {
      const initialState = 3;
      const fakeMedicationStatementsData = [
        {
          id: 'fakeMedication1',
        }, {
          id: 'fakeMedication2',
        },
      ];

      const action = medicationActions.loadPatientMedicationsSuccess(fakeMedicationStatementsData);
      const newState = ajaxStatusReducer(initialState, action);

      expect(newState).toEqual(2);
    });
  });

  describe("With action type-'LOAD_PATIENT_SUCCESS'", () => {
    it('should return a new state by subtracting one from previous state', () => {
      const initialState = 5;
      const fakePatientData = {
        name: [
          {
            family: ['testFamilyName'],
            given: ['testGivenName'],
          },
        ],
        birthDate: '1990-01-01',
      };

      const action = patientActions.loadPatientSuccess(fakePatientData);
      const newState = ajaxStatusReducer(initialState, action);

      expect(newState).toEqual(4);
    });
  });
});
