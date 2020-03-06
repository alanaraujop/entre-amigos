import React from 'react';
import Gallery from "react-photo-gallery";

const PhotoGrid = props => {
  const { photos, direction } = props;

  return (
    <Gallery
      photos={photos}
      direction={direction}
    />
  );
};

export default PhotoGrid;
