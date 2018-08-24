import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import Patient from '../Patient';

describe('Patient Component', () => {
  let wrapper;

  describe('Patient data exists and is valid', () => {
    let fakePatientData;

    beforeEach(() => {
      fakePatientData = {
        name: [
          {
            family: ['testFamilyName'],
            given: ['testGivenName'],
          },
        ],
        gender: 'Male',
        birthDate: '1990-01-01',
      };
      wrapper = shallow(<Patient patient={fakePatientData} />);
    });

    it('renders div as it top level element', () => {
      expect(wrapper.at(0).type()).toEqual('div');
    });

    it('renders DemographicsBanner as the first element in div', () => {
      expect(wrapper.find('div').childAt(0).name()).toEqual('DemographicsBanner');
    });

    it('should match the given props', () => {
      const demographicsBannerProps = wrapper.find('DemographicsBanner').props();

      expect(demographicsBannerProps.age).toEqual('28 Years');
      expect(demographicsBannerProps.dateOfBirth).toEqual('Jan 1st 1990');
      expect(demographicsBannerProps.gender).toEqual('Male');
      expect(demographicsBannerProps.personName).toEqual('testFamilyName testGivenName');
      expect(demographicsBannerProps.preferredFirstName).toEqual('testGivenName');
    });

    it('should render age if age is less than an year', () => {
      fakePatientData.birthDate = moment().subtract(9, 'months').format('YYYY-MM-DD');
      wrapper = shallow(<Patient patient={fakePatientData} />);

      const demographicsBannerProps = wrapper.find('DemographicsBanner').props();

      expect(demographicsBannerProps.age).toEqual('9 Months');
    });

    it('should render age if age is less than a month', () => {
      fakePatientData.birthDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
      wrapper = shallow(<Patient patient={fakePatientData} />);

      const demographicsBannerProps = wrapper.find('DemographicsBanner').props();

      expect(demographicsBannerProps.age).toEqual('7 Days');
    });
  });

  describe('Patient data is empty', () => {
    beforeEach(() => {
      const fakePatientData = {};
      wrapper = shallow(<Patient patient={fakePatientData} />);
    });

    it('renders div as it top level element', () => {
      expect(wrapper.at(0).type()).toEqual('div');
    });

    it('renders DemographicsBanner as the first element in div', () => {
      expect(wrapper.find('div').childAt(0).name()).toEqual('DemographicsBanner');
    });

    it("should render value '--' for missing props", () => {
      const demographicsBannerProps = wrapper.find('DemographicsBanner').props();

      expect(demographicsBannerProps.age).toEqual('--');
      expect(demographicsBannerProps.dateOfBirth).toEqual('--');
      expect(demographicsBannerProps.gender).toEqual('--');
      expect(demographicsBannerProps.personName).toEqual('--');
      expect(demographicsBannerProps.preferredFirstName).toEqual('--');
    });
  });
});
