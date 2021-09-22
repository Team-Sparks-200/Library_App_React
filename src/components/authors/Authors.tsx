import React from "react";
// import AuthorList from "./AuthorList";
import {Row} from "react-bootstrap";
import Header from "../header/Header";
// import NoAuthorList from "./NoAuthorsList";
import AddAuthor from "./AddAuthor";
import AuthorList from "./AuthorList";

const Authors: React.FC = () => {
  return (
       <Row className='authors'>
           <Header header='Authors' />
           {/*<NoAuthorList/>*/}
           <AuthorList />
           <AddAuthor />
       </Row>
  );
};

export default Authors;
