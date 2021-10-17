import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import { FiXCircle } from "react-icons/fi";
import { IAuthor } from "../authors/Author";
import { IBook } from "./Book";
import Feedback from "react-bootstrap/Feedback";
import { Price } from "./Price";
import Formbutton from './../common/Formbutton';

type EditBookProps = {
  onCloseClick: () => void;
  onUpdateAuthor: (index: number | null, updatedBook: IBook) => void;
  book: IBook | null;
  index: number | null;
  authorList: IAuthor[] | null;
};

const EditBook: React.FC<EditBookProps> = (props) => {
  const [bookTitle, setBookTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [bookAuthor, setBookAuthor] = useState<string>("");
  const [authorList, setAuthorList] = useState<IAuthor[] | null>(null);

  useEffect(() => {
    if (!props.book) {
      return;
    }
    setBookAuthor(props.book.author.name);
    setBookTitle(props.book.name);
    setPrice(props.book.price);
  }, [props.book]);

  useEffect(() => {
    setAuthorList(props.authorList);
  }, [props.authorList]);

  const handleOnTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBookTitle(e.target.value);
  };

  const handlePricehange = (price: string) => {
    setPrice(price);
  };

  const handleOnAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBookAuthor(e.target.value);
  };

  const handleOnUpdateAuthor = () => {
    if (!bookAuthor && !price && !bookTitle) {
      return;
    }
    let updatedBook: IBook;
    updatedBook = {
      name: bookTitle,
      price: price,
      author: { name: bookAuthor },
    };
    props.onUpdateAuthor(props.index, updatedBook);
  };

  return (
    <Col xs={12} lg={10} className="form mt-4 px-0 ms-1">
      <Col xs={12}>
        <Row className="form-title ps-2">
          <Col xs={9} className="p-0">
            <h5>
              <label>Update Book</label>
            </h5>
          </Col>
          <Col xs={3} className="ps-4 close-btn">
            <FiXCircle size={18} onClick={() => props.onCloseClick()} />
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={{ span: 11, offset: 1 }} className="px-0">
        <Form
          className="mt-3 col-md-10"
          onSubmit={props.onCloseClick}
          validated={true}
          // validated={isFormValidate}
          noValidate
        >
          <Form.Group>
            <Form.Label className="mb-0 ms-1 form-label">Book Title</Form.Label>
            <Form.Control
              type="text"
              onChange={handleOnTitleChange}
              value={bookTitle}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter book title
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Price onPriceChange={handlePricehange} currentPrice={price} />
          </Form.Group>

          <Form.Group>
            <Form.Label className="mb-0 ms-1 form-label">Author</Form.Label>
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

          <Button
            className="form-button mt-4 px-4 py-1 float-end"
            onClick={handleOnUpdateAuthor}
          >
            Update
          </Button>
        </Form>
      </Col>
    </Col>
  );
};

export default EditBook;





    // <Row className="create-book">
    //   <Col xs={12} className="form-title">
    //     <Row>
    //       <Col xs={8}>
    //         <label>Update Book</label>
    //       </Col>
    //       <Col className="text-right pt-2 pr-0" xs={4}>
    //         <i onClick={() => props.onCloseClick()}>
    //           <FiXCircle size={22} />
    //         </i>
    //       </Col>
    //     </Row>
    //   </Col>
    //   <Col md={{ span: 11, offset: 1 }} xs={12} className="mt-3 pr-0">
    //     <Form onSubmit={props.onCloseClick} validated={true}>
    //       <Form.Group>
    //         <Form.Label className="mb-0 ms-1 form-label mt-2">
    //           Book Title
    //         </Form.Label>
    //         <Form.Control
    //           type="text"
    //           onChange={handleOnTitleChange}
    //           value={bookTitle}
    //           required
    //         />
    //         <FormControl.Feedback type="invalid">
    //           Please enter book title
    //         </FormControl.Feedback>
    //         <Row className="m-0">
    //           <Price onPriceChange={handlePricehange} />
    //           {/* <Form.Label className="mt-4">ISBN</Form.Label>
    //           <Form.Control
    //             type="text"
    //             onChange={handleOnISBNChange}
    //             value={bookISBN}
    //             required
    //           />
    //           <FormControl.Feedback type="invalid">
    //             <p className="font-weight-bold">Please fill the ISBN </p>
    //           </FormControl.Feedback> */}
    //         </Row>
    //         <Form.Label className="mt-4">Author</Form.Label>
    //         <Form.Control
    //           as="select"
    //           onChange={handleOnAuthorChange}
    //           value={bookAuthor}
    //           required
    //         >
    //           {authorList?.map((author) => {
    //             return <option value={author.name}> {author.name}</option>;
    //           })}
    //         </Form.Control>
    //         <Feedback className="text-danger font-weight-bold" type="invalid">
    //           Please select author
    //         </Feedback>
    //       </Form.Group>
    //       <Button className="btn float-right" onClick={handleOnUpdateAuthor}>
    //         Update
    //       </Button>
    //     </Form>
    //   </Col>
    // </Row>;