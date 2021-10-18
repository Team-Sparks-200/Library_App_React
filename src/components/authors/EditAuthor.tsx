import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import {FiXCircle} from "react-icons/fi";
import Form_Button from "../common/Form_Button";
import {IAuthor} from "../common/Types";

type EditAuthorProps = {
    editClicked: boolean,
    onCloseClick: () => void,
    onUpdateAuthorSubmit: (newAuthor: IAuthor) => void,
    authorToUpdate: IAuthor | null
}

const EditAuthor: React.FC<EditAuthorProps> = (props) => {

    const {editClicked, onCloseClick, onUpdateAuthorSubmit, authorToUpdate} = props;
    const [authorName, setAuthorName] = useState<string | null>(null);
    const [isFormValidate, setIsFormValidate] = useState<boolean>(false);

    const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAuthorName(e.target.value);
    }

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (authorName === '' || authorName === null) {
            setIsFormValidate(true);
        } else {
            const newAuthor: IAuthor = {
                name: authorName,
            }
            props.onUpdateAuthorSubmit(newAuthor);
            props.onCloseClick();
        }
    }

    useEffect(() => {
        if (!props.authorToUpdate) {
            return;
        }
        setAuthorName(props.authorToUpdate.name);
    }, [props.authorToUpdate])

    return (
        <Col xs={12} lg={8} md={11} className="form mt-5 px-0 ms-lg-2">
            <Col xs={12} lg={12} md={12}>
                <Row className="form-title" xs={12} lg={10} md={12}>
                    <Col lg={9} xs={8} className="p-lg-1 d-flex align-items-center">
                        <h5><label>Update Author</label></h5>
                    </Col>
                    <Col lg={3} xs={4} className="text-end">
                        <FiXCircle size={22} onClick={() => props.onCloseClick()} className="ms-lg-3 ms-4 close-btn"/>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={{span: 11, offset: 1}} className="px-0">
                <Form className="mt-3" onSubmit={handleOnSubmit} validated={isFormValidate}
                      noValidate>
                    <Form.Group>
                        <Form.Label className="mb-1 ms-lg-1 form-label">Name of Author</Form.Label>
                        <Form.Control type="text" required onChange={handleOnInputChange} className='form-input py-lg-1'
                                      value={authorName ? authorName : ''}/>
                        <Form.Control.Feedback type="invalid">
                            Please enter author name
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form_Button editClicked={props.editClicked}/>
                </Form>
            </Col>
        </Col>
    );
};

export default EditAuthor;
