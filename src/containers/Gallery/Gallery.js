import React from 'react';
import { GalleryContainer } from './styles';
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';
import gallery1 from '../../assets/images/gallery/gallery1.png';
import gallery2 from '../../assets/images/gallery/gallery2.png';
import gallery3 from '../../assets/images/gallery/gallery3.png';
import gallery4 from '../../assets/images/gallery/gallery4.png';
import gallery5 from '../../assets/images/gallery/gallery5.png';
import gallery6 from '../../assets/images/gallery/gallery6.png';
import gallery7 from '../../assets/images/gallery/gallery7.png';
import gallery8 from '../../assets/images/gallery/gallery8.png';
import gallery9 from '../../assets/images/gallery/gallery9.png';

const Gallery = () => {

  const photos = [
    {
      src: gallery1,
      width: 3,
      height: 4
    },
    {
      src: gallery2,
      width: 4,
      height: 3
    },
    {
      src: gallery3,
      width: 3,
      height: 2
    },
    {
      src: gallery4,
      width: 4,
      height: 3
    },
    {
      src: gallery5,
      width: 4,
      height: 3
    },
    {
      src: gallery6,
      width: 4,
      height: 3
    },
    {
      src: gallery7,
      width: 4,
      height: 2
    },
    {
      src: gallery8,
      width: 3,
      height: 4
    },
    {
      src: gallery9,
      width: 4,
      height: 3
    }
  ];

  return (
    <GalleryContainer>
      <PhotoGrid 
        direction="row"
        photos={photos}
      />
    </GalleryContainer>
  );
};

export default Gallery;
