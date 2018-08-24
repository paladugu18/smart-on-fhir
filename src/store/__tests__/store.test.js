import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../../reducers/rootReducer';
import initialState from '../../reducers/initialState';
import * as patientActions from '../../actions/patientActions';
import * as medicationActions from '../../actions/medicationStatementActions';

describe('Redux Store', () => {
  let store;

  beforeEach(() => {
    store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  });

  it('should load patient and medications data successfully', () => {
    const patient = 'testPatientData';
    const medications = 'testMedicationsData';

    const loadPatientSuccessAction = patientActions.loadPatientSuccess(patient);
    const loadMedicationsSuccessAction = medicationActions
      .loadPatientMedicationsSuccess(medications);
    store.dispatch(loadPatientSuccessAction);
    store.dispatch(loadMedicationsSuccessAction);
    const state = store.getState();

    expect(state.patient).toEqual(patient);
    expect(state.medicationStatements).toEqual(medications);
  });

  it('should not change patient state in redux store when loading patient data failed', () => {
    const loadPatientFailureAction = patientActions.loadPatientFailure();
    store.dispatch(loadPatientFailureAction);

    expect(store.getState().patient).toEqual({});
  });

  it('should not change medication statements state in redux store when loading medications data failed', () => {
    const loadMedicationsFailureAction = medicationActions.loadPatientMedicationsFailure();
    store.dispatch(loadMedicationsFailureAction);

    expect(store.getState().medicationStatements).toEqual([]);
  });
});
