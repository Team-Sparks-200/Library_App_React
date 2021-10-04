import React from "react";
import { Col, Row } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { IconContext } from "react-icons";

type AddBookProps = {
  onAddClick: (bool: boolean) => void;
};

const AddBook: React.FC<AddBookProps> = (props) => {
  return (
    <Row className="AddBook mt-3 p-0" onClick={() => props.onAddClick(true)}>
      <Col className="p-0">
        <IconContext.Provider
          value={{
            color: "blue",
            className: "global-class-name",
            size: "1.5em",
          }}
        >
          <FiPlus className="m-0 p-0" />
          <span>Add Book</span>
        </IconContext.Provider>
      </Col>
    </Row>
  );
};

export default AddBook;
