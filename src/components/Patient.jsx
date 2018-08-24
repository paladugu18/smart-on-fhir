import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DemographicsBanner from 'terra-demographics-banner';

import '../../styles/components/common.scss';

/**
 * Stateless component to render patient data.
 * @param {Object} props - The patient object.
 * @param {Object} props.patient - Patient data.
 */
const Patient = ({ patient }) => {
  /**
   * Capitalizes the first letter in the given string.
   * @param {String} string
   * @return {String} - A string with the the first letter capitalized.
   */
  const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

  /**
   * Calculates the age of the person.
   * @param {String} dob - Date of Birth 
   * @return {String} - Person's age
   */
  const calculateAge = (dob) => {
    let age;
    age = moment().diff(moment(dob, 'YYYY-MM-DD'), 'years');
    if (age > 0) {
      return `${age} Years`;
    }

    age = moment().diff(moment(dob, 'YYYY-MM-DD'), 'months');
    if (age > 0) {
      return `${age} Months`;
    }

    return `${moment().diff(moment(dob, 'YYYY-MM-DD'), 'days')} Days`;
  };

  return (
    <div className="div">
      <DemographicsBanner
        age={patient.birthDate ? calculateAge(patient.birthDate) : '--'}
        dateOfBirth={patient.birthDate ? moment(patient.birthDate).format('MMM Do YYYY') : '--'}
        gender={patient.gender ? `${capitalizeFirstLetter(patient.gender)}` : '--'}
        personName={patient.name ? `${patient.name[0].family[0]} ${patient.name[0].given[0]}` : '--'}
        preferredFirstName={patient.name ? `${patient.name[0].given[0]}` : '--'}
      />
    </div>
  );
};

Patient.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  patient: PropTypes.object.isRequired,
};

export default Patient;
