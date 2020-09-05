import config from "../config/constants";

const API_URL = config.API_URL;

export const getCarousel = async (setPhotos) => {
  const data = await fetch(`${API_URL}carousel/`)
    .then((res) => res.json())
    .then((carouselList) => carouselList);

  return data;
};
