import React, { useState, useCallback, useEffect } from "react";

import Carousel, { Modal, ModalGateway } from "react-images";

import "./Gallery.scss";
import { PhotoGrid } from "../../components";
// import { photosList } from "../../_mock/gallery";
import { getPhotos } from "../../services/photos.service";
import Loading from "../../components/Loading/Loading";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getPhotos(setPhotos);
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
    const activeView = currentIndex + 1;
    const totalViews = views.length;

    if (!activeView || !totalViews) return null;
    return (
      <span>
        {activeView} de {totalViews}
      </span>
    );
  };

  return (
    <div id="Gallery">
      {photos.length === 0 && <Loading />}
      <PhotoGrid direction="row" photos={photos} onClick={openLightbox} />
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
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default Gallery;
