import BannerSlider from "../src/Components/BannerSlider";
import { useState, useEffect } from "react";
import { getCarousel } from "../src/services/carousel.service";

export default function Home({ slides }) {
  return (
    <div>
      <BannerSlider slides={slides} />
    </div>
  );
}

export async function getStaticProps() {
  const slides = await getCarousel();
  return {
    props: {
      slides,
    },
  };
}
