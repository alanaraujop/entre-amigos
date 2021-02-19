import styled from "styled-components";

export const ContainerMenuMobile = styled.div`
  display: none;
  @media Screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 56px;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: $baseColor;
    z-index: 15;
    will-change: transform;
    transition: 400ms ease-in-out;
    /*  */
    visibility: hidden;
    transform: translateX(100%);
    opacity: 0;
    /*  */
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    overflow-y: scroll;
  }
`;

export const MenuMobileNavigation = styled.nav`
  @media Screen and (max-width: 1024px) {
    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      margin: 15px 0;
      color: #d96921;
      text-align: center;
      width: 100%;
      font-size: 32px;
      position: relative;
      font-family: Abel;
      font-weight: 300;
      transition: 400ms ease-in-out;

      &.active {
        font-weight: 600;
      }
    }
  }

  &.opened {
    visibility: visible;
    transform: translateX(0);
    opacity: 1;
    box-shadow: -11px 0px 18px 8px rgba(255, 255, 255, 0.65);
  }

  @media screen and (orientation: landscape) {
    &-navigation {
      a {
        margin: 5px 0;
        font-size: 20px;
      }
    }
  }
`;
