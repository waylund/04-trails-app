/**
 *
 * DeleteMe
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectDeleteMe from './selectors';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class DeleteMe extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>DeleteMe</title>
          <meta name="description" content="Description of DeleteMe" />
        </Helmet>
      </div>
    );
  }
}

DeleteMe.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  deleteMe: makeSelectDeleteMe(),
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

const withReducer = injectReducer({ key: 'deleteMe', reducer });

export default compose(
  withReducer,
  withConnect,
)(DeleteMe);
