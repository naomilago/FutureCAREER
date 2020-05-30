import React, { useMemo } from 'react';
import { Container, Row, Col } from "reactstrap";

import { ReactComponent as CoWorkingSvg } from "../../assets/co-working.svg";
import Item from "./item";

function OurDetails() {
  const items = useMemo(() => ["Resume", "Personal Information", "Education and Experiences", "Employement history"], [])
  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <CoWorkingSvg />
        </Col>
        <Col>
          <h2>We provide an easy way to get hired</h2>
          <p className="text-dark">
          You can explore the features that we provide after signing up following a profile with:
          </p>
          <ul className="list-unstyled">
            {items.map((desc, index) => <Item key={index} desc={desc}/>)}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default OurDetails;