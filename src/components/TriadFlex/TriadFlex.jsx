import React, { useState } from 'react';
import './TriadFlex.scss';
import Wave from '../Vectors/Wave';
import { Redirect } from 'react-router-dom';

const TriadFlex = () => {
  const [redirect, setRedirect] = useState(false);

  return (
    <div className="triad-flex">
      {redirect && <Redirect to="/eventos" />}

      <div className="box">
        <span className="box-title">Nossa Missão</span>
        <Wave />
        <p className="box-text">
          Reunir pessoas em um ambiente familiar e acolhedor, além de nos tornarmos referência em comida portuguesa no Rio de Janeiro, mantendo preço justo e acessível a todos: esse é o principal foco da nossa união.
        </p>
      </div>

      <div className="box">
        <span className="box-title">Nosso Clima</span>
        <Wave />
        <p className="box-text">
          Decidimos passar para o mundo a ideia de acolher pessoas. Nos propomos a tratar todos os que entram em nosso estabelecimento como amigos, dando pessoalidade ao nosso serviço. Entre Amigos por não ser atendimento ao cliente e sim um amigo servindo o outro.
        </p>
      </div>

      <div className="box">
        <span className="box-title">Nossos Serviços</span>
        <Wave />
        <p className="box-text">
          Com pratos clássicos entregues em pirex de vidro, você pode levar nossa gastronomia para sua casa através do nosso delivery, ou até mesmo para o seu evento. 
        </p>
        <span className="link-text" onClick={() => setRedirect(true)}>Saiba mais aqui.</span>
      </div>

    </div>
  );
};

export default TriadFlex;
