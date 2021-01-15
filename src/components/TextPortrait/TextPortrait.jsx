import React from 'react';
import './TextPortrait.scss';
import PortraitBackground from '../../assets/images/home-image.png';

const TextPortrait = props => {

  return (
    <div className="text-portrait">
      <div className="container">

        <img src={PortraitBackground} alt="foto de uma cliente" />

        <div className="text-container title">
          <h2 className="portrait-title">Nossa História</h2>
        </div>

        <div className="text-column">
          <div className="text-container text">
            <p>
              Depois que o restaurante Antiquárius fechou as portas, em maio de 2018, nós, os maítres Uedson Dias e Luciano Fernandes (41 e 31 anos de Antiquárius, respectivamente) resolvemos unir forças em prol de um antigo sonho em comum: abrir o nosso próprio restaurante. 
            </p>
          </div>

          <div className="text-container text">
            <p>
              No projeto liderado por nós, embarcaram a equipe de craques da cozinha: os chefs João Batista de Almeida, Sebastião de Souza, José Maria Fontes, Luiz Ademar e Francisco Viana. Como afirmamos: “Somos o antiquário vivo do Antiquárius”.
            </p>
          </div>

          <div className="text-container text">
            <p>
              De herança da antiga casa que comandávamos, além do aprendizado e experiência de tantos anos, restaram apenas os inúmeros clientes/amigos que ficaram “orfãos”.
            </p>
          </div>

          <div className="text-container text">
            <p>
              Através da indicação de um cliente amigo, chegamos ao local onde hoje funciona o restaurante, que não poderia levar outro nome que não fosse Entre Amigos Gastronomia.
            </p>
          </div>
        </div>


      </div>

    </div>
  );
};

export default TextPortrait;
