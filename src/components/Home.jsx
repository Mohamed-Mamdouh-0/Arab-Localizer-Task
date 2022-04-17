import React from 'react'
import { Container } from 'react-bootstrap'
import Sidebar from './sidebar/Sidebar'
import {Col,Row} from 'react-bootstrap'
import User from './user/User';
import MainContainer from './mainContainer/MainContainer';

function Home() {
    const styles = {
        grid: {
            paddingLeft: 0,
            paddingRight: 0
        },
        row: {
            marginLeft: 0,
            marginRight: 0
        },
        col: {
            paddingLeft: 0,
            paddingRight: 0
        }
    };
  return (
    <div>
        <Container fluid = "true">
            <Row className='gx-0'>
                <Col xs={1} md={1}>
                    <Sidebar />
                </Col>
                <Col xs={11} md={11}>
                    <User />
                    <MainContainer />
                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default Home