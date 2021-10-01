import React, {useState} from "react";
import { Col, Row } from "react-bootstrap";
import Authors from "./Authors";
import Books from "./books/books";
import {IAuthor} from "./authors/Author";


const LibraryBody: React.FC = () => {

  const [authors, setAuthors]= useState<IAuthor[] | null>(null);

  const handleOnAuthorsChange = (authors: IAuthor[]) => {
    setAuthors(authors);
  }

  return (
    <React.Fragment>
      <Row className="library_body mt-4 flex-column-reverse flex-lg-row">
        <Col xs={12} md={6} className="px-5 mb-5">
          <Books />
        </Col>
        <Col xs={12} md={6} className="px-5 mb-5">
          <Authors authors={authors} onAuthorsChange={handleOnAuthorsChange}/>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default LibraryBody;
