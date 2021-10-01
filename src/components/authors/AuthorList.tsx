import React from 'react';
import Author, {IAuthor} from "./Author";
import {Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";

type AuthorListProps = {
    authors: IAuthor[] | null
}

const AuthorList: React.FC<AuthorListProps> = (props) => {
    return (
        <Row className='pe-0 me-0 my-0' >
            <Col xs={12} className='pe-0 me-0'>
                {props.authors && <ListGroup>
                    {props.authors.map((author:IAuthor, index:number) =>{
                        return (
                            <ListGroup.Item key={index} className='border-0 px-0 me-0 py-0' >
                                <Author author={author} index={index}/>
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
