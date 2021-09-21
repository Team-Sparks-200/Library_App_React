import React from 'react';
import { Col, Row, Container } from "react-bootstrap";
import Welcome from "./components/welcome/welcome";
import LibraryBody from "./components/welcome/libraryBody";

const LibraryApp: React.FC = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col xs={12}>
          <Welcome />
        </Col>
        <Col xs={12}>
          <LibraryBody />
        </Col>
      </Row>
    </Container>
  );
};

export default LibraryApp;