import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 42px;

  .sendButton {
    border: none;
    width: 128px;
    height: 36px;
    background-color: #D96921;
    border-radius: 5px;
    color: #FFF;
    text-transform: uppercase;
    align-self: flex-end;
  }

  @media screen and (max-width: 768px) {

    p {
      font-family: Muli;
      font-size: 16px;
      text-align: center;
      line-height: 20px;
    }
  }
`;