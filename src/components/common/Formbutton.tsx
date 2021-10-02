import React from "react";
import {Button} from "react-bootstrap";

type Formbuttonprops = {
    editClicked:boolean
}

const Formbutton: React.FC<Formbuttonprops> = (props) => {
    return (
        <Button className="form-button float-end mt-2 py-1 px-4" type="submit">
            {props.editClicked ? "Update" : "Create" }
        </Button>
    );
}

export default Formbutton;