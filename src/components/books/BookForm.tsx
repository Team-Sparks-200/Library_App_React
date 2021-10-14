import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { FiXCircle } from "react-icons/fi";
import { IAuthor } from "../authors/Author";
import { IBook } from "./Book";
import Select from "react-select";
import Price from "./Price";

export interface IPopupMessage {
  message: string;
  className: string;
}

export interface selectorOptionType {
  label: string;
  value: IAuthor;
}

type BookFormProps = {
  onCloseClick: () => void;
  onCreateBookSubmit: (newBook: IBook) => void;
  authorList: IAuthor[] | null;
};

const BookForm: React.FC<BookFormProps> = (props) => {
  const { onCloseClick, onCreateBookSubmit } = props;
  const [title, setTitle] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>(null);
  const [author, setAuthor] = useState<IAuthor | null>(null);
  const [isFormValidate, setIsFormValidate] = useState<boolean>(false);
  const [isSelectorValidate, setIsSelectorValidate] = useState<boolean>(false);
  const [optionList, setOptionList] = useState<selectorOptionType[] | null>(
    null
  );
  const [selectorBorderColor, setSelectorBorderColor] =
    useState<string>("#959595");

  useEffect(() => {
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
  }, [props.authorList]);

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: `2px solid ${selectorBorderColor}`,
      borderRadius: "0px",
    }),
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    author === null
      ? setSelectorBorderColor("#f80046")
      : setSelectorBorderColor("#6AB867");
    if (
      title === null ||
      price === null ||
      title === "" ||
      price === "" ||
      author === null
    ) {
      setIsFormValidate(true);
      setIsSelectorValidate(true);
    } else {
      const newBook: IBook = {
        name: title,
        price: price,
        author: author,
      };
      props.onCreateBookSubmit(newBook);
      props.onCloseClick();
    }
  };

  const handlePricehange = (price: string) => {
    setPrice(price);
  };
  const handleOnTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleOnAuthorChange = (option: any) => {
    if (option) {
      setAuthor(option.value);
      if (isSelectorValidate) {
        setSelectorBorderColor("#6AB867");
      }
    } else {
      setAuthor(null);
      if (isSelectorValidate) {
        setSelectorBorderColor("#f80046");
      }
    }
  };

  return (
    <Row className="book-form p-0 mt-5 m-0" lg={8}>
      <Col xs={12} lg={8} md={12} className="p-0 ">
        <span className="create-book">Create Book</span>
        <FiXCircle
          size={22}
          className="close-button float-end"
          onClick={() => onCloseClick()}
        />
      </Col>
      <Col xs={12} className="p-0 mt-3" lg={8}>
        <Form
          onSubmit={handleOnSubmit}
          validated={isFormValidate}
          noValidate
          className="ms-lg-5"
        >
          <Form.Group>
            <Form.Label className="mb-0 ms-1 form-label mt-2">
              Book Title
            </Form.Label>
            <Form.Control
              size="sm"
              required
              type="text"
              onChange={handleOnTitleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter book title
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Price onPriceChange={handlePricehange} currentPrice={"0"} />
          </Form.Group>
          <Form.Group>
            <Form.Label className="mb-0 ms-1 form-label mt-2">
              Author
            </Form.Label>
            <Select
              className="select-control"
              classNamePrefix="select-control"
              isSearchable
              isClearable
              options={!optionList ? [] : optionList}
              styles={customStyles}
              onChange={handleOnAuthorChange}
            />
            <Form.Control.Feedback type="invalid">
              Please select author
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            className="form-button mt-4 px-4 py-1 float-end"
            type="submit"
          >
            Create
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default BookForm;
