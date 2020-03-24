import React, { useState } from 'react';
import './Home.scss';
import { 
  Modal,
  Slider,
  TriadFlex,
  TextPortrait,
  PromotionalCard
} from '../../components';

const Home = () => {
	const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
		setShowModal(!showModal);
  };
  
	const whatsappNumber = "5521968062489";

  return (
    <div id="Home">
      {showModal && <Modal toggleModal={toggleModal} />}

      <Slider />

      <div className="main-container">
        <TriadFlex event={toggleModal} />
      </div>

      <TextPortrait />

      <PromotionalCard whatsappNumber={whatsappNumber}/>
    </div>
  );
};

export default Home;
