import React from 'react';
import {Col, Form, Row} from "react-bootstrap";
import {FiXCircle} from "react-icons/fi";
import FormButton from "../common/Formbutton";

const AuthorForm: React.FC = () => {
    return (
        <Col xs={12} lg={10} className="form mt-4 px-0">
            <Col xs={12}>
                <Row className="form-title ps-2">
                    <Col xs={9} className="p-0">
                        <h5><label>Create Author</label></h5>
                    </Col>
                    <Col xs={3} className="ps-5 closebtn">
                        <FiXCircle size={18} />
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={{span: 11, offset: 1}} className="px-0">
                <Form className="mt-3 col-md-10">
                    <Form.Group>
                        <Form.Label className="mb-0 ms-1 form-label">Name of Author</Form.Label>
                        <Form.Control type="text" required/>
                    </Form.Group>
                    <FormButton/>
                </Form>
            </Col>
        </Col>
    );
};

export default AuthorForm;