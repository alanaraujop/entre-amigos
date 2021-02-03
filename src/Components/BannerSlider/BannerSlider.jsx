import Link from "next/link";
import { useEffect, useState } from "react";
import * as S from "./BannerSliderStyle";

export function BannerSlider({ slides: data }) {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides(data);
  }, [data]);

  return (
    <>
      <S.ContainerCarrousel
        enableAutoPlay={true}
        autoPlaySpeed={5000}
        showArrows={false}
      >
        {slides.map(
          ({ title, description, image, imageMobile, link = "#" }, index) => (
            <Link key={index} href={link}>
              <S.CarrouselItem>
                <S.PictureScenery>
                  <source media="(min-width: 900px)" srcSet={image} />
                  <source media="(max-width: 901px)" srcSet={imageMobile} />
                  <S.ImageCarrousel src={image} alt="Entre Amigos" />
                </S.PictureScenery>
                <S.FloatingDivision>
                  <S.TextContainer>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </S.TextContainer>
                </S.FloatingDivision>
              </S.CarrouselItem>
            </Link>
          )
        )}
      </S.ContainerCarrousel>
    </>
  );
}
