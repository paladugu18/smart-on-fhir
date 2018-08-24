import patientReducer from '../patientReducer';
import * as patientActions from '../../actions/patientActions';

describe('Patient Reducer', () => {
  describe("With action type-'LOAD_PATIENT_SUCCESS'", () => {
    it('should return a new state with the patient data.', () => {
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
      const newState = patientReducer({}, action);

      expect(newState).toEqual(fakePatientData);
    });
  });

  describe("With action type-'LOAD_PATIENT_FAILURE'", () => {
    it('should return old state.', () => {
      const action = patientActions.loadPatientFailure();
      const newState = patientReducer({}, action);

      expect(newState).toEqual({});
    });
  });
});
