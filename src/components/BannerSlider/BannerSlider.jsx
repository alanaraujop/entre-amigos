import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './BannerSlider.scss';
import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../../assets/images/p6.jpg';
import carousel2 from '../../assets/images/p4.jpg';
import carousel1Mobile from '../../assets/images/carousel_1_mobile.png';
import carousel2Mobile from '../../assets/images/carousel_2_mobile.png';
import carousel3 from '../../assets/images/corona.jpeg';
import carousel3Mobile from '../../assets/images/corona_mobile.png';
import carousel5 from '../../assets/images/carousel_5.png';
import carousel5Mobile from '../../assets/images/carousel_5_mobile.png';

const BannerSlider = () => {

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

        <div className="carouselItem">

          <picture>
            <source media="(min-width: 900px)" srcSet={carousel3} className="imagem" />
            <source media="(max-width: 901px)" srcSet={carousel3Mobile} />
            <img src={carousel2} alt="Entre Amigos" />
          </picture>
          <div className="campaignContainer">
            <div className="textContainer">
              <h3>Delivery Entre Amigos</h3>
              <p>Duarante a pandemia nossas portas estarão fechadas, mas você pode levar o nosso sabor para sua casa.</p>
            </div>
          </div>

        </div>

        <div className="carouselItem">

          <picture>
            <source media="(min-width: 900px)" srcSet={carousel1} className="imagem" />
            <source media="(max-width: 901px)" srcSet={carousel1Mobile} />
            <img src={carousel1} alt="Entre Amigos" />
          </picture>
          <div className="campaignContainer">
            <div className="textContainer">
              <h3>Tradição e Sabor</h3>
              <p>Aqui você encontra o Arroz de Pato mais tradicional do Rio.</p>
            </div>
          </div>

        </div>

        <div className="carouselItem">

          <picture>
            <source media="(min-width: 900px)" srcSet={carousel2} className="imagem" />
            <source media="(max-width: 901px)" srcSet={carousel2Mobile} />
            <img src={carousel2} alt="Entre Amigos" />
          </picture>
          <div className="campaignContainer">
            <div className="textContainer">
              <h3>Entre Amigos Gastronomia</h3>
              <p>A essência de uma casa enaltecida por muitos e conhecida mudialmente não pode deixar de existir.</p>
            </div>
          </div>

        </div>

        <div className="carouselItem">

          <picture>
            <source media="(min-width: 900px)" srcSet={carousel5} className="imagem" />
            <source media="(max-width: 901px)" srcSet={carousel5Mobile} />
            <img src={carousel2} alt="Entre Amigos" />
          </picture>
          <div className="campaignContainer">
            <div className="textContainer">
              <h3>Entre Amigos Gastronomia</h3>
              <p>A essência de uma casa enaltecida por muitos e conhecida mudialmente não pode deixar de existir.</p>
            </div>
          </div>

        </div>



      </Carousel>
    </div>
  );
}

export default BannerSlider;
