import { useState, useEffect } from "react";
import { getCarousel } from "../../services/carousel.service";
import Link from "next/link";
import {
  ContainerCarrousel,
  ImageCarrousel,
  CarrouselItem,
  FloatingDivision,
  PictureScenery,
  TextContainer,
} from "./styles";

export default function BannerSlider() {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    async function getDataCarousel() {
      const allSlides = await getCarousel();
      setSlides(allSlides);
    }
    getDataCarousel();
  }, []);

  return (
    <>
      <ContainerCarrousel
        enableAutoPlay={true}
        autoPlaySpeed={5000}
        showArrows={false}
      >
        {slides.map(
          ({ title, description, image, imageMobile, link = "#" }, index) => (
            <Link key={index} href={link}>
              <CarrouselItem>
                <PictureScenery>
                  <source media="(min-width: 900px)" srcSet={image} />
                  <source media="(max-width: 901px)" srcSet={imageMobile} />
                  <ImageCarrousel src={image} alt="Entre Amigos" />
                </PictureScenery>
                <FloatingDivision>
                  <TextContainer>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </TextContainer>
                </FloatingDivision>
              </CarrouselItem>
            </Link>
          )
        )}
      </ContainerCarrousel>
    </>
  );
}
