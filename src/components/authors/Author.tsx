import React from 'react';
import {Col, Row} from "react-bootstrap";
import { FiEdit,FiTrash2 } from "react-icons/fi";
import { IconContext } from "react-icons";

const Author: React.FC = () => {
    return (
       <ol className='px-1 m-0 author'>
       <Row className='px-1 pt-2 pb-1 '>
           <Col xs='8'>
                <li>Mahagama Sekara</li>
           </Col>
           <Col xs='4' className='text-end px-0'>
               <IconContext.Provider value={{ size: "1.5em", }}>
                 <FiEdit className='mx-2 icons text-warning' />
                 <FiTrash2 className='icons text-danger'/>
               </IconContext.Provider>
           </Col>
       </Row>
       </ol>
    );
};

export default Author;
