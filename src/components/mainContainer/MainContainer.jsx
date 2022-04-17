import React,{useContext} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Ecard from '../Card/Card';
import SearchBar from '../search/SearchBar';
import './MainContainer.css';
import {UsersContext} from '../../contexts/UsersContext';


function MainContainer() {
  const {users} = useContext(UsersContext)
  console.log(users)
  return (
    
    <Container className='Main-Container'>
      <Row className='mb-5'>
        <Col>
          <SearchBar />
        </Col>
      </Row>
      <Row className=''>
       {users.map( (user)=> 
          <Ecard user={user}/>
       )}
      </Row>
    </Container>

  )
}

export default MainContainer