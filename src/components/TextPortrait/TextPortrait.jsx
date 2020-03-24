import React from 'react';
import './TextPortrait.scss';
import PortraitBackground from '../../assets/images/f7.jpg';

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
              Depois que o restaurante Antiquárius fechou as portas, em maio de 2018, nós, os maítres Uedson Dias e Luciano Fernandes (41 e 31 anos de Antiquárius, respectivamente) resolvemos unir forças juntando a equipe de craques: Sebastião de Souza, José Maria Fontes, Luiz Ademar, Francisco Viana e João Batista de Almeida. 
            </p>
          </div>

          <div className="text-container text">
            <p>
              Com o fechamento da antiga casa, nós saímos sem nada. “De herança, tínhamos duas coisas: a nossa amizade e o aprendizado de tantos anos no comando do restaurante. Somos o antiquário vivo do Antiquárius”.
            </p>
          </div>

          <div className="text-container text">
            <p>
              Com a indicação de um cliente amigo, chegamos ao atual local do restaurante, onde funcionava um bar de cervejas, com trilha sonora, poltronas de couro, além de chapéus mexicanos na parede. Somou-se a esse ambiente já cheio de referências, um cardápio português, dando inicio ao Restaurante Entre Amigos.
            </p>
          </div>
        </div>


      </div>

    </div>
  );
};

export default TextPortrait;
