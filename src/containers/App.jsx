import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import PatientContainer from './PatientContainer';
import MedicationStatementsContainer from './MedicationContainer';
import '../../styles/components/common.scss';

/**
 * This component handles the App template used on every page.
 */
const App = props => (
  <div className="app-Container">
    <Header loading={props.loading} />
    <PatientContainer />
    <MedicationStatementsContainer />
  </div>
);

App.propTypes = {
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0,
  };
}

export default connect(mapStateToProps)(App);
