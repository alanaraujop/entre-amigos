import React from 'react';
import './Events.scss';
import { Circle } from '../../components';
import Background from '../../assets/images/events_parallax.png';

const Events = () => {

  return (
    <div id="Events">
      <div className="main-container" style={{ backgroundImage: `url(${Background})` }}>

      <span className="events-title">Leve a experiência do Entre Amigos para o seu evento</span>

        <div className="strip">
          <span className="main">
            Faça seu evento com a equipe que comandou por décadas a mais famosa casa de comida portuguesa no Rio de janeiro: o saudoso Antiquárius.
          </span>

          <div className="round-boxes">

            <div className="round-box">
              <Circle color="#FF9535" />
              <span className="box-title">Atendimento Personalizado</span>
              <p className="box-text">
                Realizamos cada evento de forma única e personalizada, oferecendo um resultado ajustado e adequado às necessidades de nossos queridos clientes.
              </p>
            </div>

            <div className="round-box">
              <Circle color="#FF8433" />
              <span className="box-title">Menu de Excelência</span>
              <p className="box-text">
                Servimos entradinhas, tais como risoles de camarão, bolinho de bacalhau e etc. Temos os pratos para volante, como bacalhau espiritual, tigelinhas de siri com queijo   gratinado. E o prato principal fica a critério do cliente.
              </p>
            </div>

            <div className="round-box">
              <Circle color="#D96921" />
              <span className="box-title">Qualidade e Conforto</span>
              <p className="box-text">
                Oferecemos garçons, chef de cozinha, ajudantes, e como não poderia faltar: sempre vão estar presentes o maitre Luciano ou Uedson.
                Os pratos são finalizados na casa do cliente. 
                Tudo quentinho com total capricho
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
