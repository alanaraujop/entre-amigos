import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../../assets/images/carousel_1.png';
import carousel1Mobile from '../../assets/images/carousel_1_mobile.png';
import carousel2 from '../../assets/images/carousel_2.png';
import carousel2Mobile from '../../assets/images/carousel_2_mobile.png';
import carousel3 from '../../assets/images/carousel_3.png';
import carousel3Mobile from '../../assets/images/carousel_3_mobile.png';
import logo from '../../assets/images/logo.png';

const Slider = () => {

  return (
    <div className="carouselContainer">
      <div className="logoContainer">
        <div className="logo" style={{backgroundImage: `url(${logo})`}} />
      </div>
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
          <source media="(min-width: 768px)" srcSet={carousel1} />
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
    </div>
  );
}

export default Slider;
