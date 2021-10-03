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
        <Col xs={12} lg={10} className="form mt-4 px-0 ms-1">
            <Col xs={12}>
                <Row className="form-title ps-2">
                    <Col xs={9} className="p-0">
                        <h5><label>Update Author</label></h5>
                    </Col>
                    <Col xs={3} className="ps-4 closebtn">
                        <FiXCircle size={18} onClick={() => props.onCloseClick()}/>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={{span: 11, offset: 1}} className="px-0">
                <Form className="mt-3 col-md-10" onSubmit={handleOnSubmit} validated={isFormValidate} noValidate >
                    <Form.Group>
                        <Form.Label className="mb-0 ms-1 form-label">Name of Author</Form.Label>
                        <Form.Control type="text" required onChange={handleOnInputChange} value={
                            author ? author : ''}/>
                    </Form.Group>
                    <FormButton editClicked={props.editClicked}/>
                </Form>
            </Col>
        </Col>
    );
};

export default EditAuthor;
