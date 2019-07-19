/**
 *
 * ConfirmationPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectConfirmationPage from './selectors';
import reducer from './reducer';

import ConfirmationComponent from '../../components/ConfirmationComponent';

/* eslint-disable react/prefer-stateless-function */
export class ConfirmationPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>ConfirmationPage</title>
          <meta name="description" content="Description of ConfirmationPage" />
        </Helmet>
        <ConfirmationComponent />
      </div>
    );
  }
}

// ConfirmationPage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  confirmationPage: makeSelectConfirmationPage(),
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

const withReducer = injectReducer({ key: 'confirmationPage', reducer });

export default compose(
  withReducer,
  withConnect,
)(ConfirmationPage);
