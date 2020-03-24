import React from 'react';
import Gallery from "react-photo-gallery";

const PhotoGrid = props => {
  const { photos, direction, onClick } = props;

  return (
    <Gallery
      photos={photos}
      direction={direction}
      onClick={onClick}
    />
  );
};

export default PhotoGrid;
