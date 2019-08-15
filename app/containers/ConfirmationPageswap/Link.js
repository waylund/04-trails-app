import React from 'react';
import PropTypes from 'prop-types';

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
      <div>
        <a href={this.props.href}>{this.props.label}</a>
      </div>
    );
  }
}

export default Link;
