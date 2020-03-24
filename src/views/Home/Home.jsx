import React, { useState } from 'react';
import './Home.scss';
import { 
  Modal,
  Slider,
  TriadFlex,
  TextPortrait
} from '../../components';

const Home = () => {
	const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
		setShowModal(!showModal);
	};

  return (
    <div id="Home">
      {showModal && <Modal toggleModal={toggleModal} />}

      <Slider />

      <div className="main-container">
        <TriadFlex event={toggleModal} />
      </div>

      <TextPortrait />
    </div>
  );
};

export default Home;
