import styled from "styled-components";

export const CloseButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
`;

export const Line = styled.span`
  display: block;
  width: 45px;
  height: 1px;
  background-color: #d96921;
  position: absolute;

  &:nth-child(1) {
    transform: rotate(45deg);
  }

  &:nth-child(2) {
    transform: rotate(-45deg);
  }
`;
