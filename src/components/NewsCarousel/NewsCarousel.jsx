import React, { useState, useEffect } from 'react';
import './NewsCarousel.scss';
import Carousel from "nuka-carousel";

const NewsCarousel = props => {
  const { news } = props;
  const [viewportWidth, setViewportWidth] = useState(0);

  const isClient = typeof window !== 'undefined';

  const updateWindowDimensions = () => {
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {

    if (isClient) {
      window.addEventListener('resize', updateWindowDimensions);
      setTimeout(() => {
        updateWindowDimensions();
      }, 500);
    }

    return () => {
      if (isClient) window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }, [])

  useEffect(() => {
    console.log(viewportWidth)
  }, [viewportWidth]);

  const handleShow = () => {
    if (viewportWidth <= 400) {
      return 1.35
    }
    else if (viewportWidth <= 450) {
      return 1.45
    }
    else if (viewportWidth <= 500) {
      return 1.65
    }
    else if (viewportWidth <= 540) {
      return 1.85
    }
    else if (viewportWidth <= 600) {
      return 1.95
    }
    else if (viewportWidth <= 630) {
      return 2.1
    }
    else if (viewportWidth <= 680) {
      return 2.25
    }
    else if (viewportWidth <= 768) {
      return 2.55
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
      return 6.5
    }
  };

  return (
    <div className="news-carousel-container">
      <Carousel
        cellSpacing={12}
        transitionMode="scroll"
        slidesToShow={handleShow()}
        slidesToScroll="auto"
        withoutControls={true}
        scrollMode="remainder"
        disableEdgeSwiping={true}
        swiping={true}
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
