import {useState} from "react"
import { Icon } from '@iconify/react';
import {Button,Modal} from 'react-bootstrap'
import ModalForm from "./ModalForm";
import "../modal/Modal.css"

export default function FormModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        
        <Button onClick={handleShow} className='Add-Button' variant="primary"><Icon icon="akar-icons:plus" color="white" width="20" height="35"/> Add new</Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="Modal"
          size="xl"
          
        >
          <Modal.Header closeButton>
            <Modal.Title className="ModalTitle">NEW EMPLOYEE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ModalForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Save</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
