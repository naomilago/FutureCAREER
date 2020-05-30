import React from 'react';

import { Container, Button } from "./styled";

function Subscribe() {
  return (
    <Container>
      <div>
        <h2>Subscribe Now for <br /> Get Special News!</h2>
        <p>Let's subscribe with us and be updated with new jobs.</p>
      </div>
      <div>
        <Button size="lg">Subscribe Now!</Button>
      </div>
    </Container>
  );
}

export default Subscribe;