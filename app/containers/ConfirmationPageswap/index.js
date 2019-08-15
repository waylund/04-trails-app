/**
 *
 * ConfirmationComponent
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Links from './Links';
import messages from './messages';

const Confirmation = styled.div`
  background-color: gray;
  disply: flex;
`;

const Title = styled.div`
  background-color: teal;
  min-width: 100%;
`;

function ConfirmationComponent() {
  return (
    <Confirmation>
      <Title>hi</Title>
      <Links />
      <FormattedMessage {...messages.header} />
    </Confirmation>
  );
}

ConfirmationComponent.propTypes = {};

export default ConfirmationComponent;
