import React from 'react';
import { mount } from 'enzyme';
import { I18nProvider } from 'terra-i18n';

import messages from '../../utils/translations/message-translations';
import Medications from '../Medications';

describe('Medications Component', () => {
  let wrapper;
  let fakeProps;

  beforeEach(() => {
    fakeProps = {
      medicationStatements: [{
        id: 'testId',
        dosage: [
          {
            text: 'testDosage',
          },
        ],
        medicationReference: {
          display: 'testDisplay',
        },
      }],
      actions: { onMedicationClick: () => null },
    };

    wrapper = mount(
      <I18nProvider locale={'en-US'} messages={messages['en-US']}>
        <Medications {...fakeProps} />
      </I18nProvider>,
    );
  });

  it('should contain a div element as its top level element', () => {
    expect(wrapper.childAt(0).childAt(0).type()).toEqual('div');
  });

  it("renders h1 and sets its text to 'Medications", () => {
    expect(wrapper.find('h1').text()).toEqual('Medications');
  });

  it("should render 'MedicationStatements'", () => {
    expect(wrapper.find('MedicationStatements')).toHaveLength(1);
  });

  it("should not render 'MedicationStatementDetails' when the medication item is not clicked", () => {
    expect(wrapper.find('MedicationStatementDetails')).toHaveLength(0);
  });

  it("should render 'MedicationStatementDetails' when a medication is clicked", () => {
    wrapper.find('Card').find('div').last().simulate('click');

    expect(wrapper.find('MedicationStatementDetails')).toHaveLength(1);
  });
});
