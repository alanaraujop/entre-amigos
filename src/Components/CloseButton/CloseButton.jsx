import * as S from "./CloseButton.Styles";

export function CloseButton({ toggleModal }) {
  return (
    <S.CloseButton onClick={toggleModal}>
      <S.Line />
      <S.Line />
    </S.CloseButton>
  );
}
