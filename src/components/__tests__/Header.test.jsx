import React from 'react';
import { mount } from 'enzyme';
import { I18nProvider } from 'terra-i18n';

import messages from '../../utils/translations/message-translations';
import Header from '../Header';
import LoadingDots from '../LoadingDots';

describe('Header Component', () => {
  let wrapper;

  describe("Ajax calls are in progress-loading is set to 'true'", () => {
    beforeEach(() => {
      wrapper = mount(
        <I18nProvider locale={'en-US'} messages={messages['en-US']}>
          <Header loading />
        </I18nProvider>,
      );
    });

    it('renders div as its top level element', () => {
      expect(wrapper.childAt(0).childAt(0).type()).toEqual('div');
    });

    it("renders h1 and sets its text to 'Patient Medication Viewer", () => {
      expect(wrapper.find('h1').text()).toEqual('Patient Medication Viewer');
    });

    it('should contain one LoadingDots component', () => {
      expect(wrapper.find(LoadingDots)).toHaveLength(1);
    });

    it('should assert the props interval to 100 and dots to 20', () => {
      expect(wrapper.find(LoadingDots).prop('interval')).toEqual(100);
      expect(wrapper.find(LoadingDots).prop('dots')).toEqual(20);
    });

    it('should contain a span element in LoadingDots component', () => {
      expect(wrapper.find(LoadingDots).childAt(0).type()).toEqual('span');
    });

    it("span element in LoadingDots component should contain the text'.'", () => {
      expect(wrapper.find(LoadingDots).find('span').text().trim()).toEqual('.');
    });
  });

  describe("No ajax calls are in progress-loading is set to 'false'", () => {
    beforeEach(() => {
      wrapper = mount(
        <I18nProvider locale={'en-US'} messages={messages['en-US']}>
          <Header loading={false} />
        </I18nProvider>,
      );
    });

    it('renders div as its top level element', () => {
      expect(wrapper.childAt(0).childAt(0).type()).toEqual('div');
    });

    it("renders h1 and sets its text to 'Patient Medication Viewer", () => {
      expect(wrapper.find('h1').text()).toEqual('Patient Medication Viewer');
    });

    it('should not contain LoadingDots component', () => {
      expect(wrapper.find(LoadingDots)).toHaveLength(0);
    });
  });
});
