import React, { useContext, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Ecard from '../Card/Card';
import SearchBar from '../search/SearchBar';
import './MainContainer.css';
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

  useEffect(() => {
    setUsersList(users)

  }, [users])

  return (

    <Container className='Main-Container'>
      <Row className='mb-5'>
        <Col>
          <SearchBar HandleChange={HandleChange} />
        </Col>
      </Row>
      <Row className=''>
        {usersList.map((user) =>
          <Ecard user={user} />
        )}
      </Row>
    </Container>

  )
}

export default MainContainer