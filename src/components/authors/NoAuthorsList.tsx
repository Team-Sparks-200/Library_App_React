import React from 'react';
import {Col, Row} from "react-bootstrap";

const NoAuthorList: React.FC = () => {
    return (
        <Row>
            <Col className='px-0 NoAuthorList'>
                No author listed here.
            </Col>
        </Row>
    );
};

export default NoAuthorList;
