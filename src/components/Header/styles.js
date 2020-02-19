import styled from 'styled-components';

export const MainHeader = styled.header`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 56px;
    background-color: #D96921;
    position: relative;
    z-index: 3;
    padding: 0 10px 0 15px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

    img {
      width: 170px;
      height: 48px;
    }
  }
`;
