import thunk from 'redux-thunk';
import td from 'testdouble';
import configureMockStore from 'redux-mock-store';

import * as patientActions from '../patientActions';
import * as types from '../actionTypes';

describe('Patient Actions', () => {
  describe('#loadPatientSuccess', () => {
    it('should create a LOAD_PATIENT_SUCCESS action', () => {
      const fakePatientData = 'testPatientData';
      const expectedAction = {
        type: types.LOAD_PATIENT_SUCCESS,
        patient: fakePatientData,
      };

      const action = patientActions.loadPatientSuccess(fakePatientData);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('#loadPatientFailure', () => {
    it('should create a LOAD_PATIENT_FAILURE action', () => {
      const expectedAction = {
        type: types.LOAD_PATIENT_FAILURE,
      };

      const action = patientActions.loadPatientFailure();

      expect(action).toEqual(expectedAction);
    });
  });

  describe('#loadPatient Async Actions', () => {
    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);
    const fakePatientData = 'testPatientData';
    const smart = {
      patient: {
        read: td.function(),
      },
    };

    it('should create BEGIN_AJAX_CALL and LOAD_PATIENT_SUCCESS when patient data is loaded successfully', (done) => {
      const expectedActions = [
        { type: types.BEGIN_AJAX_CALL },
        { type: types.LOAD_PATIENT_SUCCESS, patient: fakePatientData },
      ];
      const store = mockStore({ patient: {} });

      td.when(smart.patient.read()).thenResolve(fakePatientData);

      store.dispatch(patientActions.loadPatient(smart)).then(() => {
        const actions = store.getActions();

        expect(actions).toEqual(expectedActions);
        done();
      });
    });

    it('should create BEGIN_AJAX_CALL, AJAX_CALL_ERROR and LOAD_PATIENT_FAILURE when an error occurs while loading patient data', (done) => {
      const expectedActions = [
        { type: types.BEGIN_AJAX_CALL },
        { type: types.AJAX_CALL_ERROR },
        { type: types.LOAD_PATIENT_FAILURE },
      ];
      const store = mockStore({ patient: {} });

      td.when(smart.patient.read()).thenReject('404: Resource not found');

      store.dispatch(patientActions.loadPatient(smart)).then(() => {
        const actions = store.getActions();

        expect(actions).toEqual(expectedActions);
        done();
      });
    });
  });
});

