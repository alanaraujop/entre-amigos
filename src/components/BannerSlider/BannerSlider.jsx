import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./BannerSlider.scss";
import { Carousel } from "react-responsive-carousel";
import { getCarousel } from "../../services/carousel.service";

const BannerSlider = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    (async () => {
      const allSlides = await getCarousel();
      setSlides(allSlides);
    })();
  }, []);

  // if (!slides.length) return <div />;

  return (
    <div className="carouselContainer">
      <div className="shadowContainer" />
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5500}
        transitionTime={650}
        stopOnHover={false}
        emulateTouch={true}
        centerMode={true}
        centerSlidePercentage={100}
      >
        {slides.map(
          ({ title, description, image, imageMobile, link = "#" }) => (
            <a href={link} className="carouselItem">
              <picture>
                <source
                  media="(min-width: 900px)"
                  srcSet={image}
                  className="imagem"
                />
                <source media="(max-width: 901px)" srcSet={imageMobile} />
                <img src={image} alt="Entre Amigos" />
              </picture>
              <div className="campaignContainer">
                <div className="textContainer">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            </a>
          )
        )}
      </Carousel>
    </div>
  );
};

export default BannerSlider;
