import React from 'react'
import {  Row, Col,Card,Container } from 'react-bootstrap'
import "../Card/Ecard.css"
import { Icon } from '@iconify/react';
import styled from 'styled-components';

function Ecard({ user }) {
    const badgeStyle = user.attendance
    return (
        <Col >
            <Container>
                <div class="card ps-2 Ecard">
                    <Row fluid={true}>
                        <Col xs={3} className=" p-0">
                            <UserImage className='mt-3 ms-4' src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' />
                            <div className='user-edit'>
                                <Icon className='me-3' icon="ci:edit" color="#8997a4" width="17" height="22" />
                                <Icon className='me-3' icon="ant-design:pause-circle-outlined" color="#8997a4" width="17" height="22" />
                                <Icon className='me-3' icon="ic:baseline-delete-forever" color="#8997a4" width="17" height="21" />
                            </div>
                        </Col>
                        <Col xs={9} className='p-0'>
                            <Card.Body class="card-body cardBody pt-2">
                                <Card.Title >{user.name}</Card.Title>
                                <Card.Subtitle>{user.role}</Card.Subtitle>
                                <Card.Text className='mb-0'>{user.department}</Card.Text>
                                <span className={badgeStyle}>{user.attendance}</span>
                                <div className='notifications'>
                                    <Icon className='me-2' icon="zondicons:exclamation-solid" color="#eaeef0" width="20" height="20" />
                                    <Icon className='me-2' icon="zondicons:exclamation-solid" color="#eaeef0" width="20" height="20" />
                                    <Icon className='me-2' icon="zondicons:exclamation-solid" color="#eaeef0" width="20" height="20" />
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Col>
    )
}

export default Ecard

const UserImage = styled.img`
height:64px;
width:64px;
border-radius:50px;
margin-bottom:1vh;
`;

