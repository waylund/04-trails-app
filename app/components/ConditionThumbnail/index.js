/**
 *
 * ConditionThumbnail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  width: 20%;
  background: #eee;
  border: 1px black solid;
  margin: 0 auto;
  padding: 5px;
`;

function ConditionThumbnail(props) {
  return (
    <Wrapper>
      <img src="https://placebear.com/100/100" alt="" />
      <div>
        <h3>{props.description}</h3>
        <h4>{props.location}</h4>
      </div>
    </Wrapper>
  );
}

ConditionThumbnail.propTypes = {
  description: PropTypes.string,
  location: PropTypes.string,
};

export default ConditionThumbnail;
