import React from 'react';
import {Col, Row} from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { IconContext } from "react-icons";

type AddAuthorProps = {
    onAddClick : (clicked: boolean) => void
}


const AddAuthor: React.FC<AddAuthorProps> = (props) => {
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
            <span className="">Add Author</span>
          </IconContext.Provider>
        </Col>
      </Row>
    );
};

export default AddAuthor;
