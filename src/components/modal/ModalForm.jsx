import React from 'react';
import * as Yup from "yup";
import { Col, Row, Container, Navbar, Button, Form, } from 'react-bootstrap'
import "../modal/Modal.css"

export default function ModalForm() {

    return (
        <>
            <h5 className='FieldTitle'>Personal Info</h5>
            <Row>
                <Col md={3}></Col>
                <Col><Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="input" placeholder="Name" />
                </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Name" />
                    </Form.Group>
                </Col>
            </Row>
            <h5 className='FieldTitle'>Office Info</h5>
            <Row>
                <Form.Group className="mb-3">
                    <Form.Label>Office</Form.Label>
                    <Form.Select type="text" placeholder="Name">
                        <options>test</options>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Department</Form.Label>
                        <Form.Select type="text" placeholder="Select">
                            <options>test</options>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Role</Form.Label>
                        <Form.Select type="text" placeholder="Name">
                            <options>test</options>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Direct Manager</Form.Label>
                        <Form.Select type="text" placeholder="Name">
                            <options>test</options>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Attendance Profile</Form.Label>
                        <Form.Select type="text" placeholder="Name">
                            <options>test</options>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Position</Form.Label>
                        <Form.Select type="text" placeholder="Name">
                            <options>test</options>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <h5 className='FieldTitle'>Work from Home</h5>
            <Row>
                <Form.Check
                label = "Allow Employee to work from home"
                className='ms-3'
                />
            </Row>


        </>
    )
}
