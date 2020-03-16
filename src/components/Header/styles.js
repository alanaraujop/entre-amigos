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
  }

  @media screen and (max-width: 640px) {
    padding: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;

  a {
    display: flex;
    height: 100%;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.9);
    padding: 0 10px;
    margin: 0 12px;
    font-size: 20px;
    line-height: 25px;
    font-family: Abel;
    position: relative;

    &:last-of-type {
      margin-right: 0;
    }

    &.active {
      background-color: #0003;
    }

    /* &.active::after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: #FFF;
      position: absolute;
      top: 0;
      left: 0;
    } */
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;