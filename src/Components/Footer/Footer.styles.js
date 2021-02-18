import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 128px;
  position: relative;
  z-index: 2;
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    width: 85%;
    max-width: 1144px;
    height: 1px;
    background-color: #e1e1e1;
  }
  @media Screen and (max-width: 280px) {
    flex-direction: column-reverse;
    height: 200px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterTitle = styled.div`
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;

  @media screen and (max-width: 325px) {
    font-size: 16px;
  }
`;

export const ContainerSocialIcons = styled.div`
  margin: 10px;
  width: 80px;
  display: flex;
  justify-content: space-between;
  a:hover {
    cursor: pointer;
  }
`;

export const FooterName = styled.span`
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #7a7a7a;
  margin-top: 10px;
`;

export const FooterLogo = styled.div`
  margin-left: 15px;

  @media screen and (max-width: 325px) {
    margin-left: 2px;
  }
`;
