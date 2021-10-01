import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import {FiXCircle} from "react-icons/fi";
import FormButton from "../common/Formbutton";
import {IAuthor} from "./Author";

export interface IPopupMessage {
    message:string,
    className:string
}

type AuthorFormProps = {
    onCloseClick: () => void,
    onCreateAuthorSubmit: (newAuthor: IAuthor) => void,
}

const AuthorForm: React.FC<AuthorFormProps> = (props) => {
    const {onCloseClick,onCreateAuthorSubmit} = props;
    const [author, setAuthor] = useState<string | null>(null);
    const [isFormValidate, setIsFormValidate] = useState<boolean>(false);

    const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAuthor(e.target.value);
    }

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (author === '' || author === null) {
            setIsFormValidate(true);
        }
        else {
            const newAuthor: IAuthor = {
                name: author,
            }
            onCreateAuthorSubmit(newAuthor);
            onCloseClick();
        }
    }

    return (
        <Col xs={12} lg={10} className="form mt-4 px-0 ms-1">
            <Col xs={12}>
                <Row className="form-title ps-2">
                    <Col xs={9} className="p-0">
                        <h5><label>Create Author</label></h5>
                    </Col>
                    <Col xs={3} className="ps-4 closebtn">
                        <FiXCircle size={18} onClick={() => onCloseClick()}/>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={{span: 11, offset: 1}} className="px-0">
                <Form className="mt-3 col-md-10" onSubmit={handleOnSubmit} validated={isFormValidate} noValidate >
                    <Form.Group>
                        <Form.Label className="mb-0 ms-1 form-label">Name of Author</Form.Label>
                        <Form.Control type="text" required onChange={handleOnInputChange} />
                    </Form.Group>
                    <FormButton/>
                </Form>
            </Col>
        </Col>
    );
};

export default AuthorForm;