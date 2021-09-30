import React from "react";
import { Row } from "react-bootstrap";
import Header from "../common/Header";
import AuthorForm from "./AuthorForm";
// import NoAuthorList from "./NoAuthorsList";
import AddAuthor from "./AddAuthor";
import AuthorList from "./AuthorList";

const Authors: React.FC = () => {
  return (
    <Row className="authors">
      <Header header="Authors" />
      {/*<NoAuthorList/>*/}
      <AuthorList />
      <AddAuthor />
        <AuthorForm/>
    </Row>
  );
};

export default Authors;
