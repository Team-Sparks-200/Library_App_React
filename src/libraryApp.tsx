import React from 'react';
import { Col, Row } from "react-bootstrap";
import Welcome from './components/welcome/welcome';
import LibraryBody from './components/welcome/libraryBody';


const LibraryApp: React.FC = () => {
    return (
        <React.Fragment>
            <Row>
              <Col xs={12}>
                 <Welcome />
              </Col>
              <Col xs={12}>
                 <LibraryBody/>
              </Col>
            </Row>
        </React.Fragment>
    )
}

export default LibraryApp;