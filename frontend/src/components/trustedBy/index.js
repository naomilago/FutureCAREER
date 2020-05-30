import React from 'react';

import List from './list';
import { Container } from './styled';

function TrustedBy() {
  return (
    <Container>
      <h2>Trusted by Thousands of Happy Workers</h2>
      <div className="text-center">
        <h6 className="text-secondary">
          These are the stories of our costumers who have joined us with great <br /> pleasure when getting a better future career.
        </h6>
      </div>
      <List />
    </Container>
  )
}

export default TrustedBy;