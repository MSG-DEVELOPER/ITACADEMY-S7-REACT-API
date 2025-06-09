import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.div<{ top: boolean }>`
 border: 1px solid grey;
  display: flex;
  flex-direction: column;
  max-width: 185px; 
  border-radius: 5px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  cursor: pointer;

   article{
    padding:5px;
    height: 6.5rem;
   
    }

   p{
  width: 40px;
  height: 40px;
  background-color:${({top})=>(top? 'black' : 'bisque')};
  color:${({top})=>(top? 'yellow' : 'black')};
  font-size: ${({top})=>(top? '1.5rem' : '1rem')};;
  margin-top: -1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }
  
  `


export const LinkStyled = styled(Link)`
text-decoration: none;
color: inherit;
`
 