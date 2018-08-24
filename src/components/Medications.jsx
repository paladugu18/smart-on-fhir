import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'terra-heading';
import { FormattedMessage } from 'react-intl';

import MedicationStatementDetails from './MedicationStatementDetails';
import MedicationStatements from './MedicationStatements';
import '../../styles/components/common.scss';

/**
 * Renders a list of clickable patient medications and when a medication 
 * statement is clicked it displays the medication details.
 */
class Medications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      medication: null,
    };

    this.onMedicationClick = this
      .onMedicationClick
      .bind(this);
  }

  onMedicationClick(medication) {
    this.setState({ medication });
  }

  render() {
    return (
      <div className="div">
        <Heading size="large" level={1}>
          <FormattedMessage
            id={'Medications.title'}
          />
        </Heading>
        <MedicationStatements
          medicationStatements={this.props.medicationStatements}
          onMedicationClick={this.onMedicationClick}
        />
        {
          this.state.medication != null &&
            <div className="div">
              <Heading size="large" level={1}>
                <FormattedMessage
                  id={'Medications.details'}
                />
              </Heading>
              <MedicationStatementDetails
                medication={this.state.medication}
                id={10}
              />
            </div>
        }
      </div>
    );
  }
}

Medications.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  medicationStatements: PropTypes.array.isRequired,
};

export default Medications;
