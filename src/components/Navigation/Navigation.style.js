import styled from 'styled-components';

export const NavWrap = styled.div`
  @media only screen and (max-width: 300px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    max-width: 20rem;
    background: #64686c;
    & img {
      width: 10rem;
    }
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    max-width: 60rem;
    background: #64686c;
    & img {
      width: 15rem;
    }
  }
  @media only screen and (max-width: 700px) {
    margin: 0 2rem;
    max-width: 60rem;
    background: #64686c;
    & img {
      width: 16rem;
    }
  }
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
    transition-duration: 0.4s;
    cursor: pointer;
    :hover {
      background: #ef4623;
      box-shadow: 2px 2px 2px #64686c;
      color: #2c343c;
    }
  }
  & img {
    max-width: 18rem;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  max-width: 60rem;
  background: #64686c;
`;
export const NavigationHolder = styled.div`
  background: #64686c;
`;
