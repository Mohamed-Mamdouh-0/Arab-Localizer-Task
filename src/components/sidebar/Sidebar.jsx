import React from 'react'
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { Col, Row, Container } from 'react-bootstrap'

function Sidebar() {
    return (
        <Container>
            <Row>
                <Col xs={5} md={8}>
                    <SidebarNav>
                        <NavIconsWrapper className='pt-4'>
                            <span href="/home"><Icon icon="ic:sharp-dashboard" width="29" color="white" rotate={1} /></span>
                            <NavIconTitle>Dashboard</NavIconTitle>
                        </NavIconsWrapper>
                        <NavIconsWrapper>
                            <span eventKey="link-1"><Icon icon="ic:outline-tv" color="white" width="29" /></span>
                            <NavIconTitle>Workplace</NavIconTitle>
                        </NavIconsWrapper>
                        <NavIconsWrapper>
                            <span eventKey="link-2"><Icon icon="ic:baseline-free-breakfast" color="white" width="29" /></span>
                            <NavIconTitle>Holidays</NavIconTitle>
                        </NavIconsWrapper>
                        <NavIconsWrapper>
                            <span eventKey="link-3"><Icon icon="ic:baseline-supervisor-account" color="white" width="27" /></span>
                            <NavIconTitle>Employees</NavIconTitle>
                        </NavIconsWrapper>
                        <NavIconsWrapper>
                            <span eventKey="link-4"><Icon icon="fa-solid:hands" color="white" width="36" height="25" /></span>
                            <NavIconTitle>Inbound Requests</NavIconTitle>
                        </NavIconsWrapper>
                    </SidebarNav>
                </Col>
            </Row>
        </Container>
    )
}

export default Sidebar


const SidebarNav = styled.div`
width: 5vw;
background-image: linear-gradient(#39a4dc, #2763ab);
position: fixed;
top:0;
left:0;
height: 100%;

`;

const NavIconsWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top: 30%;
padding-top:15px;
`;

const NavIconTitle = styled.text`

width: 52px;
height: 14px;
font-family: Roboto;
font-size: 12px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.17;
letter-spacing: 0.66px;
text-align: left;
color: #fff;
`;