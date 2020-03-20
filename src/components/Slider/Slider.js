import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ShadowContainer, CampaignContainer } from './styles';
import carousel1 from '../../assets/images/carousel_1.png';
import carousel1Mobile from '../../assets/images/carousel_1_mobile.png';
import carousel2 from '../../assets/images/carousel_2.png';
import carousel2Mobile from '../../assets/images/carousel_2_mobile.png';

const Slider = () => {

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

        <div className="carouselItem">

          <picture>
            <source media="(min-width: 768px)" srcSet={carousel1} className="imagem" />
            <source media="(max-width: 767px)" srcSet={carousel1Mobile} />
            <img src={carousel1} alt="Entre Amigos" />
          </picture>
          <CampaignContainer>
            <div className="textContainer">
              <h3>Tradição e Sabor</h3>
              <p>Aqui você encontra o Arroz de Pato mais tradicional do Rio.</p>
            </div>
          </CampaignContainer>

        </div>

        <div className="carouselItem">

          <picture>
            <source media="(min-width: 768px)" srcSet={carousel2} className="imagem" />
            <source media="(max-width: 767px)" srcSet={carousel2Mobile} />
            <img src={carousel2} alt="Entre Amigos" />
          </picture>
          <CampaignContainer>
            <div className="textContainer">
              <h3>Entre Amigos Gastronomia</h3>
              <p>A essência de uma casa enaltecida por muitos e conhecida mudialmente não pode deixar de existir.</p>
            </div>
          </CampaignContainer>

        </div>

      </Carousel>
    </div>
  );
}

export default Slider;
