import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  order: 1;
  margin-left: auto;
  margin-right: 0;

  p {
    margin: 0 48px 20px 48px;
    text-align: center;
  }

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

  @media screen and (max-width: 1024px) {
    margin: 0 16px 42px 16px;
    order: 0;
  }

  @media screen and (max-width: 768px) {

    p {
      font-family: Muli;
      font-size: 16px;
      line-height: 20px;
      margin: 0 16px 16px;
    }
  }
`;