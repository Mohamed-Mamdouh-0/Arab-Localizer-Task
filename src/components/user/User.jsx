import React from 'react'
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import {Col,Row,Container,Navbar,Form,Button} from 'react-bootstrap'
import {NotifIcon,UserImage,SignInButton} from "./UserStyledComponent"

function User() {
  return (
    <Container>
        <Row>
            <Col>
            <Navbar>
                <Container>
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    Thursday, 03 Oct 02:08:07 PM
                    </Navbar.Text>
                    <SignInButton variant="primary">Sign in</SignInButton>
                    <NotifIcon>
                        <Icon className='mr-5' icon="ic:sharp-notifications-active" color="#8997a4" width="19" height="19" />   
                    </NotifIcon>
                    <UserImage src='https://media.istockphoto.com/vectors/vector-businessman-black-silhouette-isolated-vector-id610003972?k=20&m=610003972&s=612x612&w=0&h=-Nftbu4sDVavoJTq5REPpPpV-kXH9hXXE3xg_D3ViKE=' />
                    <Navbar.Text>
                         Ahmed Khaled
                    </Navbar.Text>
                    <Icon className='m-2' icon="ep:arrow-down-bold" color="#8997a4" width="12" height="12" />
                     </Navbar.Collapse>
                     </Container>
                    </Navbar>
            </Col>
        </Row>
    </Container>
  )
}

export default User


