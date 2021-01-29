import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ContainerCarrousel,
  ImageCarrousel,
  CarrouselItem,
  FloatingDivision,
  PictureScenery,
  TextContainer,
} from "./BannerSliderStyle";

export function BannerSlider({ slides: data }) {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides(data);
  }, [data]);

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
