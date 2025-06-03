import styled from "styled-components";

export const Main = styled.div`
 border: 1px solid grey;
  display: flex;
  flex-direction: column;
  max-width: 185px; 
  border-radius: 5px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);

   article{
    padding:5px;
    height: 6.5rem;
   
    }

   p{
 width: 40px;
  height: 40px;
  background-color:bisque;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  color: #333;
  font-size: 1rem;
  margin-top: -1rem;
  
   }
  `
 