import React, {useEffect, useState} from "react";
import {Row} from "react-bootstrap";
import Header from "./common/Header";
import AuthorForm from "./authors/AuthorForm";
import NoAuthorList from "./authors/NoAuthorsList";
import AddAuthor from "./authors/AddAuthor";
import AuthorList from "./authors/AuthorList";
import PopupMessage from "./common/PopupMessage";
import EditAuthor from "./authors/EditAuthor";
import {IAuthor, IPopupMessage} from "./common/Types";

type AuthorsProps = {
    onAuthorsChange: (author: IAuthor[]) => void,
    authors: IAuthor[] | null
}

const Authors: React.FC<AuthorsProps> = (props) => {

        const {onAuthorsChange, authors} = props;
        const [showAuthorForm, setShowAuthorForm] = useState<boolean>(false);
        const [popupMessage, setPopupMessage] = useState<IPopupMessage | null>(null);
        const [showPopupMessage, setShowPopupMessage] = useState<boolean>(false);
        const [editClicked, setEditClicked] = useState<boolean>(false);
        const [indexToEdit, setIndexToEdit] = useState<number | null>(null);
        const [authorToEdit, setAuthorToEdit] = useState<IAuthor | null>(null);

        const handleAddAuthorForm = () => {
            setEditClicked(false);
            setShowAuthorForm(true);
        }
        const handleCloseAuthorForm = () => {
            setEditClicked(false);
            setShowAuthorForm(false);
        }

        const ListRender = () => {
            if (!authors || authors.length === 0) {
                return <NoAuthorList/>;
            }
            if (authors) {
                return <AuthorList onAuthorDelete={handleOnAuthorDelete} authors={authors}
                                   onEditClicked={handleEditButtonClick}/>
            }
        }

        const FormRender = () => {
            if (!showAuthorForm) {
                return;
            }

            if (editClicked) {
                return <EditAuthor editClicked={editClicked}
                                   onCloseClick={handleCloseAuthorForm}
                                   onUpdateAuthorSubmit={handleOnUpdateAuthorSubmit}
                                   authorToUpdate={authorToEdit}/>;
            }
            return <AuthorForm onCloseClick={handleCloseAuthorForm} onCreateAuthorSubmit={handleOnCreateAuthorSubmit}
                               editClicked={editClicked}/>
        }

        const handleOnCreateAuthorSubmit = (newAuthor: IAuthor) => {
            const newAuthorList: IAuthor[] = authors ? authors.slice() : [];
            newAuthorList.push(newAuthor);
            onAuthorsChange(newAuthorList);
            setPopupMessage({message: "Author added Successfully", className: "alert-success"});
            setShowPopupMessage(true);
        }
        const handleOnAuthorDelete = (id: number) => {
            if (!authors) {
                return;
            }
            const newAuthorList: IAuthor[] = authors.slice();
            newAuthorList.splice(id, 1);
            onAuthorsChange(newAuthorList);
            setPopupMessage({message: " Author Deleted Successfully", className: "alert-danger"});
            setShowPopupMessage(true);
        }
        const handleEditButtonClick = (index: number) => {
            setEditClicked(true);
            setShowAuthorForm(true);
            setIndexToEdit(index);
        }
        const handleOnUpdateAuthorSubmit = (newAuthor: IAuthor) => {
            const newAuthorList: IAuthor[] = authors ? authors.slice() : [];
            if (indexToEdit === null) {
                return;
            }
            newAuthorList.splice(indexToEdit, 1, newAuthor);
            onAuthorsChange(newAuthorList);
            setPopupMessage({message: "Author Edited Successfully", className: "alert-warning"});
            setShowPopupMessage(true);
        }

        useEffect(() => {
            if (indexToEdit === null || !authors || !authors[indexToEdit]) {
                return;
            }
            setAuthorToEdit(authors[indexToEdit]);
        }, [authors, indexToEdit]);

        return (
            <Row className="authors">
                <Header header="Authors"/>
                {ListRender()}
                <PopupMessage message={popupMessage} isPopupMessageShow={showPopupMessage}/>
                <AddAuthor onAddClick={handleAddAuthorForm}/>
                {FormRender()}
            </Row>
        );
    }
;

export default Authors;
