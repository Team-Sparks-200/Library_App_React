import React from 'react';
import Author from "./Author";
import {Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {IAuthor} from "../common/Types";

type AuthorListProps = {
    authors: IAuthor[] | null,
    onEditClicked: (index: number) => void,
    onAuthorDelete: (index: number) => void,

}

const AuthorList: React.FC<AuthorListProps> = (props) => {

    const {onEditClicked, onAuthorDelete, authors} = props;

    return (
        <Row className='pe-0 me-0 my-0'>
            <Col xs={12} className='pe-0 me-0'>
                {props.authors && <ListGroup>
                    {props.authors.map((author: IAuthor, index: number) => {
                        return (
                            <ListGroup.Item key={index} className='border-0 px-0 me-0 py-0 my-1'>
                                <Author onAuthorDelete={props.onAuthorDelete} onEditClicked={onEditClicked}
                                        author={author} index={index}/>
                            </ListGroup.Item>
                        )
                    })
                    }
                </ListGroup>}
            </Col>
        </Row>
    );
};

export default AuthorList;
