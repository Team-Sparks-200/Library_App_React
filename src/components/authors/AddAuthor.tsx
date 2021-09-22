import React from 'react';
import {Col, Row} from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { IconContext } from "react-icons";

const AddAuthor: React.FC = () => {
    return (
       <Row xs={2} className='AddAuthor mt-3'>
           <Col xs={12} className='px-0' >
               <IconContext.Provider value={{ color: "blue", className: "global-class-name",size: "1.5em", }}>
               <FiPlus className='px-0 me-2'/>
                <span className='my-2'>Add Author</span>
               </IconContext.Provider>
           </Col>


       </Row>
    );
};

export default AddAuthor;
