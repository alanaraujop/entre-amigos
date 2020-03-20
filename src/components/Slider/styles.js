import styled from 'styled-components';

export const ShadowContainer = styled.div`
  width: 100%;
  height: 56px;
  background: linear-gradient(180deg, #282828 0%, rgba(255, 255, 255, 0) 100%);
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const CampaignContainer = styled.div`
  width: 100%;
  height: 20vh;
  max-height: 260px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(180deg, rgba(40, 39, 39, 0) 5.91%, rgba(40, 40, 40, 0.74) 95.31%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .textContainer {
    margin: auto auto 60px 30px;
    display: flex;
    flex-direction: column;
    max-width: 600px;

    h3, p {
      color: #FFF;
      font-family: Muli;
      font-style: normal;
      font-weight: bold;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      text-align: left;
    }

    h3 {
      font-size: 31px;
      line-height: 39px;
    }

    p {
      font-size: 16px;
      line-height: 20px;
    }

    @media screen and (max-width: 1024px) {
      margin-bottom: 25px;
      margin-right: 25px;

      h3 {
        font-size: 25px;
        line-height: 31px;
      }

      p {
        font-size: 14px;
        line-height: 18px;
      }
    }

    @media screen and (max-width: 640px) {
      margin-right: 25px;
      margin-bottom: 15px;
      margin-left: 16px;

      h3 {
        font-size: 25px;
        line-height: 31px;
      }

      p {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }

`;
