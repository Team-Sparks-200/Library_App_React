import React from "react";
import { Col, Row } from "react-bootstrap";

const NoBooksList: React.FC = () => {
  return (
    <Row xs={12}>
      <Col className="px-0 NoBookListed ">No books listed here.</Col>
    </Row>
  );
};

export default NoBooksList;
