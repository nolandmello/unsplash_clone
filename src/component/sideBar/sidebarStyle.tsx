import styled from 'styled-components';

export const DropdownContainer= styled.div`
position: absolute;
width: auto;
height: auto;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;
`

export const Options =styled.div`
  height: auto;
  display: flex;
  overflow: scroll;
  `

  export const Li=styled.li`
  list-style: none;
  `