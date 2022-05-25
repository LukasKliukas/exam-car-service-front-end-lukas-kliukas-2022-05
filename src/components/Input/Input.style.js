import styled from 'styled-components';

export const InputControl = styled.div`
  max-width: 30rem;
  color: #2c343c;
  background: #bec5cc;
  border-radius: 0.5rem;
  padding-left: 0.2rem;
`;

export const Label = styled.label`
  font-weight: bold;
  padding-left: 0.2rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`;

export const Input = styled.input`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  border-radius: 0.5rem;
  border: 0;
  border-bottom: 0.125rem solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  width: 100%;
  color: #2c343c;
  background: #bec5cc;
  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
  :focus {
    border-color: #2c343c;
    transition: border-color 1s;
    outline: 0;
  }
`;
