import thunk from 'redux-thunk';
import td from 'testdouble';
import configureMockStore from 'redux-mock-store';

import * as medicationActions from '../medicationStatementActions';
import * as types from '../actionTypes';

describe('Medication Statement Actions', () => {
  describe('#loadPatientMedicationsSuccess', () => {
    it('should create a LOAD_MEDICATIONS_SUCCESS action', () => {
      const fakeMedicationsData = 'testMedicationsData';
      const expectedAction = {
        type: types.LOAD_MEDICATIONS_SUCCESS,
        medications: fakeMedicationsData,
      };

      const action = medicationActions.loadPatientMedicationsSuccess(fakeMedicationsData);

      expect(action).toEqual(expectedAction);
    });
  });

  describe('#loadPatientMedicationsFailure', () => {
    it('should create a LOAD_MEDICATIONS_FAILURE action', () => {
      const expectedAction = {
        type: types.LOAD_MEDICATIONS_FAILURE,
      };

      const action = medicationActions.loadPatientMedicationsFailure();

      expect(action).toEqual(expectedAction);
    });
  });

  describe('#loadMedications Async Actions', () => {
    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);
    const fakeMedicationsData = 'testMedicationsData';
    const smart = {
      patient: {
        api: {
          fetchAll: td.function(),
        },
      },
    };

    it('should create BEGIN_AJAX_CALL and LOAD_MEDICATIONS_SUCCESS when patient medications data is loaded successfully', (done) => {
      const expectedActions = [
        { type: types.BEGIN_AJAX_CALL },
        { type: types.LOAD_MEDICATIONS_SUCCESS, medications: fakeMedicationsData },
      ];
      const store = mockStore({ patient: {} });

      td.when(smart.patient.api.fetchAll({
        type: 'MedicationStatement',
      }))
        .thenResolve(fakeMedicationsData);

      store.dispatch(medicationActions.loadMedications(smart)).then(() => {
        const actions = store.getActions();

        expect(actions).toEqual(expectedActions);
        done();
      });
    });

    it('should create BEGIN_AJAX_CALL, AJAX_CALL_ERROR and LOAD_MEDICATIONS_FAILURE when an error occurs while loading patient medications data', (done) => {
      const expectedActions = [
        { type: types.BEGIN_AJAX_CALL },
        { type: types.AJAX_CALL_ERROR },
        { type: types.LOAD_MEDICATIONS_FAILURE },
      ];
      const store = mockStore({ patient: {} });

      td.when(smart.patient.api.fetchAll({
        type: 'MedicationStatement',
      }))
        .thenReject('404: Resource not found');

      store.dispatch(medicationActions.loadMedications(smart)).then(() => {
        const actions = store.getActions();

        expect(actions).toEqual(expectedActions);
        done();
      });
    });
  });
});

