import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Header from "./common/Header";
import BooksList from "./books/BooksList";
import AddBook from "./books/AddBook";
import EditBook from "./books/EditBook";
import BookForm from "./books/BookForm";
import NoBooksList from "./books/NoBooksList";
import PopupMessage from "./common/PopupMessage";
import { IPopupMessage } from "./books/BookForm";
import { IAuthor } from "./authors/Author";
import { IBook } from "./books/Book";

type BooksProps = {
  authors: IAuthor[] | null;
};

const Books: React.FC<BooksProps> = (props) => {
  const [bookList, setBookList] = useState<IBook[] | null>(null);
  const [showBookForm, setShowBookForm] = useState<boolean>(false);
  const [editClicked, setEditClicked] = useState<boolean>(false);
  const [indexToEdit, setIndexToEdit] = useState<number | null>(null);
  const [bookNameToEdit, setBookNameToEdit] = useState<IBook | null>(null);
  const [popupMessage, setPopupMessage] = useState<IPopupMessage | null>(null);
  const [showPopupMessage, setShowPopupMessage] = useState<boolean>(false);

  const handleAddBookForm = () => {
    setEditClicked(false);
    setShowBookForm(true);
  };

  const handleCloseBookForm = () => {
    setEditClicked(false);
    setShowBookForm(false);
  };

  const handleOnCreateBookSubmit = (newBook: IBook) => {
    const books: IBook[] = bookList ? bookList.slice() : [];
    books.push(newBook);
    setBookList(books);
    setPopupMessage({
      message: "New Book added Successfully",
      className: "alert-success",
    });
    setShowPopupMessage(true);
  };

  const handleOnBookDelete = (index: number) => {
    if (!bookList) {
      return;
    }
    const books: IBook[] = bookList.slice();
    books.splice(index, 1);
    setBookList(books);
    handleCloseBookForm();
    setPopupMessage({
      message: " Book Deleted Successfully",
      className: "alert-danger",
    });
    setShowPopupMessage(true);
  };

  const handleEditButtonClick = (bool: boolean, index: number, book: IBook) => {
    setEditClicked(bool);
    setShowBookForm(bool);
    if (book) {
      setIndexToEdit(index);
      setBookNameToEdit(book);
    }
  };

  const handleOnUpdateBookSubmit = (
    index: number | null,
    updatedBook: IBook
  ) => {
    if (!bookList || index == null) {
      return;
    }
    const books: IBook[] = bookList.slice();
    books[index] = updatedBook;
    setBookList(books);
    handleCloseBookForm();
    setPopupMessage({
      message: " Book Updated Successfully",
      className: "alert alert-warning",
    });
    setShowPopupMessage(true);
  };

  return (
    <Row className="books">
      <Header header="Books" />
      {bookList && bookList.length !== 0 ? (
        <BooksList
          books={bookList}
          onDeleteBook={handleOnBookDelete}
          onEditButtonClick={handleEditButtonClick}
        />
      ) : (
        <NoBooksList />
      )}

      <PopupMessage
        message={popupMessage}
        isPopupMessageShow={showPopupMessage}
      />
      <AddBook onAddClick={handleAddBookForm} />
      {showBookForm &&
        (!editClicked ? (
          <BookForm
            authorList={props.authors}
            onCloseClick={handleCloseBookForm}
            onCreateBookSubmit={handleOnCreateBookSubmit}
          />
        ) : (
          <EditBook
            onCloseClick={handleCloseBookForm}
            onUpdateAuthor={handleOnUpdateBookSubmit}
            authorList={props.authors}
            index={indexToEdit}
            book={bookNameToEdit}
          />
        ))}
    </Row>
  );
};

export default Books;
