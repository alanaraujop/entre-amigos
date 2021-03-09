import styled from "styled-components";
import Image from "next/image";

export const MasterContainerHeader = styled.section`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(black, transparent);
  height: 60px;
`;
export const Imagem = styled(Image)`
  &:hover {
    cursor: pointer;
  }
`;

export const ContainerImageLogo = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavigationMenu = styled.nav`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentNavigationMenu = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  color: white;
`;
