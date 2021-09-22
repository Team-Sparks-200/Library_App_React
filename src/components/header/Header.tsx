import React from "react";
import {Col} from "react-bootstrap";

type HeaderProps = {
  header:string
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Col xs={12} className='header pb-2 border-bottom px-0 border-2 border-dark mb-4'>
      <h2>{props.header}</h2>
    </Col>
  );
};

export default Header;
