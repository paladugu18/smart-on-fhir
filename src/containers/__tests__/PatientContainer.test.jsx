import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { I18nProvider } from 'terra-i18n';

import messages from '../../utils/translations/message-translations';

import PatientContainer from '../PatientContainer';
import Patient from '../../components/Patient';

describe('Patient Container', () => {
  let wrapper;
  const fakePatientData = {
    name: [
      {
        family: ['testFamilyName'],
        given: ['testGivenName'],
      },
    ],
    birthDate: '1990-01-01',
  };
  const middleware = [thunk];

  const mockStore = configureMockStore(middleware);
  const mockStoreInitialized = mockStore({
    patient: fakePatientData,
  });

  beforeEach(() => {
    wrapper = mount(
      <I18nProvider locale={'en-US'} messages={messages['en-US']}>
        <Provider store={mockStoreInitialized}>
          <PatientContainer />
        </Provider>
      </I18nProvider>,
    );
  });

  it('should render the PatientContainer component', () => {
    expect(wrapper.find(PatientContainer)).toHaveLength(1);
    expect(wrapper.find(PatientContainer).find(Patient)).toHaveLength(1);
    expect(wrapper.find(PatientContainer).find(Patient).props().patient).toEqual(fakePatientData);
  });
});
