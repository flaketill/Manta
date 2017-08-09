// React Libraries
import React from 'react';
import PropTypes from 'prop-types';

// 3rd Party Libs
const format = require('date-fns/format');
const _ = require('lodash');

// Proptypes
Header.propTypes = {
  receipt: PropTypes.object.isRequired,
};

// Component
function Header(props) {
  return (
    <h1 className="clearfix">
      <small>
        <span>DATE</span>
        <br /> {format(props.receipt.created_at, 'DD-MM-YYYY')}
      </small>{' '}
      INVOICE #
      {_.truncate(props.receipt._id, {
        length: 8,
        omission: '',
      })}
    </h1>
  );
}

export default Header;
