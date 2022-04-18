import React, { useContext, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Ecard from '../Card/Card';
import SearchBar from '../search/SearchBar';
import '../mainContainer/MainContainer.css';
import { UsersContext } from '../../contexts/UsersContext';
import Cardtwo from '../Card/Cardtwo';


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

    <Container  fluid ={true} className='Main-Container'>
      <Row className='mb-5'>
        <Col>
          <SearchBar HandleChange={HandleChange} />
        </Col>
      </Row>
      <Row className='ms-3'>
        {usersList.map((user) =>
          <Ecard user={user} />
        )}
        {/* <Cardtwo /> */}
      </Row>
    </Container>

  )
}

export default MainContainer