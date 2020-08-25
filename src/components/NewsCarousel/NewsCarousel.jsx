import React, { useState, useEffect } from 'react';
import './NewsCarousel.scss';
import Carousel from "nuka-carousel";
import { useLocation } from 'react-router-dom';

const NewsCarousel = props => {
  const { news } = props;
  const [viewportWidth, setViewportWidth] = useState(0);
  const location = useLocation();
  const pathname = location.pathname;

  const updateWindowDimensions = () => {
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {

    if (pathname === '/') {
      window.addEventListener('resize', updateWindowDimensions);
      setTimeout(() => {
        updateWindowDimensions();
      }, 500);
    }

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // console.log(viewportWidth)
  }, [viewportWidth]);

  const handleShow = () => {
    if (viewportWidth <= 340) {
      return 1.65
    }
    else if (viewportWidth <= 360) {
      return 1.85
    }
    else if (viewportWidth <= 380) {
      return 1.95
    }
    else if (viewportWidth <= 400) {
      return 2.05
    }
    else if (viewportWidth <= 450) {
      return 2.25
    }
    else if (viewportWidth <= 500) {
      return 2.35
    }
    else if (viewportWidth <= 540) {
      return 2.55
    }
    else if (viewportWidth <= 600) {
      return 2.75
    }
    else if (viewportWidth <= 640) {
      return 3.1
    }
    else if (viewportWidth <= 680) {
      return 2.1
    }
    else if (viewportWidth <= 768) {
      return 2.35
    }
    else if (viewportWidth <= 820) {
      return 2.75
    }
    else if (viewportWidth <= 900) {
      return 3.1
    }
    else if (viewportWidth <= 1024) {
      return 3.35
    }
    else if (viewportWidth <= 1160) {
      return 3.65
    }
    else if (viewportWidth <= 1280) {
      return 3.9
    }
    else if (viewportWidth <= 1366) {
      return 4.5
    }
    else if (viewportWidth <= 1600) {
      return 5.1
    }
    else {
      return 5.5
    }
  };

  return (
    <div className="news-carousel-container">
      <Carousel
        cellSpacing={viewportWidth > 640 ? 24 : 6}
        transitionMode="scroll"
        slidesToShow={handleShow()}
        slidesToScroll="auto"
        withoutControls={true}
        scrollMode="remainder"
        disableEdgeSwiping={true}
        swiping={true}
        // cellAlign="center"
      >   
        {!!news && news.map((item, index) => {
          return (
            <a 
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.photo} alt="Imagem de notícia sobre o Entre Amigos Gastronomia" />
            </a>
          )
        })}
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
