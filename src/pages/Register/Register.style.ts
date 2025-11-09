import styled from "styled-components";

export const RegisterWrapper = styled.div`
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  padding-top: 5rem;
  background: linear-gradient(180deg, #f8f5ff 0%, #ffffff 55%, #f5f7fb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 1.5rem 4rem;

  @media (max-width: 768px) {
    padding: 5rem 1.5rem 3rem;
  }
`;

export const RegisterContainer = styled.div`
  width: 100%;
  max-width: 440px;
  background: #ffffff;
  border-radius: 24px;
  padding: 3rem 2.5rem;
  box-shadow: 0 20px 50px rgba(31, 31, 46, 0.12);
  border: 1px solid rgba(126, 87, 194, 0.08);

  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
    border-radius: 20px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: -0.02em;
  color: #1f1f2e;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 2.5rem;
  color: #4a4a5c;
  font-size: 0.95rem;
  opacity: 0.8;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1.25rem;
  border-radius: 12px;
  border: 1.5px solid rgba(126, 87, 194, 0.2);
  font-size: 0.95rem;
  font-family: inherit;
  color: #1f1f2e;
  background: #ffffff;
  transition: all 0.2s ease;
  outline: none;

  &::placeholder {
    color: #9ca3af;
    opacity: 1;
  }

  &:focus {
    border-color: #7e57c2;
    box-shadow: 0 0 0 3px rgba(126, 87, 194, 0.1);
    background: #ffffff;
  }

  &:hover:not(:focus) {
    border-color: rgba(126, 87, 194, 0.3);
  }
`;

export const ErrorMessage = styled.p`
  margin: 0;
  color: #ef4444;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(239, 68, 68, 0.2);
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #7e57c2 0%, #5e35b1 100%);
  border: none;
  padding: 0.875rem 1.5rem;
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 12px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(94, 53, 177, 0.25);
  margin-top: 0.5rem;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #8b68d1 0%, #6d42c4 100%);
    box-shadow: 0 6px 18px rgba(94, 53, 177, 0.35);
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SuccessMessage = styled.p`
  margin-top: 1rem;
  color: #10b981;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.875rem 1rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(16, 185, 129, 0.2);
  text-align: center;
  font-family: inherit;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
  color: #9ca3af;
  font-size: 0.875rem;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: rgba(126, 87, 194, 0.15);
  }
`;

export const LinkText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: #4a4a5c;
  font-size: 0.9rem;

  a {
    color: #7e57c2;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s ease;

    &:hover {
      color: #5e35b1;
      text-decoration: underline;
    }
  }
`;

