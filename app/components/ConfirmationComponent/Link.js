import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const { Link } = require('react-router-dom');

const Linkstyle = styled.div`
  text-align: center;
`;

class ALink extends React.Component {
  static propTypes = {
    address: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Linkstyle>
        <Link to={this.props.address}>{this.props.label}</Link>
      </Linkstyle>
    );
  }
}

export default ALink;
