import React from "react";
import { Col, Row } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { IconContext } from "react-icons";

type AddBookProps = {
  onAddClick: (bool: boolean) => void;
};

const AddBook: React.FC<AddBookProps> = (props) => {
  return (
      <Row xs={3} className="mt-3 ps-2" onClick={() => props.onAddClick(true)}>
        <Col xs={12} className="px-0 AddAuthor d-flex align-items-end">
          <IconContext.Provider
            value={{
              color: "#0f4aa6",
              className: "global-class-name",
              size: "1.5em",
            }}
          >
            <FiPlus className="px-0 me-2" />
            <span className="">Add Book</span>
          </IconContext.Provider>
        </Col>
      </Row>
    );
};

export default AddBook;