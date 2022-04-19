import React, { useContext, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Ecard from '../Card/Card';
import SearchBar from '../search/SearchBar';
import '../mainContainer/MainContainer.css';
import { UsersContext } from '../../contexts/UsersContext';



function MainContainer() {

  const [usersList, setUsersList] = useState([])
  const { users } = useContext(UsersContext)

  const HandleChange = (e) => {
    if (e.target.value == "") {
      setUsersList(users)
    } else {
      const filteredUsers = users.filter(u => u.name == e.target.value)
      setUsersList(
        filteredUsers
      )
    }

  }
  const HandleDelete = (id) => {
    
      const filteredUsers = users.filter(u => u.id !== id)
      setUsersList(
        filteredUsers
      )
    console.log(filteredUsers)

  }

  useEffect(() => {
    setUsersList(users)

  }, [users])

  return (
    
    <Container  fluid="true" className='Main-Container'>
      <Row className='mb-5'>
        <Col>
          <SearchBar HandleChange={HandleChange} />
        </Col>
      </Row>
      <Row className='ms-3 cardRow'xs={1} md={2} lg={3}>
        {usersList.map((user) =>
          <Ecard user={user} HandleDelete={HandleDelete} />
        )}
        
      </Row>
    </Container>
  
  )
}

export default MainContainer