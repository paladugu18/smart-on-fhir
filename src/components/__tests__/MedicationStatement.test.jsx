import React from 'react';
import { shallow } from 'enzyme';

import MedicationStatement from '../MedicationStatement';

describe('MedicationStatement Component', () => {
  let wrapper;
  let medication;

  beforeEach(() => {
    medication = {
      medicationReference: {
        display: 'testDisplay',
      },
    };
    const onClick = () => null;

    wrapper = shallow(<MedicationStatement medication={medication} onClick={onClick} />);
  });

  it('should contain a div element as its top level element', () => {
    expect(wrapper.at(0).type()).toEqual('div');
  });

  it("should contain a 'Card' element", () => {
    expect(wrapper.find('Card')).toHaveLength(1);
  });

  it("should contain a 'Card' element with props 'onClick', 'hasPaddingVertical'", () => {
    expect(wrapper.find('Card').at(0).children().props().hasPaddingVertical).toBe(true);
    expect(wrapper.find('Card').at(0).children().props().onClick).toBeDefined();
  });

  it("should contain a children with value 'testDisplay'", () => {
    expect(wrapper.find('Card').at(0).children().props().children).toBe(medication.medicationReference.display);
  });
});
