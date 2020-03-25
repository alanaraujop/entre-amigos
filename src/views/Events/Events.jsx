import React, { useState, useEffect } from 'react';
import './Events.scss';
import { Circle } from '../../components';
import Background from '../../assets/images/events_parallax.png';
import { Modal } from '../../components';

const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  useEffect(() => {
    console.log(showModal, modalType)
  }, [showModal, modalType]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const returnContentTypes = (contentType) => {

    const types = {
      'personalizedService': 'Realizamos cada evento de forma única e personalizada, oferecendo um resultado ajustado e adequado às necessidades de nossos queridos clientes.',
      'excellenceMenu': 'Servimos entradinhas, tais como risoles de camarão, bolinho de bacalhau e etc. Temos os pratos para volante, como bacalhau espiritual, tigelinhas de siri com queijo gratinado. E o prato principal fica a critério do cliente.',
      'qualityAndConfort': 'Oferecemos garçons, chef de cozinha, ajudantes, e como não poderia faltar: sempre vão estar presentes o maitre Luciano ou Uedson. Os pratos são finalizados na casa do cliente. Tudo quentinho com total capricho.'
    };

    return types[contentType];
  };
  
  return (
    <div id="Events">
      <div className="main-container" style={{ backgroundImage: `url(${Background})` }}>

      <span className="events-title">Leve a experiência do Entre Amigos para o seu evento</span>

        <div className="strip">
          <span className="main">
            Faça seu evento com a equipe que comandou por décadas a mais famosa casa de comida portuguesa no Rio de janeiro: o saudoso Antiquárius.
          </span>

          <div className="round-boxes">
            {showModal &&
              <Modal 
                small={true}
                size={34}
                toggleModal={toggleModal}
                content={returnContentTypes(modalType)}
              />
            }

            <div className="round-box">
              <div className="modal-caller" onClick={() => handleModal('personalizedService')} />

              <Circle color="#FF9535" />

              <span className="box-title">Atendimento Personalizado</span>
              <p className="box-text">
                Realizamos cada evento de forma única e personalizada, oferecendo um resultado ajustado e adequado às necessidades de nossos queridos clientes.
              </p>
            </div>

            <div className="round-box">
              <div className="modal-caller" onClick={() => handleModal('excellenceMenu')} />

              <Circle color="#FF8433" />

              <span className="box-title">Menu de Excelência</span>
              <p className="box-text">
                Servimos entradinhas, tais como risoles de camarão, bolinho de bacalhau e etc. Temos os pratos para volante, como bacalhau espiritual, tigelinhas de siri com queijo   gratinado. E o prato principal fica a critério do cliente.
              </p>
            </div>

            <div className="round-box">
              <div className="modal-caller" onClick={() => handleModal('qualityAndConfort')} />

              <Circle color="#D96921" />

              <span className="box-title">Qualidade e Conforto</span>
              <p className="box-text">
                Oferecemos garçons, chef de cozinha, ajudantes, e como não poderia faltar: sempre vão estar presentes o maitre Luciano ou Uedson.
                Os pratos são finalizados na casa do cliente. 
                Tudo quentinho com total capricho.
              </p>   
            </div>
          </div>

        </div>

        <div className="reservationContainer">
          <p className="reservationText">
            Faça do seu evento com o Entre Amigos Gastronomia um banquete único, repleto de sentimentos, sabores e grandes lembranças da história de uma casa conhecida  mundialmente.
          </p>

          <div className="reservationButton">Reserve agora</div>
        </div>

      </div>
    </div>
  );
};

export default Events;
