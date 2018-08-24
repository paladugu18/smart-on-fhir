import medicationReducer from '../medicationStatementReducer';
import * as medicationActions from '../../actions/medicationStatementActions';

describe('Medication Statements Reducer', () => {
  describe("With action type-'LOAD_MEDICATIONS_SUCCESS'", () => {
    it('should return a new state with the patient data.', () => {
      const fakeMedicationStatementsData = [
        {
          id: 'fakeMedication1',
        }, {
          id: 'fakeMedication2',
        },
      ];

      const action = medicationActions.loadPatientMedicationsSuccess(fakeMedicationStatementsData);
      const newState = medicationReducer([], action);

      expect(newState).toEqual(fakeMedicationStatementsData);
    });
  });

  describe("With action type-'LOAD_MEDICATIONS_FAILURE'", () => {
    it('should return old state.', () => {
      const action = medicationActions.loadPatientMedicationsFailure();
      const newState = medicationReducer([], action);

      expect(newState).toEqual([]);
    });
  });
});
