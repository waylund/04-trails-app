/**
 *
 * SubmissionForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectSubmissionForm from './selectors';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class SubmissionForm extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>SubmissionForm</title>
          <meta name="description" content="Description of SubmissionForm" />
        </Helmet>
        <h1>Submission Form</h1>
      </div>
    );
  }
}

SubmissionForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  submissionForm: makeSelectSubmissionForm(),
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

const withReducer = injectReducer({ key: 'submissionForm', reducer });

export default compose(
  withReducer,
  withConnect,
)(SubmissionForm);
