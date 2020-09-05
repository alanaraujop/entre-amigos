import config from "../config/constants";

const API_URL = config.API_URL;

export const getPhotos = async (setPhotos) => {
  fetch(`${API_URL}gallery/`)
    .then((res) => res.json())
    .then((photosList) => {
      getPhotosRatio(photosList).then((photosAsync) => {
        photosAsync.forEach(async (item) => {
          const photo = await item;
          setPhotos && setPhotos((prev) => [...prev, photo]);
        });
        return photosAsync;
      });
    });
};

const getPhotosRatio = async (_photosList) => {
  const photosAsync = _photosList.map(({ src }, index) => {
    return new Promise((resolve) => {
      const element = document.createElement("img");
      element.src = src;
      element.onload = () => {
        resolve({
          src,
          height: element.naturalHeight,
          width: element.naturalWidth,
        });
      };
    });
  });

  return await photosAsync;
};
