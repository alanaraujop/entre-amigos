export const getPhotos = async (_photosList) => {
  const photosAsync = _photosList.map((img, index) => {
    return new Promise((resolve) => {
      const element = document.createElement("img");
      element.src = img;
      element.onload = () => {
        resolve({
          src: img,
          height: element.naturalHeight,
          width: element.naturalWidth,
        });
      };
    });
  });

  return await photosAsync;
};
