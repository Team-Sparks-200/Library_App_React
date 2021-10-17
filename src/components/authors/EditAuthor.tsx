import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {IAuthor} from "./Author";
import {Col, Form, Row} from "react-bootstrap";
import {FiXCircle} from "react-icons/fi";
import FormButton from "../common/Formbutton";

type EditAuthorrops = {
    editClicked : boolean,
    onCloseClick: () => void,
    onUpdateAuthorSubmit:(newAuthor: IAuthor) => void,
    authorNameToUpdate: string
}

const EditAuthor: React.FC<EditAuthorrops> = (props) => {

    const [author, setAuthor] = useState<string | null>(null);
    const [isFormValidate, setIsFormValidate] = useState<boolean>(false);

    const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAuthor(e.target.value);
    }

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (author === '' || author === null) {
            setIsFormValidate(true);
        } else {
            const newAuthor: IAuthor = {
                name : author,
            }
            props.onUpdateAuthorSubmit(newAuthor);
            props.onCloseClick();
        }
    }

    useEffect(() => {
        setAuthor(props.authorNameToUpdate);
    },[props.authorNameToUpdate])

    return (
         <Col xs={12} lg={10} className="form mt-5 px-0 ms-lg-2">
            <Col xs={12} lg={12} md={12}>
                <Row className="form-title" xs={12} lg={10} md={12}>
                    <Col lg={9} xs={8} className="p-lg-1 d-flex align-items-center">
                        <h5><label>Update Author</label></h5>
                    </Col>
                    <Col lg={3} xs={4} className="text-end text-lg-start">
                        <FiXCircle size={22} onClick={() => props.onCloseClick()} className="ms-lg-3 ms-4 close-btn"/>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={{span: 11, offset: 1}} className="px-0">
                <Form className="mt-3 col-lg-10 col-md-12" onSubmit={handleOnSubmit} validated={isFormValidate} noValidate >
                    <Form.Group>
                        <Form.Label className="mb-1 ms-lg-1 form-label">Name of Author</Form.Label>
                        <Form.Control type="text" required onChange={handleOnInputChange} className='form-input py-lg-1' value={
                            author ? author : ''}/>
                        <Form.Control.Feedback type="invalid">
                            Please enter author name
                        </Form.Control.Feedback>
                    </Form.Group>
                    <FormButton editClicked={props.editClicked}/>
                </Form>
            </Col>
        </Col>
    );
};

export default EditAuthor;
