import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import { FiEdit,FiTrash2 } from "react-icons/fi";
import { IconContext } from "react-icons";
import DeletePopup from "../common/DeletePopUp";

export interface IAuthor {
    name:string
}

type AuthorProps = {
    author: IAuthor,
    index: number,
    onEditClicked: (bool:boolean, index:number) => void
    onAuthorDelete: (id:number) => void
}

const Author: React.FC<AuthorProps> = (props) => {
    const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false);
    const handleDeletePopupClose = () => setShowDeletePopup(false);
    const handleDeletePopupShow = () => setShowDeletePopup(true);

    return (
        <React.Fragment>
            <Row xs={12} className="ps-0 author py-0">
                <Col xs="8" className="ps-0">
                    <h5 className="p-0">{props.index + 1}. {props.author.name}</h5>
                </Col>
                <Col xs="4" className="text-end px-0">
                    <IconContext.Provider value={{ size: "1em" }}>
                        <FiEdit className="mx-2 icons text-warning" onClick={() => props.onEditClicked(
                            true, props.index)}  />
                        <FiTrash2 className="icons text-danger"
                       onClick={handleDeletePopupShow} />
                    </IconContext.Provider>
                </Col>
            </Row>
            {showDeletePopup && <DeletePopup onDeletePopupClose={handleDeletePopupClose}
                                             showDeletePopup={showDeletePopup}
                                             onDelete={() => props.onAuthorDelete(props.index)}/>
            } </React.Fragment>
    );
};

export default Author;
