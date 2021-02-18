import styled from "styled-components";
import Carrousel from "react-elastic-carousel";

export const ContainerCarrousel = styled(Carrousel)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 300px;
  min-height: 322px;
  max-height: 400px;
  background-color: #fff;
  overflow: hidden;

  .rec-carousel {
    width: 103%;
    @media (max-width: 750px) {
      width: 106%;
    }
    @media (max-width: 280px) {
      width: 107%;
    }
  }

  button {
    background-color: white;
    box-shadow: 0 0 1px 2px white;
    margin: -105px 0 0 18px;
    z-index: 5;
    width: 11px;
    height: 11px;

    @media screen and (max-width: 280px) {
      margin-top: -100px;
    }
    @media screen and (min-width: 320px) and (max-width: 340px) {
      margin-top: -60px;
    }
    @media screen and (min-width: 350px) and (max-width: 370px) {
      margin-top: -91px;
    }
    @media screen and (min-width: 375px) and (max-width: 420px) {
      margin-top: -115px;
    }
    @media screen and (min-width: 540px) and (max-width: 600px) {
      margin-top: -116px;
    }
    @media screen and (max-width: 750px) {
      width: 9px;
      height: 9px;
    }
    @media screen and (min-width: 768px) and (max-width: 770px) {
      margin-top: -230px;
    }
    @media screen and (min-width: 976px) and (max-width: 1000px) {
      margin-top: -100px;
    }
    @media screen and (min-width: 1024px) and (max-width: 1024px) {
      margin-top: -170px;
    }

    &:focus,
    &:hover {
      background-color: #d97f2d;
      box-shadow: 0 0 1px 2px #d97f2d;
    }
  }
`;

export const PictureScenery = styled.picture`
  width: 100%;
  height: 100%;
  min-height: 400px;
`;

export const TextContainer = styled.div`
  margin: auto auto 60px 30px;
  display: flex;
  flex-direction: column;
  max-width: 600px;

  h3,
  p {
    color: #fff;
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
`;

export const ImageCarrousel = styled.img`
  width: 100%;
  height: 100%;
  min-height: 400px;
  object-fit: cover;
`;

export const CarrouselItem = styled.a`
  max-height: 60vh;
  height: 100%;
  width: 100%;
  position: relative;
  cursor: pointer;
`;

export const FloatingDivision = styled.div`
  width: 100%;
  height: 28vh;
  max-height: 80vh;
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(40, 39, 39, 0) 5.91%,
    rgba(40, 40, 40, 0.74) 95.31%
  );
  @media screen and (max-width: 280px) {
    height: 38vh;
  }
  @media screen and (min-width: 300px) and (max-width: 320px) {
    height: 30vh;
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    height: 28vh;
  }
  @media screen and (min-width: 1000px) and (max-width: 1020px) {
    height: 25vh;
  }
  @media screen and (min-width: 1024px) and (max-width: 1024px) {
    height: 14vh;
  }
`;
