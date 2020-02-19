import styled from 'styled-components';

export const Iframe = styled.div`
  width: 100vw;
  min-height: 300px;
  max-height: 600px;
  height: 100vw;
  display: flex;
  flex-direction: column;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
  margin-top: 20px;

  .map-address {
    background-color: #F9F9F9;
    padding-bottom: 10px;
  }
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;