import { connect } from 'react-redux';

import Medications from '../components/Medications';

// This stateful container wraps MedicationStatements component to connect it to redux store.

/**
 * It returns the state that should be exposed as props.
 * @param {Object} state - Redux state
 */
const mapStateToProps = state => ({
  medicationStatements: state.medicationStatements,
});

export default connect(mapStateToProps)(Medications);
