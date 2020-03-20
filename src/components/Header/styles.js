import styled from 'styled-components';

export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  background-color: transparent;
  position: fixed;
  z-index: 3;
  padding: 0 10px 0 15px;

  .header-background {
    background-color: #D96921;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    z-index: -1;
  }

  .header-container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      align-items: center;

      img {
        width: 170px;
        height: 48px;
      }
    }

    @media screen and (max-width: 1024px) {
      background-color: #D96921;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

      .header-background {
        box-shadow: none;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;

  .link-container {
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin: 0 10px;

    .link-background {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    a {
      display: flex;
      height: 100%;
      align-items: center;
      text-decoration: none;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.9);
      padding: 0 10px;
      font-size: 20px;
      line-height: 25px;
      font-family: Abel;
      position: relative;
      z-index: 3;

      &:last-of-type {
        margin-right: 0;
      }
    }

    .active + .link-background {
      background-color: #B2561B;
    }
  }


  @media screen and (max-width: 1024px) {
    display: none;
  }
`;