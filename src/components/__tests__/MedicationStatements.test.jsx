import React from 'react';
import { shallow } from 'enzyme';

import MedicationStatements from '../MedicationStatements';

describe('MedicationStatements Component', () => {
  let wrapper;

  describe('Medication Statements data is valid and exists', () => {
    let fakeMedicationStatementsData;
    let onMedicationClick;

    beforeEach(() => {
      fakeMedicationStatementsData = [
        {
          id: 'fakeMedication1',
        }, {
          id: 'fakeMedication2',
        },
      ];
      onMedicationClick = () => null;

      wrapper = shallow(
        <MedicationStatements
          medicationStatements={fakeMedicationStatementsData}
          onMedicationClick={onMedicationClick}
        />,
      );
    });

    it('renders div as its top level element', () => {
      expect(wrapper.at(0).type()).toEqual('div');
    });

    it('renders two medication statement', () => {
      expect(wrapper.find('MedicationStatement')).toHaveLength(2);
    });

    it("should render two MedicationStatement with props 'medication' and 'onClick:'", () => {
      expect(wrapper.find('MedicationStatement').at(0).props().medication).toEqual(fakeMedicationStatementsData[0]);
      expect(wrapper.find('MedicationStatement').at(0).props().onClick).toEqual(onMedicationClick);
      expect(wrapper.find('MedicationStatement').at(1).props().medication).toEqual(fakeMedicationStatementsData[1]);
      expect(wrapper.find('MedicationStatement').at(1).props().onClick).toEqual(onMedicationClick);
    });
  });

  describe('Medication Statements are empty', () => {
    beforeEach(() => {
      const fakeMedicationStatementsData = [];
      const onMedicationClick = () => null;

      wrapper = shallow(
        <MedicationStatements
          medicationStatements={fakeMedicationStatementsData}
          onMedicationClick={onMedicationClick}
        />,
      );
    });

    it('renders div as its top level element', () => {
      expect(wrapper.at(0).type()).toEqual('div');
    });

    it('renders zero medication statement', () => {
      expect(wrapper.find('MedicationStatement')).toHaveLength(0);
    });

    it("renders 'Alert' element", () => {
      expect(wrapper.find('Alert')).toHaveLength(1);
    });

    it("render a value within the message id 'Medications.nil.message'", () => {
      expect(wrapper.find('Alert').find('FormattedMessage').find('FormattedMessage').props().id).toEqual('Medications.nil.message');
    });
  });
});
