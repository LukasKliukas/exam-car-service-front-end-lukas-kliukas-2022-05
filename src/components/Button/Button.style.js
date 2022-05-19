import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => props.color};
  border: none;
  border-radius: 1rem;
  color: #ef4623;
  font-style: italic;
  padding: 0.5rem 1rem;
  text-decoration: none;
  cursor: pointer;
  :hover {
    background: #fbd0c7;
    box-shadow: 2px 2px 2px #2986cc;
    color: #2c343c;
  }
`;
