import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Col, Form, FormControl, Row} from "react-bootstrap";
import {FiXCircle} from "react-icons/fi";
import Form_Button from "../common/Form_Button";
import {IAuthor} from "../common/Types";

type AuthorFormProps = {
    onCloseClick: () => void,
    onCreateAuthorSubmit: (newAuthor: IAuthor) => void,
    editClicked: boolean
}

const AuthorForm: React.FC<AuthorFormProps> = (props) => {
    const {onCloseClick, onCreateAuthorSubmit, editClicked} = props;
    const [authorName, setAuthorName] = useState<string | null>("");
    const [isFormValidate, setIsFormValidate] = useState<boolean>(false);

    const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsFormValidate(false);
        let author = (String(e.target.value)).trimStart();
        setAuthorName(author);
    }

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (authorName === '' || authorName === null) {
            setIsFormValidate(true);
            return;
        } else {
            const newAuthor: IAuthor = {
                name: authorName,
            }
            onCreateAuthorSubmit(newAuthor);
            setAuthorName("");
        }

    }

    return (
        <Col xs={12} lg={8} md={11} className="form mt-5 px-0 ms-lg-2">
            <Col xs={12} lg={12} md={12}>
                <Row className="form-title" xs={12} lg={10} md={12}>
                    <Col lg={9} xs={8} className="p-lg-1 d-flex align-items-center">
                        <h5>Create Author</h5>
                    </Col>
                    <Col lg={3} xs={4} className="text-end">
                        <FiXCircle size={22} onClick={() => onCloseClick()} className="ms-lg-3 ms-4 close-btn"/>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={{span: 11, offset: 1}} className="px-0">
                <Form className="mt-3" onSubmit={handleOnSubmit} validated={isFormValidate}
                      noValidate>
                    <Form.Group>
                        <Form.Label className="mb-1 form-label ms-1">Name of Author</Form.Label>
                        <Form.Control type="text" required onChange={handleOnInputChange} className='form-input py-lg-1'
                                      value={String(authorName)}/>
                        <FormControl.Feedback type='invalid'>
                            <p className="text-danger fw-bold">Please Enter Author Name</p>
                        </FormControl.Feedback>
                    </Form.Group>
                    <Form_Button editClicked={editClicked}/>
                </Form>
            </Col>
        </Col>
    );
};

export default AuthorForm;