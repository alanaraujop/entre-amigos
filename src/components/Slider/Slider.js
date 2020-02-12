import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../../assets/images/carousel1.png';
import carousel1Mobile from '../../assets/images/carousel1-mobile.png';
import logo from '../../assets/images/logo-file.png';

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
          <source media="(min-width: 768px)" srcSet={carousel1} />
          <source media="(max-width: 767px)" srcSet={carousel1Mobile} />
          <img src={carousel1} alt="Entre Amigos" />
        </picture>
        <picture>
          <source media="(min-width: 768px)" srcSet={carousel1} />
          <source media="(max-width: 767px)" srcSet={carousel1Mobile} />
          <img src={carousel1} alt="Entre Amigos" />
        </picture>
      </Carousel>
    </div>
  );
}

export default Slider;
