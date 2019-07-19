import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ALink = styled.div`
  text-align: center;
`;

class Link extends React.Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.handleclick = this.handleclick.bind(this);
  }

  handleclick(event) {
    return event;
  }

  render() {
    return (
      <ALink>
        <a href={this.props.href}>{this.props.label}</a>
      </ALink>
    );
  }
}

export default Link;
