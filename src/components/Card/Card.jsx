import React from 'react'
import { Badge, Row, Col } from 'react-bootstrap'
import "../Card/Ecard.css"
import { Icon } from '@iconify/react';
import styled from 'styled-components';

function Ecard({ user }) {
    return (
        <Col md={3}>
            <div>
                <div class="card p-3 Ecard">
                    <Row>
                        <Col lg={3} className="p-0">
                            <UserImage src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' />
                            <div className='user-edit'>
                                <Icon icon="ci:edit" color="#8997a4" width="20" height="22" />
                                <Icon icon="ant-design:pause-circle-outlined" color="#8997a4" width="20" height="22" />
                                <Icon icon="ic:baseline-delete-forever" color="#8997a4" width="28" height="21" />
                            </div>
                        </Col>
                        <Col>
                            <div class="card-body">
                                <h5 class="card-title">{user.name}</h5>
                                <h7>{user.role}</h7>
                                <p class="card-text mb-2">{user.department}</p>
                                <Badge bg="secondary">Absent</Badge>
                                <div className='notifications'>
                                    <Icon className='me-2' icon="zondicons:exclamation-solid" color="#eaeef0" width="20" height="20" />
                                    <Icon className='me-2' icon="zondicons:exclamation-solid" color="#eaeef0" width="20" height="20" />
                                    <Icon className='me-2' icon="zondicons:exclamation-solid" color="#eaeef0" width="20" height="20" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Col>
    )
}

export default Ecard

const UserImage = styled.img`
height:64px;
width:64px;
border-radius:50px;
margin:2vh;

`;