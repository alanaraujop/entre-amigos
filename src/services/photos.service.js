export const getPhotos = async (_photosList) => {
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
