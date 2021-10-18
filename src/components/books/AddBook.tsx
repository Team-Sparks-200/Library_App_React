import React from "react";
import {Col, Row} from "react-bootstrap";
import {FiPlus} from "react-icons/fi";

type AddBookProps = {
    onAddClick: () => void;
};

const AddBook: React.FC<AddBookProps> = (props) => {

    const {onAddClick} = props;

    return (
        <Row xs={3} className="mt-3 ps-2" onClick={onAddClick}>
            <Col xs={12} className="px-0 AddAuthor d-flex align-items-end">
                <FiPlus className="px-0 me-2" size={24} color='#0f4aa6'/>
                <span className="">Add Book</span>
            </Col>
        </Row>
    );
};

export default AddBook;
