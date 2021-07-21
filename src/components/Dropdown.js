import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const DropdownBtn = () => {
    return (
        <Dropdown style={{ minWidth: "100px" }}>
            <Button variant='light'>Edit</Button>

            <Dropdown.Toggle split variant='light' id='dropdown-split-basic' />

            <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Delete</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Duplicate</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Add reminder</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Add comment</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropdownBtn;
