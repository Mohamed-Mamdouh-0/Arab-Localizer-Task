import React from 'react'
import { Container } from 'react-bootstrap'
import Sidebar from './sidebar/Sidebar'
import { Col, Row } from 'react-bootstrap'
import User from './user/User';
import MainContainer from './mainContainer/MainContainer';

function Home() {

    return (
        <div>
            <Container fluid="true">

                <Row className='gx-0'>
                    <Col >

                        <Sidebar />
                        <User />
                        <MainContainer />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Home