import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { IconContext } from "react-icons";
import { IAuthor } from "../common/Types";
import DeletePopup from "../common/DeletePopUp";

export interface IBook {
  name: string;
  isbn: string;
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
      <Row className="ps-0 book py-0">
        <Col xs={8} className="p-0">
          <h4 className="my-0">
            {index + 1}. {book.name}
          </h4>
        </Col>
        <Col xs={4} className="text-end px-0">
          <IconContext.Provider value={{ size: "1em" }}>
            <FiEdit
              className="mx-2 icons text-warning"
              onClick={() => onUpdateClick(true, props.index, props.book)}
            />
            <FiTrash2
              className="icons text-danger"
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
