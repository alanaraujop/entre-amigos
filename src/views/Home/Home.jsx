import React, { useState, useEffect } from 'react';
import './Home.scss';
import { 
  Modal,
  BannerSlider,
  TriadFlex,
  TextPortrait,
  PromotionalCard,
  NewsCarousel,
} from '../../components';
import { whatsappNumber } from '../../info';
import NewsImage1 from '../../assets/images/news/news1.png';
import NewsImage2 from '../../assets/images/news/news2.png';
import NewsImage3 from '../../assets/images/news/news3.png';

const Home = () => {
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    window.scrollTo(0,0);
    // eslint-disable-next-line
  }, []);

  const toggleModal = () => {
		setShowModal(!showModal);
  };

  const news = [
    {
      photo: NewsImage1,
      href: 'https://oglobo.globo.com/ela/gastronomia/equipe-que-comandou-restaurante-antiquarius-no-leblon-por-decadas-abre-boteco-em-botafogo-23722865'
    },
    {
      photo: NewsImage2,
      href: 'https://vejario.abril.com.br/comer-e-beber/classicos-do-antiquarius-e-do-bar-luiz-em-novos-enderecos/'
    },
    {
      photo: NewsImage3,
      href: 'https://blogs.oglobo.globo.com/luciana-froes/post/menu-do-antiquarius-em-botafogo.html'
    }
  ];
    
  const modalContent = () => {

    return (
      <>
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
      </>
    );
  };

  return (
    <div id="Home">
      <BannerSlider />

      {showModal && 
        <Modal 
          toggleModal={toggleModal} 
          content={() => modalContent()}
        />
      }

      <div className="main-container">
        <TriadFlex event={toggleModal} />
      </div>

      <TextPortrait />

      <div className="container">
        <h2>Entre amigos na mídia</h2>
      </div>

      <div className="news-container">
        <NewsCarousel news={news} />
      </div>

      <PromotionalCard whatsappNumber={whatsappNumber}/>
    </div>
  );
};

export default Home;
