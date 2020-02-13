import React from "react";

const PromotionalCard = props => {
  return (
    <div className="promotionalCard">
      <span>Quer saber mais e receber nossos cardápios pelo Whatsapp?</span>
      <a
        href={`https://api.whatsapp.com/send?phone=${props.whatsappNumber}&text=Olá! Eu gostaria de receber promoções do restaurante Entre Amigos!`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Sim, eu quero!
      </a>
    </div>
  );
};

export default PromotionalCard;
