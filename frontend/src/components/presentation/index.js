import React from 'react';
import { Row, Col } from "reactstrap";

import {
  ReactComponent as WorkingRemotely
} from "../../assets/working-remotely.svg";
import { Container, Button } from "./styled";

function Presentation() {
  return (
    <Container>
      <Row>
        <Col>
           <h1>Find the World's Best Remote Job</h1>
           <blockquote>
            <p className="text-muted">
                Get in touch with the newest job offers with
                <span className="font-weight-bold"> FutureCAREER</span> discovering the best choices for what you’re looking for.
            </p>
           </blockquote>
           <div className="mt-5">
            <Button size="lg" color="primary">Get Started</Button>
           </div>
        </Col>
        <Col>
          <WorkingRemotely />
        </Col>
      </Row>
    </Container>
  )
}

export default Presentation;