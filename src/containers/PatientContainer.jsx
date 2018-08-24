import { connect } from 'react-redux';

import Patient from '../components/Patient';

// This stateful container wraps Patient component to connect it to redux store.

/**
 * It returns the state that should be exposed as props.
 * @param {Object} state - Redux state
 */
const mapStateToProps = state => ({
  patient: state.patient,
});

export default connect(mapStateToProps)(Patient);
