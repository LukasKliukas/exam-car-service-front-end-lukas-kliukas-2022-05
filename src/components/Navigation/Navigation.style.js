import styled from 'styled-components';

export const NavWrap = styled.div`
  & a {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    background: #64686c;
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
  }
  & img {
    max-width: 20rem;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #64686c;
  margin: 0 auto;
  max-width: 60rem;
`;
