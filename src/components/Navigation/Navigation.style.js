import styled from 'styled-components';

export const NavWrap = styled.div`
  & a {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    background: #bec5cc;
    border: none;
    border-radius: 1rem;
    color: #ef4623;
    padding: 0.5rem 1rem;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    :hover {
      background: #ef4623;
      box-shadow: 2px 2px 2px #64686c;
      color: #2c343c;
    }
  }
  & img {
    max-width: 20rem;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #2c343c;
  margin: 0 auto;
  max-width: 60rem;
  background: #2c343c;
`;
