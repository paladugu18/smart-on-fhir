import React from 'react';
import { shallow } from 'enzyme';

import LoadingDots from '../LoadingDots';

describe('LoadingDots Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoadingDots />);
  });

  it('should contain a span element as its top level element', () => {
    expect(wrapper.at(0).type()).toEqual('span');
  });

  it("span element in LoadingDots component should contain the text '. '(dot space)", () => {
    expect(wrapper.props().children).toHaveLength(2);
    expect(wrapper.props().children[0]).toEqual('.');
    expect(wrapper.props().children[1].length).toEqual(1);
    expect(wrapper.props().children[1].trim()).toEqual('');
  });
});
