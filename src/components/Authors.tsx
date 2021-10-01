import React, {useState} from "react";
import {Row} from "react-bootstrap";
import Header from "./common/Header";
import AuthorForm from "./authors/AuthorForm";
import NoAuthorList from "./authors/NoAuthorsList";
import AddAuthor from "./authors/AddAuthor";
import AuthorList from "./authors/AuthorList";
import {IAuthor} from "./authors/Author";
import PopupMessage from "./common/PopupMessage";
import {IPopupMessage} from "./authors/AuthorForm";

type AuthorsProps = {
    onAuthorsChange: (author: IAuthor[]) => void,
    authors:IAuthor[] | null
}



const Authors: React.FC<AuthorsProps> = (props) => {

    const [showAuthorForm, setShowAuthorForm] = useState<boolean>(false);
    const [popupMessage, setPopupMessage] = useState<IPopupMessage | null>(null);
    const [showPopupMessage,setShowPopupMessage] = useState<boolean>(false);

    const handleAddAuthorForm = () => {
        setShowAuthorForm(true);
    }
    const handleCloseAuthorForm = () => {
        setShowAuthorForm(false);
    }

    const handleOnCreateAuthorSubmit = (newAuthor: IAuthor) => {
        const newAuthorList:IAuthor[] = props.authors ? props.authors.slice() : [];
        newAuthorList.push(newAuthor);
        props.onAuthorsChange(newAuthorList);
        setPopupMessage({message: "Author added Successfully", className: "alert-success"});
        setShowPopupMessage(true);
    }

    return (
    <Row className="authors">
      <Header header="Authors" />
        {(!props.authors && props.authors === null) && <NoAuthorList/>}
        {(props.authors && true) && <AuthorList authors={props.authors}/>}
        <PopupMessage message={popupMessage} isPopupMessageShow={showPopupMessage}/>
        <AddAuthor onAddClick={handleAddAuthorForm}/>
        {showAuthorForm &&  <AuthorForm onCloseClick={handleCloseAuthorForm} onCreateAuthorSubmit={handleOnCreateAuthorSubmit}/>
        }
    </Row>
  );
};

export default Authors;
