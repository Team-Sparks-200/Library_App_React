import React from 'react';
import {Col, Row, Container} from "react-bootstrap";
import Welcome from "./components/Welcome";
import LibraryBody from "./components/LibraryBody";
import Footer from "./components/common/Footer";

const LibraryApp: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={12}>
                    <Welcome/>
                </Col>
                <Col xs={12}>
                    <LibraryBody/>
                </Col>
            </Row>
            <Row>
                <Footer/>
            </Row>
        </Container>
    );
};

export default LibraryApp;