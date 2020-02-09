import React from 'react';
import CloseButton from '../CloseButton/CloseButton';

const Modal = props => {

  return (
    <div className="modal">

      <div className="modalHeader">
        <h2>Entre Amigos</h2>
        <CloseButton toggleModal={props.toggleModal} />
      </div>
      <p>
        O nome do restaurante surgiu devido a relação que os integrantes possuem. 
        Como a ideia surgiu para dar continuidade a essa relação, decidimos passar para o mundo a ideia de acolher pessoas.
        Assim nos propomos a tratar todos os que entram em nosso estabelecimento como amigos, dando pessoalidade ao nosso serviço. 
        Entre Amigos por não ser atendimento ao cliente e sim um amigo servindo o outro.
      </p>

      <p>
        Com a agenda de fãs e clientes que não abriram mão de nossos clássicos, passamos a preparar os banquetes em casa, em cozinha improvisada, e servíamos diretamente nos eventos. “Foi uma correria. Usávamos a minha cozinha, em Pedra de Guaratiba, e a do Uedson, em Belford Roxo, e trazíamos tudo para a Zona Sul”, conta Luciano.
      </p>

      <p>
        Na época, apareceram possíveis investidores e pontos para instalação de um espaço físico, mas nada certo. Para dar uma força, os amigos que comandam o Raro (restaurante a quilo na Cobal do Humaitá(, cediam a cozinha de lá para que pudéssemos preparar nossas quitutes. “Isso facilitou muito a nossa vida e começamos a circular por Botafogo”, comenta Uedson.
      </p>

      <p>
        Com a indicação de um cliente amigo, chegamos ao atual local do restaurante, onde funcionava um bar de cervejas, com trilha sonora, poltronas de couro, além de chapéus mexicanos na parede. Somou-se a esse ambiente já cheio de referências, um cardápio português, dando inicio ao Restaurante Entre Amigos. 
      </p>

      <p>
        Com a chegada nesse novo ambiente, agora com o sentimento de lar, começamos apenas com serviço de Delivery, dando continuidade ao que iniciamos em nossas casas, porém agora estabelecendo um ponto de referência. Com pratos clássicos entregues em pirex de vidro, em porções unitárias, familiares ou mesmo para eventos e com preços mais baixos do que os praticados no Leblon. 
      </p>

      <p>
        Com o ambiente mais favorável, aproveitando a feira local, decidimos abrir as portas ao público nos dias de feira, que acontecem aos sábados na rua e passamos a abrir apenas nesse dia, mantendo o serviço Delivery e eventos todos os dias.
      </p>

      <p>
        Com a abertura da casa, anunciamos que aqui é servido “o arroz mais famoso do Rio” e montamos um cardápio com os clássicos em versões mínis, em frações de aproximadamente R$35. “São porções individuais porque é um bar. Além de todos os bolinhos e croquetes. São receitas idênticas às do Antiquárius. Nossos clientes estão adorando”, percebe Luciano.
      </p>

      <p>
        Reunir pessoas em um ambiente familiar e acolhedor, além de nos tornarmos referência em comida portuguesa no Rio de Janeiro, mantendo preço justo e acessível a todos: esse é o principal foco da nossa união.
      </p>
    </div>
  );
}

export default Modal;
