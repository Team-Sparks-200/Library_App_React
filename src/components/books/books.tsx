import React from "react";
import { Row } from "react-bootstrap";
import Header from "../header/Header";
import BookList from "./BookList";
import AddBook from "./book/AddBook";

const Books: React.FC = () => {
  return (
    <Row>
      <Header header="Books" />
      {/* <NoItemsLabel message={"No books listed here"} /> */}
      <BookList />
      <AddBook />
    </Row>
  );
};

export default Books;
