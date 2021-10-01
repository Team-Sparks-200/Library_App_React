import React from 'react';
import {Col, Row} from "react-bootstrap";
import { FiEdit,FiTrash2 } from "react-icons/fi";
import { IconContext } from "react-icons";

export interface IAuthor {
    name:string
}

type AuthorProps = {
    author: IAuthor,
    index: number
}

const Author: React.FC<AuthorProps> = (props) => {
    return (
        <React.Fragment>
            <Row xs={12} className="ps-0 author py-0">
                <Col xs="8" className="ps-0">
                    <h5 className="p-0">{props.index + 1}. {props.author.name}</h5>
                </Col>
                <Col xs="4" className="text-end px-0">
                    <IconContext.Provider value={{ size: "1em" }}>
                        <FiEdit className="mx-2 icons text-warning" />
                        <FiTrash2 className="icons text-danger" />
                    </IconContext.Provider>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Author;
