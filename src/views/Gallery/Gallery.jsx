import React, { useState, useCallback, useEffect } from 'react';
import './Gallery.scss';
// import gallery1 from '../../assets/images/gallery/gallery1.png';
// import gallery2 from '../../assets/images/gallery/gallery2.png';
// import gallery5 from '../../assets/images/gallery/gallery5.png';
// import gallery6 from '../../assets/images/gallery/gallery6.png';
// import gallery7 from '../../assets/images/gallery/gallery7.png';
// import gallery8 from '../../assets/images/gallery/gallery8.png';
// import gallery9 from '../../assets/images/gallery/gallery9.png';
import { PhotoGrid } from '../../components';
import Carousel, { Modal, ModalGateway } from "react-images";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const CustomModalFooter = ({ currentIndex, views }) => {
    const activeView = currentIndex + 1
    const totalViews = views.length

    if (!activeView || !totalViews) return null
    return (
      <span>
        {activeView} de {totalViews}
      </span>
    );
  };

  // const photos = [
  //   {
  //     src: gallery1,
  //     width: 3,
  //     height: 4,
  //   },
  //   {
  //     src: gallery2,
  //     width: 4,
  //     height: 3
  //   },
  //   {
  //     src: gallery5,
  //     width: 4,
  //     height: 3
  //   },
  //   {
  //     src: gallery6,
  //     width: 4,
  //     height: 3
  //   },
  //   {
  //     src: gallery7,
  //     width: 4,
  //     height: 2
  //   },
  //   {
  //     src: gallery8,
  //     width: 3,
  //     height: 4
  //   },
  //   {
  //     src: gallery9,
  //     width: 4,
  //     height: 3
  //   }
  // ];

  const photos = new Array(32).fill("").map((item, index) => ({
    src: require(`../../assets/images/gallery/gallery${index}.jpeg`),
    width: 4,
    height: 3
  }))

  return (
    <div id="Gallery">
      <PhotoGrid
        direction="row"
        photos={photos}
        onClick={openLightbox}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal
            onClose={closeLightbox}
            allowFullscreen={false}
            isFullscreen={false}
            closeOnBackdropClick={true}
            closeOnEsc={true}
          >
            <Carousel
              components={{ FooterCount: CustomModalFooter }}
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default Gallery;
