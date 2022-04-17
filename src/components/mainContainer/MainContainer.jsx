import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Ecard from '../Card/Card';
import SearchBar from '../search/SearchBar';
import './MainContainer.css';

function MainContainer() {
  return (

    <Container className='Main-Container'>
      <Row className='mb-5'>
        <Col>
          <SearchBar />
        </Col>
      </Row>
      <Row className=''>
        <Ecard />
        <Ecard />
        <Ecard />
        <Ecard />
        <Ecard />
        <Ecard />
      </Row>
    </Container>

  )
}

export default MainContainer