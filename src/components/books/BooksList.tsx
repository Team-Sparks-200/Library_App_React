import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import Book from "./Book";
import { IBook } from "./Book";

type BookListProps = {
  onEditButtonClick: (bool: boolean, index: number, book: IBook) => void;
  books: IBook[] | null;
  onDeleteBook: (index: number) => void;
};

const BookList: React.FC<BookListProps> = (props) => {
  return (
    <Row>
      <Col xs={12}>
        {props.books && (
          <ListGroup className="mt-4">
            {props.books.map((book: IBook, index: number) => {
              return (
                <ListGroup.Item className="border-0 px-0" key={index}>
                  <Book
                    onBookDelete={props.onDeleteBook}
                    onUpdateClick={props.onEditButtonClick}
                    key={index}
                    book={book}
                    index={index}
                  />
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
};

export default BookList;
