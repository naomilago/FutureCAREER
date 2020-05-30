import React, { useMemo } from 'react';

import { Container } from "./styled";
import Item from "./item";


function List() {
  const jobs = useMemo(() => new Array(26).fill(0), []);
  return (
    <Container>
      {jobs.map((_, index) => <Item key={index}/>)}
    </Container>
  );
}

export default List;