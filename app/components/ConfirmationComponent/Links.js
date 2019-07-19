import React from 'react';
import styled from 'styled-components';
import ALink from './Link';

const Linksstyle = styled.div`
  justify-content: center;
  flex-wrap: wrap;
`;

function Links() {
  return (
    <Linksstyle>
      <ALink address="/submit" label="new Submission" />
      <ALink address="/conditions" label="view Submissions" />
    </Linksstyle>
  );
}

export default Links;
