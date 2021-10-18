import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import { FiXCircle } from "react-icons/fi";
import Feedback from "react-bootstrap/Feedback";
import { Price } from "./Price";
import {IAuthor, IBook, selectorOptionType} from "../common/Types";

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
  const [authorName, setAuthorName] = useState<string>("");
  const [bookAuthor, setBookAuthor] = useState<IAuthor | null>(null);
  const [isFormValidate, setIsFormValidate] = useState<boolean>(false);
  const [optionList, setOptionList] = useState<selectorOptionType[] | null>(
      null
  );
  const [selectorBorderColor, setSelectorBorderColor] =
      useState<string>("#959595");
  const [isSelectorValidate, setIsSelectorValidate] = useState<boolean>(false);


  useEffect(() => {
    if (!props.book) {
      return;
    }
    setAuthorName(props.book.author.name);
    setBookTitle(props.book.name);
    setPrice(props.book.price);
  }, [props.book]);

  useEffect(() => {
    // setOptionList(props.authorList);
    if (!props.authorList) {
      return;
    }
    let options: selectorOptionType[] = [];
    for (let i = 0; i < props.authorList.length; i++) {
      options.push({
        label: props.authorList[i].name,
        value: props.authorList[i],
      });
    }
    setOptionList(options);
  }, [props.authorList])

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: `2px solid ${selectorBorderColor}`,
      borderRadius: "0px",
    }),
  };

  const handleOnTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBookTitle(e.target.value);
  };

  const handlePriceChange = (price: string) => {
    setPrice(price);
  };

  const handleOnAuthorChange = (option: any) => {
    if (option) {
      setBookAuthor(option.value);
      if (isSelectorValidate) {
        setSelectorBorderColor("#6AB867");
      }

    } else {
      setBookAuthor(null);
      if (isSelectorValidate) {
        setSelectorBorderColor("#f80046");
      }
    }
  };

  const handleOnUpdateAuthor = () => {
    if (bookTitle === '' || bookTitle===null || bookAuthor===null) {
      setIsFormValidate(true);
    }
    else {
      let updatedBook: IBook;
      updatedBook = {
        name: bookTitle,
        price: price,
        author: bookAuthor
      };
      props.onUpdateAuthor(props.index, updatedBook);
    }
  };

  return (
      <Row className="book-form p-0 mt-5 m-0" lg={8}>
        <Col xs={12} lg={8} md={12} className="p-0 ">
          <span className="create-book">Update Book</span>
          <FiXCircle className="close-button float-end" size={22} onClick={() => props.onCloseClick()} />
        </Col>
        <Col xs={12} className="p-0 mt-3" lg={8}>

          <Form
            className="ms-lg-5"
          onSubmit={props.onCloseClick}
            validated={isFormValidate}
          noValidate
        >
          <Form.Group>
            <Form.Label className="mb-0 ms-1 form-label mt-2">Book Title</Form.Label>
            <Form.Control
                size="sm"
              type="text"
              onChange={handleOnTitleChange}
              value={bookTitle ? bookTitle : ''}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter book title
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Price onPriceChange={handlePriceChange} currentPrice={price} />
          </Form.Group>

          <Form.Group>
            <Form.Label className="mb-0 ms-1 form-label mt-2">Author</Form.Label>
            <Select
                className="select-control"
                classNamePrefix="select-control"
                placeholder={authorName ? authorName : ''}
                isSearchable
                isClearable
                options={!optionList ? [] : optionList}
                styles={customStyles}
                onChange={handleOnAuthorChange}
            />
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
      </Row>
  );
};

export default EditBook;



