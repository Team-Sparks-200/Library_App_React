import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import Authors from "./Authors";
import Books from "./Books";
import {IAuthor} from "./common/Types";

const LibraryBody: React.FC = () => {
    const [authors, setAuthors] = useState<IAuthor[] | null>(null);

    const handleOnAuthorsChange = (authors: IAuthor[]) => {
        setAuthors(authors);
    };

    return (
        <Row className="library_body mt-4 d-flex flex-lg-row flex-md-row flex-column-reverse">
            <Col xs={12} md={6} lg={6} className="px-lg-5 px-4 mb-5">
                <Books authors={authors}/>
            </Col>
            <Col xs={12} md={6} lg={6} className="px-lg-5 px-4 mb-5">
                <Authors authors={authors} onAuthorsChange={handleOnAuthorsChange}/>
            </Col>
        </Row>
    );
};

export default LibraryBody;
