import React from 'react';
import { Col, Row } from "react-bootstrap";
import Authors from "../authors/Authors";
import Books from "../books/books";

const LibraryBody: React.FC = () => {
  return (
    <React.Fragment>
      <Row className="library-body mt-4">
        <Col xs={12} md={6} className="px-5 mb-5">
          <Books />
        </Col>
        <Col xs={12} md={6} className="px-5 mb-5">
          <Authors />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default LibraryBody;
