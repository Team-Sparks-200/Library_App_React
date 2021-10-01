import React, {useState} from "react";
import { Row } from "react-bootstrap";
import Header from "./common/Header";
import AuthorForm from "./authors/AuthorForm";
import NoAuthorList from "./authors/NoAuthorsList";
import AddAuthor from "./authors/AddAuthor";
import AuthorList from "./authors/AuthorList";
import {IAuthor} from "./common/Types";
// import {IAuthor} from "./common/Types";

type AuthorsProps = {
    onAuthorsChange: (author: IAuthor[]) => void,
    authors:IAuthor[] | null
}



const Authors: React.FC<AuthorsProps> = (props) => {

    const [showAuthorForm, setShowAuthorForm] = useState<boolean>(false);

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
    }


  return (
    <Row className="authors">
      <Header header="Authors" />
        {(!props.authors && props.authors === null) && <NoAuthorList/>}
        {(props.authors && true) && <AuthorList authors={props.authors}/>}

      <AddAuthor onAddClick={handleAddAuthorForm}/>
        {showAuthorForm &&  <AuthorForm onCloseClick={handleCloseAuthorForm} onCreateAuthorSubmit={handleOnCreateAuthorSubmit}/>
        }
    </Row>
  );
};

export default Authors;
