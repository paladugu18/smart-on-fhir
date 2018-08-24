import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'terra-heading';
import { FormattedMessage } from 'react-intl';

import LoadingDots from './LoadingDots';
import '../../styles/components/common.scss';

/**
 * Stateless component to render header. It also renders loading dots if
 * there are any async calls in progress.
 * @param {Boolean} props.loading - Boolean value that tells if any async calls in progress.
 */
const Header = ({ loading }) => (
  <div>
    <Heading size="large" level={1}>
      <FormattedMessage
        id={'Header.title'}
      />
    </Heading>
    {loading && <LoadingDots interval={100} dots={20} />}
  </div>
);

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Header;
