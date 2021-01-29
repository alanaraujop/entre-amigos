import * as S from "./CloseButtonStyle";

export function CloseButton({ toggleModal }) {
  return (
    <S.CloseButton onClick={toggleModal}>
      <S.Line />
      <S.Line />
    </S.CloseButton>
  );
}
