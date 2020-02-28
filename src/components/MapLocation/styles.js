import styled from 'styled-components';

export const Iframe = styled.div`
  width: 100%;
  height: 485px;
  max-height: 600px;
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 0;
    padding-left: 0;
  }

  p {
    padding-left: 0;
  }

  .container {
    padding-left: 0;
  }

  .map-address {
    padding-bottom: 10px;
  }
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);  
  }

  @media screen and (max-width: 1024px) {

    .container {
      padding-left: 16px;
    }

    .map-address {
      background-color: #F9F9F9;
      box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
    }

    iframe {
      box-shadow: none;
    }

    h2 {
      margin-top: 16px;
    }
  }

  @media screen and (max-width: 640px) {
    height: 90vw;
    min-height: 320px;
  }
`;