import styled from 'styled-components';
import Background from '../../assets/images/events_parallax.png';

export const EventsContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  margin-top: 56px;

  .main-container {
    background-image: url(${Background});
    width: 100%;
    /* height: 100vh; */
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 50px;
    -webkit-box-shadow: inset -1px -51px 10px -39px rgba(255,255,255,1);
    -moz-box-shadow: inset -1px -51px 10px -39px rgba(255,255,255,1);
    box-shadow: inset -1px -51px 10px -39px rgba(255,255,255,1);
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .events-title {
      font-family: 'Homemade Apple';
      font-size: 30px;
      line-height: 65px;
      text-align: center;
      color: #FFF;
      margin-bottom: 25px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.72);
      padding: 0 40px;

      @media screen and (max-width: 480px) {
        padding: 0 16px;
        font-size: 20px;
        line-height: 43px;
      }
    }

    .strip {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      background-color: #FFF;
      box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
      min-height: 400px;
      padding: 16px;

      .main {
        font-family: Muli;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 25px;
        text-align: center;
        max-width: 900px;
      }

      .round-boxes {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .round-box {
          margin: 30px 20px 20px;
          width: 265px;
          height: 265px;
          position: relative;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 175ms ease-in-out;

          .box-title {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            text-align: center;
            font-family: Abel;
            font-style: normal;
            font-weight: normal;
            font-size: 28px;
            line-height: 36px;
            text-align: center;
            margin: 40px;
          }

          &:nth-child(1) {

            .box-title {
              color: #FF9535;
            }

            &:hover {
              background-color: #FF9535;
            }
          }

          &:nth-child(2) {

            .box-title {
              color: #FF8433;
            }

            &:hover {
              background-color: #FF8433;
            }
          }

          &:nth-child(3) {

            .box-title{
              color: #D96921;
            }

            &:hover {
              background-color: #D96921;
            }
          }

          .box-text {
            display: none;
          }

          &:hover {

            .box-title {
              display: none;
            }

            .box-text {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              text-align: center;
              font-family: Muli;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 20px;
              text-align: center;
              color: #F9F9F9;
              border-radius: 50%;
              height: 100%;
              padding: 40px 30px 30px 30px;
            }
          }
        }
      }

      /* @media screen and (max-width: 768px) {

        .round-boxes {

          .round-box {
            width: 160px;
            height: 160px;
          }
        }
      } */
    }

    .reservationContainer {
      width: 70%;
      max-width: 1144px;
      text-align: left;
      margin: 20px auto 30px auto;

      .reservationText {
        font-family: Muli;
        font-style: normal;
        font-weight: bold;
        font-size: 31px;
        line-height: 39px;
        text-align: justify;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.72);
        margin: 10px 0 25px 0;
        max-width: 680px;
        min-width: 280px;
        width: 65%;
      }

      .reservationButton {
        text-transform: uppercase;
        width: fit-content;
        background: #D96921;
        box-shadow: -4px -4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        font-family: Muli;
        font-style: normal;
        font-weight: bold;
        font-size: 31px;
        text-align: center;
        color: #F9F9F9;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 40px;
        margin-bottom: 25px;
        cursor: pointer;
      }

      @media screen and (max-width: 1600px) {

        .reservationText {
          font-size: 28px;
        }

        .reservationButton {
          font-size: 26px;
        }
      }

      @media screen and (max-width: 1024px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        .reservationText {
          font-size: 28px;
          text-align: center;
          width: 100%;
        }

        .reservationButton {
          font-size: 26px;
        }
      }

      @media screen and (max-width: 640px) {

        .reservationText {
          font-size: 22px;
          line-height: 30px;
        }

        .reservationButton {
          font-size: 20px;
        }
      }

      @media screen and (max-width: 480px) {

        .reservationText {
          font-size: 18px;
          line-height: 23px;
        }

        .reservationButton {
          font-size: 18px;
          padding: 10px 30px;
        }
      }
    }
  }
`;
