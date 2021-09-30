import React from "react";
import {Button} from "react-bootstrap";

const Formbutton: React.FC = () => {
    return (
        <Button className="form-button float-end mt-2 py-1 px-4" type="submit">
           Create
        </Button>
    );
}

export default Formbutton;