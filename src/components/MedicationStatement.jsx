import React from 'react';
import PropTypes from 'prop-types';
import Card from 'terra-card';

import '../../styles/components/MedicationStatement.scss';

/**
 * Stateless component to display clickable medication statement(ID). It 
 * render the medication id, which upon clicking will display medication details.
 * @param {Object} props - Patient medication and associated actions.
 * @param {Object} props.medication - Patient individual medication statement.
 * @param {Function} props.onClick - Function to handle clicks on medications statement. 
 */
const MedicationStatement = ({ medication, onClick }) => (
  <div>
    <Card className="medication-Card" key={medication.id} >
      <Card.Body
        className="medication-Card-Body"
        onClick={() => onClick(medication)}
        hasPaddingVertical
      >
        {medication.medicationReference.display}
      </Card.Body>
    </Card>
  </div>
);

MedicationStatement.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  medication: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MedicationStatement;
