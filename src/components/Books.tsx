import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Header from "./common/Header";
import BookForm from "./books/BookForm";
import NoBooksList from "./books/NoBooksList";
import AddBook from "./books/book/AddBook";
import BooksList from "./books/BooksList";
import { IBook } from "./books/book/Book";
import { IAuthor } from "./authors/Author";
import PopupMessage from "./common/PopupMessage";
import { IPopupMessage } from "./books/BookForm";

type BooksProps = {
  authors: IAuthor[] | null;
};

const Books: React.FC<BooksProps> = (props) => {
  const [bookList, setBookList] = useState<IBook[] | null>(null);
  const [showBookForm, setShowBookForm] = useState<boolean>(false);
  const [popupMessage, setPopupMessage] = useState<IPopupMessage | null>(null);
  const [showPopupMessage, setShowPopupMessage] = useState<boolean>(false);

  const handleAddBookForm = () => {
    setShowBookForm(true);
  };
  const handleCloseBookForm = () => {
    setShowBookForm(false);
  };

  const handleOnCreateBookSubmit = (newBook: IBook) => {
    const newBookList: IBook[] = props.books ? props.books.slice() : [];
    newBookList.push(newBook);
    setBookList(newBookList);
    setPopupMessage({
      message: "New Book added Successfully",
      className: "alert-success",
    });
    setShowPopupMessage(true);
  };

  return (
    <Row className="books">
      <Header header="Books" />
      {!props.books === null ? (
        <NoBooksList />
      ) : (
        <BooksList books={props.books} />
      )}
      <PopupMessage
        message={popupMessage}
        isPopupMessageShow={showPopupMessage}
      />
      <AddBook onAddClick={handleAddBookForm} />
      {showBookForm && (
        <BookForm
          authorList={props.authors}
          onCloseClick={handleCloseBookForm}
          onCreateBookSubmit={handleOnCreateBookSubmit}
        />
      )}
    </Row>
  );
};

export default Books;
