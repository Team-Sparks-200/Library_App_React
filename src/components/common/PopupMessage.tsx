import React, {useEffect, useState} from 'react';
import {FiMessageCircle, FiX} from "react-icons/fi";
import {IPopupMessage} from "../authors/AuthorForm";
import {Col, Row} from "react-bootstrap";

type PopupMessageProps = {
    message: IPopupMessage | null,
    isPopupMessageShow: boolean
}

const PopupMessage: React.FC<PopupMessageProps> = (props) => {
    const [popupMessage, setPopupMessage] = useState<IPopupMessage | null >(null);
    const [isPopupMessageShow, setPopupMessageShow] = useState<Boolean>(false);

    const handleClosePopupMessage = () => {
        setPopupMessageShow(false);
    }

   useEffect(() =>{
       if(props.message) {
           setPopupMessage(props.message);
           setPopupMessageShow(props.isPopupMessageShow);
       }
       setTimeout(() => {
           setPopupMessageShow(false)
       },2000);
   },[props.message, props.isPopupMessageShow])


    return (
        <React.Fragment>
            {isPopupMessageShow &&
            <Row className={popupMessage?.className + " p-1 d-flex align-items-center pop_up"}>
                <Col xs={11} className='d-flex align-items-center'>
                    <FiMessageCircle className="me-1" size={22}/>
                    {popupMessage?.message}
                </Col>
                <Col xs={1} className="pe-0">
                    <FiX onClick={handleClosePopupMessage} size={22}/>
                </Col>
            </Row>
            }
        </React.Fragment>

    );
};

export default PopupMessage;
