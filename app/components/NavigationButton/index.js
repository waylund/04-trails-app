/**
 *
 * NavigationButton
 *
 */

import React from 'react';
import { string } from 'prop-types';
// import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const styles = {
  button: {
    margin: '25px',
  },
};

/* eslint-disable react/prefer-stateless-function */
class NavigationButton extends React.Component {
  render() {
    return (
      <Button
        variant="contained"
        href={this.props.buttonLink}
        color="primary"
        style={styles.button}
      >
        {this.props.buttonText}
      </Button>
    );
  }
}

NavigationButton.propTypes = {
  buttonLink: string.isRequired,
  buttonText: string.isRequired,
};

export default NavigationButton;
