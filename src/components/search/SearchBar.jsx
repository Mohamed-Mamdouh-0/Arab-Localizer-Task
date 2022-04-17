import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import {Col,Row,Container,Navbar,Form,Button,FormControl} from 'react-bootstrap'
import "../search/SearchBar.css"
import { SearchWrapper,SearchContainer,IconButton,SearchInput } from './SearchBarStyled';
import FormModal from '../modal/Modal';

function SearchBar() {
    

  return (
    <SearchWrapper >
        <Form className="d-flex">
        <SearchContainer>
            <IconButton>
            <Icon icon="bytesize:search" color="#23aaeb" width="11" height="11" />
            </IconButton>
            Search
            <SearchInput />
            <FormModal />
        </SearchContainer>
        
      </Form>
    </SearchWrapper>
  )
}

export default SearchBar


