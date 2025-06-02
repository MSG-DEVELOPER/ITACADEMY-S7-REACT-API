import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Header =styled.header`
display: flex;
gap: 1rem;
background-color: purple;
padding: 1rem;
`





export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 700;
  padding: 5px;
  transition: 1s;
   
  &:hover {
   
    border-radius: 15px;
    background-color: blue;
    
  }
`;


