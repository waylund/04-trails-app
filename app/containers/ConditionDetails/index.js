/**
 *
 * ConditionDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectConditionDetails from './selectors';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class ConditionDetails extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>ConditionDetails</title>
          <meta name="description" content="Description of ConditionDetails" />
        </Helmet>
        <h1>Condition Details</h1>
      </div>
    );
  }
}

ConditionDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  conditionDetails: makeSelectConditionDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'conditionDetails', reducer });

export default compose(
  withReducer,
  withConnect,
)(ConditionDetails);
