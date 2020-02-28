import styled from 'styled-components';

export const PageFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 128px;
  background: linear-gradient(180deg, rgba(196, 195, 195, 0.12) 0%, #C4C3C3 100%);
  position: relative;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    width: 85%;
    max-width: 1144px;
    height: 1px;
    background-color: #E1E1E1;
  }

  .social-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 80px;
  }

  .footer-title {
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
  }

  .social-icons {
    margin: 10px;

    a {
      margin: 10px;

      img {
        width: 32px;
        height: 32px;
      }
    }
  }

  .footer-name {
    font-family: Muli;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #7A7A7A;
    margin-top: 10px;
  }

  .footer-logo {
    margin-left: 15px;

    img {
      width: 80px;
      height: 101px;
    }
  }

  @media screen and (max-width: 325px) {
    
    .footer-title {
      font-size: 16px;
    }

    .footer-logo {
      margin-left: 2px;
    }
  }
`;