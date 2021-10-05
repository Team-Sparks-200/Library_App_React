import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import { FiXCircle } from "react-icons/fi";
import { IAuthor } from "../authors/Author";
import { IBook } from "./Book";
import Feedback from "react-bootstrap/Feedback";

type EditBookProps = {
  onCloseClick: () => void;
  onUpdateAuthor: (index: number | null, updatedBook: IBook) => void;
  book: IBook | null;
  index: number | null;
  authorList: IAuthor[] | null;
};

const EditBook: React.FC<EditBookProps> = (props) => {
  const [bookTitle, setBookTitle] = useState<string>("");
  const [bookISBN, setBookISBN] = useState<string>("");
  const [bookAuthor, setBookAuthor] = useState<string>("");
  const [authorList, setAuthorList] = useState<IAuthor[] | null>(null);

  useEffect(() => {
    if (!props.book) {
      return;
    }
    setBookAuthor(props.book.author.name);
    setBookTitle(props.book.name);
    setBookISBN(props.book.isbn);
  }, [props.book]);

  useEffect(() => {
    setAuthorList(props.authorList);
  }, [props.authorList]);

  const handleOnTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBookTitle(e.target.value);
  };

  const handleOnISBNChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBookISBN(e.target.value);
  };

  const handleOnAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBookAuthor(e.target.value);
  };

  const handleOnUpdateAuthor = () => {
    if (!bookAuthor && !bookISBN && !bookTitle) {
      return;
    }
    let updatedBook: IBook;
    updatedBook = {
      name: bookTitle,
      isbn: bookISBN,
      author: { name: bookAuthor },
    };
    props.onUpdateAuthor(props.index, updatedBook);
  };

  return (
    <Row className="create-book">
      <Col xs={12} className="form-title">
        <Row>
          <Col xs={8}>
            <label>Update Book</label>
          </Col>
          <Col className="text-right pt-2 pr-0" xs={4}>
            <i onClick={() => props.onCloseClick()}>
              <FiXCircle size={22} />
            </i>
          </Col>
        </Row>
      </Col>
      <Col md={{ span: 11, offset: 1 }} xs={12} className="mt-3 pr-0">
        <Form onSubmit={props.onCloseClick} validated={true}>
          <Form.Group>
            <Row className="m-0">
              <Form.Label>Tittle of book</Form.Label>
              <Form.Control
                type="text"
                onChange={handleOnTitleChange}
                value={bookTitle}
                required
              />
              <FormControl.Feedback type="invalid">
                <p className="font-weight-bold">Please fill the title</p>
              </FormControl.Feedback>
            </Row>
            <Row className="m-0">
              <Form.Label className="mt-4">ISBN</Form.Label>
              <Form.Control
                type="text"
                onChange={handleOnISBNChange}
                value={bookISBN}
                required
              />
              <FormControl.Feedback type="invalid">
                <p className="font-weight-bold">Please fill the ISBN </p>
              </FormControl.Feedback>
            </Row>
            <Form.Label className="mt-4">Author</Form.Label>
            <Form.Control
              as="select"
              onChange={handleOnAuthorChange}
              value={bookAuthor}
              required
            >
              {authorList?.map((author) => {
                return <option value={author.name}> {author.name}</option>;
              })}
            </Form.Control>
            <Feedback className="text-danger font-weight-bold" type="invalid">
              Please select author
            </Feedback>
          </Form.Group>
          <Button className="btn float-right" onClick={handleOnUpdateAuthor}>
            Update
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default EditBook;
