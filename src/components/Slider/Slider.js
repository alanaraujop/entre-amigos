import React, { useState, useEffect, useRef, useCallback } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ShadowContainer, CampaignContainer } from './styles';
import carousel1 from '../../assets/images/carousel_1.png';
import carousel1Mobile from '../../assets/images/carousel_1_mobile.png';
import carousel2 from '../../assets/images/carousel_2.png';
import carousel2Mobile from '../../assets/images/carousel_2_mobile.png';
import carousel3 from '../../assets/images/carousel_3.png';
import carousel3Mobile from '../../assets/images/carousel_3_mobile.png';

const Slider = () => {
  // const [componentHeight, setComponentHeight] = useState(0);
  // const [elementHeight, setElementHeight] = useState(0);
  // const test = useRef(null);
  // let element;

  // const div = useCallback(node => {
  //   if (node !== null) {
  //     setComponentHeight(node.getBoundingClientRect());
  //     // setWidth(node.getBoundingClientRect().width);
  //   }
  // }, []);

  // useEffect(() => {
  //   setComponentHeight(test.current.clientHeight);
  //   element = document.querySelector('.imagem');
  //   setElementHeight(element.clientHeight);
  // }, []);

  // useEffect(() => {

  //   if (test.current) {
  //     setComponentHeight(test.current.clientHeight);
  //   }
  // }, [test]);

  // useEffect(() => {
  //   console.log(componentHeight, 'componentHeight');
  //   console.log(elementHeight, 'elementHeight');

  // }, [elementHeight]);

  return (
    <div className="carouselContainer">
      <ShadowContainer />
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
        stopOnHover={false}
        swipeable={true}
        emulateTouch={true}
        centerMode={true}
        centerSlidePercentage={100}
      >
        <picture>
          <source media="(min-width: 768px)" srcSet={carousel1} className="imagem" />
          <source media="(max-width: 767px)" srcSet={carousel1Mobile} />
          <img src={carousel1} alt="Entre Amigos" />
        </picture>
        <picture>
          <source media="(min-width: 768px)" srcSet={carousel2} />
          <source media="(max-width: 767px)" srcSet={carousel2Mobile} />
          <img src={carousel2} alt="Entre Amigos" />
        </picture>
        <picture>
          <source media="(min-width: 768px)" srcSet={carousel3} />
          <source media="(max-width: 767px)" srcSet={carousel3Mobile} />
          <img src={carousel3} alt="Entre Amigos" />
        </picture>
      </Carousel>
      <CampaignContainer>
        <div className="textContainer">
          <h3>Títulos de Campanhas</h3>
          <p>Aqui texto descritivo das campanhas</p>
        </div>
      </CampaignContainer>
    </div>
  );
}

export default Slider;
