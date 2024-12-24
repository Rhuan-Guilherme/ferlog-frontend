import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 350px;

  h1 {
    font-size: 4.3rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    border: 1px solid ${(props) => props.theme.gray[500]};
    background-color: ${(props) => props.theme.gray[100]};
    padding: 1rem 0.5rem;
    border-radius: 6px;
  }
`;

export const ButtonLogin = styled.button`
  padding: 1rem 2rem;
  border-radius: 6px;
  font-weight: 700;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.blue[500]};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.blue[700]};
  }
`;
