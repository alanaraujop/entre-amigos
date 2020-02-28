import styled from 'styled-components';
import Background from '../../assets/images/events_parallax.png';

export const EventsContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  margin-top: 56px;

  .main-container {
    background-image: url(${Background});
    width: 100%;
    height: 100vh;
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

        .round-box {
          margin: 30px 20px 0;
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
            color: #FF9535;
            margin: 40px;
          }

          .box-text {
            display: none;
          }

          &:hover {
            background-color: #FF9535;

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
    }
  }
`;
