import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  background: ${(props) => props.color};
  border: none;
  border-radius: 1rem;
  color: #ef4623;
  padding: 0.5rem 1rem;
  text-decoration: none;
  cursor: pointer;
  :hover {
    background: #fbd0c7;
    box-shadow: 2px 2px 2px #64686c;
    color: #2c343c;
  }
`;
