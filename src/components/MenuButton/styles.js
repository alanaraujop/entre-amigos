import styled from 'styled-components';

export const Button = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

`;
