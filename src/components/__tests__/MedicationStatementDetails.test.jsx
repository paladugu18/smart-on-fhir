import React from 'react';
import { shallow } from 'enzyme';

import MedicationStatementDetails from '../MedicationStatementDetails';

describe('MedicationStatementDetails Component', () => {
  let wrapper;

  describe('Medication data is valid', () => {
    beforeEach(() => {
      const medication = {
        dosage: [
          {
            text: 'testDosage',
          },
        ],
        medicationReference: {
          display: 'testDisplay',
        },
      };
      wrapper = shallow(<MedicationStatementDetails medication={medication} />);
    });

    it('should contain div element as its top level element', () => {
      expect(wrapper.at(0).type()).toEqual('div');
    });

    it('should render medication details: name and dosage', () => {
      expect(wrapper.find('p')).toHaveLength(2);
      expect(wrapper.find('p').at(0).text()).toEqual('Name: testDisplay');
      expect(wrapper.find('p').at(1).text()).toEqual('Dosage: testDosage');
    });
  });

  describe('Medication data is null', () => {
    beforeEach(() => {
      const medication = null;
      wrapper = shallow(<MedicationStatementDetails medication={medication} />);
    });

    it('should contain div element as its top level element', () => {
      expect(wrapper.at(0).type()).toEqual('div');
    });

    it("should render medication name and dosage with value '--'", () => {
      expect(wrapper.find('p')).toHaveLength(2);
      expect(wrapper.find('p').at(0).text()).toEqual('Name: --');
      expect(wrapper.find('p').at(1).text()).toEqual('Dosage: --');
    });
  });
});
