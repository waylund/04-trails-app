import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const Linksstyle = styled.div`
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 73%;
`;

function Links() {
  return (
    <Linksstyle>
      <Link href="/" label="new Submission" />
      <Link href="/submit" label="view Submissions" />
    </Linksstyle>
  );
}

export default Links;
