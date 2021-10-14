import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { IconContext } from "react-icons";
import { IAuthor } from "../common/Types";
import DeletePopup from "../common/DeletePopUp";

export interface IBook {
  name: string;
  price: string;
  author: IAuthor;
}

type BookProps = {
  onUpdateClick: (bool: boolean, index: number, book: IBook) => void;
  book: IBook;
  index: number;
  onBookDelete: (index: number) => void;
};

const Book: React.FC<BookProps> = (props) => {
  const { book, onUpdateClick, index, onBookDelete } = props;
  const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false);
  const handleDeletePopupClose = () => setShowDeletePopup(false);
  const handleDeletePopupShow = () => setShowDeletePopup(true);

  return (
    <React.Fragment>
      <Row xs={12} className="ps-0 book py-1 d-flex align-items-center">
        <Col xs="8" lg="9" className="ps-0">
          <h5 className="my-0">
            {index + 1}. {book.name}
          </h5>
        </Col>
        <Col xs="4" lg="3" className="text-end">
          <IconContext.Provider value={{ size: "1em" }}>
            <FiEdit
              className="mx-lg-2 icons text-warning"
              onClick={() => onUpdateClick(true, props.index, props.book)}
            />
            <FiTrash2
              className="icons text-danger mx-1 "
              onClick={handleDeletePopupShow}
            />
          </IconContext.Provider>
        </Col>
      </Row>

      {showDeletePopup && (
        <DeletePopup
          onDeletePopupClose={handleDeletePopupClose}
          showDeletePopup={showDeletePopup}
          onDelete={() => onBookDelete(index)}
        />
      )}
    </React.Fragment>
  );
};

export default Book;
