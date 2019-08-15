/**
 *
 * ConfirmationPage
 *
 */

import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectConfirmationPage from './selectors';
import reducer from './reducer';

import ConfirmationComponent from '../../components/ConfirmationComponent';

const Confirm = styled.div`
  display: flex;
  width: 100%;
  min-height: inherit;
  flex-grow: 1;
  position: absolute;
  height: 100%;
`;
/* eslint-disable react/prefer-stateless-function */
export class ConfirmationPage extends React.Component {
  render() {
    return (
      <Confirm>
        <Helmet>
          <title>ConfirmationPage</title>
          <meta name="description" content="Description of ConfirmationPage" />
        </Helmet>
        <ConfirmationComponent />
      </Confirm>
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
