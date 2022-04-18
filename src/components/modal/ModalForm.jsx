import React, { useContext } from 'react';
import { Col, Row, Button, Form, Modal } from 'react-bootstrap'
import "../modal/Modal.css"
import { useState } from 'react';
import { UsersContext } from "../../contexts/UsersContext"



export default function ModalForm({ handleClose }) {
    const [validated, setValidated] = useState(false);
    const [values, setValues] = useState({});
    const { setUsers, users } = useContext(UsersContext)
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        event.preventDefault();
        event.stopPropagation();
        setUsers([...users, values])
        handleClose()

    };


    const onFormChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value });

    };
    return (
        <>
            <h5 className='FieldTitle'>Personal Info</h5>
            <Form
                onSubmit={handleSubmit}
            >
                <Row>
                    <Col md={3}></Col>
                    <Col><Form.Group className="mb-3" controlId='nameValidation'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="input" placeholder="Name" required onChange={onFormChange} name="name" />
                        <Form.Control.Feedback type="invalid">
                            Please write a Name.
                        </Form.Control.Feedback>
                    </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" placeholder="Name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId='dateValidation' >
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" placeholder="Name" required onChange={onFormChange} name="date" />
                        </Form.Group>
                        <Form.Control.Feedback type="invalid">
                            Please choose a Date.
                        </Form.Control.Feedback>
                        <Form.Group className="mb-3" controlId='emailValidation'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Name" required onChange={onFormChange} name="email" />
                            <Form.Control.Feedback type="invalid">
                                Please write an email.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <h5 className='FieldTitle'>Office Info</h5>
                <Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Office</Form.Label>
                        <Form.Select type="text" placeholder="Name">
                            <option>test</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId='Departmentalidation'>
                            <Form.Label>Department</Form.Label>
                            <Form.Select type="text" placeholder="Select" required onChange={onFormChange} name="department">
                                <option> </option>
                                <option>Buisness Department</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Please choose a Department.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Role</Form.Label>
                            <Form.Select type="text" placeholder="Name">
                                <option>test</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Direct Manager</Form.Label>
                            <Form.Select type="text" placeholder="Name">
                                <option>test</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Attendance Profile</Form.Label>
                            <Form.Select type="text" placeholder="Name">
                                <option>test</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId='positionValidation'>
                            <Form.Label>Position</Form.Label>
                            <Form.Select type="text" placeholder="Name" required onChange={onFormChange} name="role" defaultValue={null}>
                                <option> </option>
                                <option>Hr Head</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Please choose a position.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <h5 className='FieldTitle'>Work from Home</h5>
                <Row>
                    <Form.Check
                        label="Allow Employee to work from home"
                        className='ms-3'
                    />
                </Row>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" >
                        Save Changes
                    </Button>
                </Modal.Footer>




            </Form>

        </>
    )
}
