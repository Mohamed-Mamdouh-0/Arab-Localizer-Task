import styled from 'styled-components'

export const SearchWrapper = styled.div`
height:48px;
padding-top:25px;
background: #f7f8f9;
box-sizing: border-box;
padding-left:2%;

`;
export const SearchContainer = styled.div`
    position: relative;
    width: 97%;
    height: 48px;
    background: white;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left:5px;
    transition: all 0.3s ease;
`;

export const SearchInput = styled.input`
    padding-left:48px;
    border:none;
    positions:absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    background-color: white;
    outline: none;
    font-size: 16px;
    border: 1px solid transparent;
    
    &:focus {
        border-color: rgba(0,0,0,0.3);
    }
`;

export const IconButton = styled.span`
    position: relative;
    display:flex;
    height: 36px;
    width:36px;
    border: none;
    z-index:1;
    justify-content:center;
    align-items:center;
    background: none;

 
`;
