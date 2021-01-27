import config from "../config/constants";

const API_URL = config.API_URL;

export const getMenu = async (setPhotos) => {
  const data = await fetch(`${API_URL}menu/`)
    .then((res) => res.json())
    .then((menu) => menu);

  return data;
};
