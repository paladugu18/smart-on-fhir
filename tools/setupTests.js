/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/first */
import './browserPolyfills';
import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new ReactSixteenAdapter() });
