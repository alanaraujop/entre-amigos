import React from 'react';
import './PromotionalCard.scss';

const PromotionalCard = props => {
  return (
    <div className="promotionalCard">
      <div className="container">
        <span>Gostaria de receber nosso cardápio pelo whatsapp?</span>
        <a
          href={`https://api.whatsapp.com/send?phone=${props.whatsappNumber}&text=Olá! Eu gostaria de receber informações do restaurante Entre Amigos!`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Sim, eu quero!
        </a>
      </div>
    </div>
  );
};

export default PromotionalCard;
