import styled from "styled-components";

export const RegisterWrapper = styled.div`
  max-width: 400px;
  margin: 6rem auto 2rem;
  padding: 2rem;
  background-color: #7e57c2;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  color: white;
  font-family: 'Poppins', sans-serif;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 400;
  font-size: 1.8rem;
  letter-spacing: 0.5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.6rem 0.75rem;
  border-radius: 6px;
  border: none;
  font-size: 1rem;
  outline: none;
  transition: 0.3s;
  font-family: inherit;
  color: white;
  background-color: rgba(255, 255, 255, 0.1); /* 👈 para mejorar el contraste */

  &::placeholder {
    color: rgba(255, 255, 255, 0.7); /* casi blanco */
    opacity: 1; /* 👈 ¡clave! A veces los navegadores lo ponen en 0.5 por defecto */
  }

  &:focus {
    box-shadow: 0 0 8px 2px orangered;
  }
`;



export const SubmitButton = styled.button`
  background-color: orangered;
  border: none;
  padding: 0.75rem 1rem;
  color: white;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkorange;
  }
`;
