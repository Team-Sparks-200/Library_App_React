import React, {useEffect, useState} from "react";
import {Row} from "react-bootstrap";
import Header from "./common/Header";
import AuthorForm from "./authors/AuthorForm";
import NoAuthorList from "./authors/NoAuthorsList";
import AddAuthor from "./authors/AddAuthor";
import AuthorList from "./authors/AuthorList";
import {IAuthor} from "./authors/Author";
import PopupMessage from "./common/PopupMessage";
import {IPopupMessage} from "./authors/AuthorForm";
import EditAuthor from "./authors/EditAuthor";

type AuthorsProps = {
    onAuthorsChange: (author: IAuthor[]) => void,
    authors:IAuthor[] | null
}

const Authors: React.FC<AuthorsProps> = (props) => {

    const [showAuthorForm, setShowAuthorForm] = useState<boolean>(false);
    const [popupMessage, setPopupMessage] = useState<IPopupMessage | null>(null);
    const [showPopupMessage,setShowPopupMessage] = useState<boolean>(false);
    const [editClicked, setEditClicked] = useState<boolean>(false);
    const [indexToEdit, setIndexToEdit] = useState<number | null> (null);
    const [authorNameToEdit, setAuthorNameToEdit] = useState<string>("");

    const handleAddAuthorForm = () => {
       setEditClicked( false);
        setShowAuthorForm(true);
    }
    const handleCloseAuthorForm = () => {
        setEditClicked(false);
        setShowAuthorForm(false);
    }

    const handleOnCreateAuthorSubmit = (newAuthor: IAuthor) => {
        const newAuthorList:IAuthor[] = props.authors ? props.authors.slice() : [];
        newAuthorList.push(newAuthor);
        props.onAuthorsChange(newAuthorList);
        setPopupMessage({message: "Author added Successfully", className: "alert-success"});
        setShowPopupMessage(true);
    }
    const handleOnAuthorDelete = (id : number) => {
        if (!props.authors) {
            return;
        }
        const newAuthorList: IAuthor[] = props.authors.slice();
        newAuthorList.splice(id, 1);
        props.onAuthorsChange(newAuthorList);
        setPopupMessage({message: " Author Deleted Successfully", className: "alert-danger"});
        setShowPopupMessage(true);
    }
    const handleEditButtonClick = (bool: boolean, index: number) => {
        setEditClicked(bool);
        setShowAuthorForm(bool);
        setIndexToEdit(index);
    }
    const handleOnUpdateAuthorSubmit = (newAuthor: IAuthor) => {
        const newAuthorList: IAuthor[] = props.authors ? props.authors.slice() : [];
        if(indexToEdit === null){
            return;
        }
        newAuthorList.splice(indexToEdit,1,newAuthor);
        props.onAuthorsChange(newAuthorList);
        setPopupMessage({message: "Author Edited Successfully", className: "alert-warning"});
        setShowPopupMessage(true);
    }

        useEffect(() => {
            if(indexToEdit === null || !props.authors){
                return;
            }
            setAuthorNameToEdit(props.authors[indexToEdit].name);
        }, [props.authors,indexToEdit]);

    return (
    <Row className="authors">
      <Header header="Authors" />
        {(!props.authors && props.authors === null) && <NoAuthorList/>}
        {(props.authors && true) && <AuthorList onAuthorDelete={handleOnAuthorDelete} authors={props.authors} onEditClicked={handleEditButtonClick} />}
        <PopupMessage message={popupMessage} isPopupMessageShow={showPopupMessage}/>
        <AddAuthor onAddClick={handleAddAuthorForm}/>
        {showAuthorForm && (!editClicked ?
            <AuthorForm onCloseClick={handleCloseAuthorForm} onCreateAuthorSubmit={handleOnCreateAuthorSubmit}
                        editClicked={editClicked}/> : <EditAuthor editClicked={editClicked}
                                                                  onCloseClick={handleCloseAuthorForm}
                                                                  onUpdateAuthorSubmit={handleOnUpdateAuthorSubmit}
                                                                  authorNameToUpdate={authorNameToEdit}/> )
        }
    </Row>
  );
};

export default Authors;
