import React from "react";
import {Col, ListGroup, Row} from "react-bootstrap";
import Book from "./Book";
import {IBook} from "../common/Types";

type BookListProps = {
    onEditButtonClick: (bool: boolean, index: number, book: IBook) => void;
    books: IBook[] | null;
    onDeleteBook: (index: number) => void;
};

const BookList: React.FC<BookListProps> = (props) => {
    return (
        <Row className='pe-0 me-0 my-0'>
            <Col xs={12} className='pe-0 me-0'>
                {props.books && (
                    <ListGroup className="mt-0">
                        {props.books.map((book: IBook, index: number) => {
                            return (
                                <ListGroup.Item className="border-0 px-0 me-0 py-0 my-1" key={index}>
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
