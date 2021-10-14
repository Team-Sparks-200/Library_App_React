import React from 'react';
import {Container, Row} from "react-bootstrap";

const Footer: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row xs={12} className='footer pt-1 text-center'>
                <h5>Copyright ©2021 All rights reserved</h5>
            </Row>
        </Container>
    );
};

export default Footer;
