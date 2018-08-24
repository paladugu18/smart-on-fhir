import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'terra-alert';
import { FormattedMessage } from 'react-intl';

import MedicationStatement from './MedicationStatement';

/**
 * Stateless component to display list of patient medications.
 * @param {Object} props - Patient medication statements object and associated actions.
 * @param {Array} props.medicationStatements - Array of patient medications.
 * @param {Function} props.onMedicationClick - Function to handle clicks on medications statement. 
 */
const MedicationStatements = ({ medicationStatements, onMedicationClick }) => (
  <div>
    {
      medicationStatements.length > 0
        ? (
          <div>
            {
              medicationStatements.map(medication => (
                <MedicationStatement
                  key={medication.id}
                  medication={medication}
                  onClick={onMedicationClick}
                />
              ))
            }
          </div>
        )
        : (
          <Alert type={Alert.Opts.Types.INFO} >
            <FormattedMessage
              id={'Medications.nil.message'}
            />
          </Alert>
        )
    }
  </div>
);

MedicationStatements.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  medicationStatements: PropTypes.array.isRequired,
  onMedicationClick: PropTypes.func.isRequired,
};

export default MedicationStatements;
