import React from 'react'

import { Icon } from '@iconify/react';
import {Form} from 'react-bootstrap'
import "../search/SearchBar.css"
import { SearchWrapper,SearchContainer,IconButton,SearchInput } from './SearchBarStyled';
import FormModal from '../modal/Modal';

function SearchBar({HandleChange}) {
    

  return (
    <SearchWrapper >
        <Form className="d-flex">
        <SearchContainer>
            <IconButton>
            <Icon icon="bytesize:search" color="#23aaeb" width="11" height="11" />
            </IconButton>
            Search
            <SearchInput onChange={HandleChange}/>
            <FormModal />
        </SearchContainer>
        
      </Form>
    </SearchWrapper>
  )
}

export default SearchBar


