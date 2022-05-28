import styled from 'styled-components';

export const Wrapper = styled.div`
  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
    max-width: 90%;
    height: 50rem;
  }
  display: grid;
  grid-template-columns: 5fr 1fr;
  margin: 0 auto;
  max-width: 70%;
  height: 50rem;
`;
export const SectionLeft = styled.div``;
export const SectionRight = styled.div``;
export const Background = styled.div`
  background-image: url('/images/HomeBG.png');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;
