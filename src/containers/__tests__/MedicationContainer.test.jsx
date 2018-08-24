import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { I18nProvider } from 'terra-i18n';

import messages from '../../utils/translations/message-translations';
import MedicationContainer from '../MedicationContainer';
import MedicationStatements from '../../components/MedicationStatements';

describe('Medication Container', () => {
  let wrapper;
  const fakeMedicationStatementsData = [
    {
      id: 'testId1',
      medicationReference: {
        display: 'testDisplay1',
      },
    }, {
      id: 'testId2',
      medicationReference: {
        display: 'testDisplay1',
      },
    },
  ];
  const middleware = [thunk];

  const mockStore = configureMockStore(middleware);
  const mockStoreInitialized = mockStore({
    medicationStatements: fakeMedicationStatementsData,
  });

  beforeEach(() => {
    wrapper = mount(
      <I18nProvider locale={'en-US'} messages={messages['en-US']}>
        <Provider store={mockStoreInitialized}>
          <MedicationContainer />
        </Provider>
      </I18nProvider>,
    );
  });

  it('should render the MedicationContainer component', () => {
    expect(wrapper.find(MedicationContainer)).toHaveLength(1);
    expect(wrapper.find(MedicationContainer).find(MedicationStatements)).toHaveLength(1);
    expect(wrapper.find(MedicationContainer).find(MedicationStatements)
      .props().medicationStatements)
      .toEqual(fakeMedicationStatementsData);
  });
});
