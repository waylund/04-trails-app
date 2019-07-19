import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const Linksstyle = styled.div`
  justify-content: center;
  flex-wrap: wrap;
`;

function Links() {
  return (
    <Linksstyle>
      <Link href="/submit" label="new Submission" />
      <Link href="/" label="view Submissions" />
    </Linksstyle>
  );
}

export default Links;
