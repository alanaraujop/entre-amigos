import styled from 'styled-components';

export const ContactContainer = styled.div`

  .contact-container {
    display: flex;
    margin-top: 35px;
    align-items: flex-start;
    align-self: flex-start;
  }

  display: flex;
  width: 100%;
  margin-top: 56px;
  min-height: 100vh;

  @media screen and (max-width: 1024px) {
    flex-direction: column;

    .contact-container {
      flex-direction: column;
      align-items: center;
      padding: 0;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;