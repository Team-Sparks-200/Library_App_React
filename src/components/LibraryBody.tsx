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
      <Row className="library_body mt-4 d-flex flex-lg-row flex-md-row flex-column-reverse">
        <Col xs={12} md={6} lg={6} className="px-5 mb-5">
          <Books />
        </Col>
        <Col xs={12} md={6} lg={6} className="px-5 mb-5">
          <Authors authors={authors} onAuthorsChange={handleOnAuthorsChange}/>
        </Col>
      </Row>
  );
};

export default LibraryBody;
