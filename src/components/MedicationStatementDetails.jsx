import React from 'react';
import PropTypes from 'prop-types';

/**
 * Stateless component to render medication details(Name and Medication).
 * @param {Object} props - Patient medication statement details.
 * @param {Object} props.medication - Patient individual medication statement.
 */
const MedicationStatementDetails = ({ medication }) => (
  <div>
    <p>
      <b>Name: </b>
      {medication != null ? medication.medicationReference.display : '--'}
    </p>
    <p>
      <b>Dosage: </b>
      {medication != null ? medication.dosage[0].text : '--'}
    </p>
  </div>
);

MedicationStatementDetails.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  medication: PropTypes.object,
};

MedicationStatementDetails.defaultProps = {
  medication: null,
};

export default MedicationStatementDetails;
