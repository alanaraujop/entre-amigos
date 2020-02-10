import React, { useState } from 'react'
import Header from '../../components/Header/Header';
import PromotionalCard from '../../components/PromotionalCard/PromotionalCard';
import Modal from '../../components/Modal/Modal';

import FloatRightImage from '../../assets/images/home1.png';
import FloatLeftImage from '../../assets/images/home2.png';

const Home = () =>{
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	}

	const whatsappNumber = "5521968062489";

	return (
		<>
			<Header />
			{showModal && <Modal toggleModal={toggleModal} />}
			<div className="mainContainer">

				<section>
					<h2 className="container">UMA NOVA HISTÓRIA</h2>

					<p className="container">
						Depois que o restaurante Antiquárius fechou as portas, em maio de 2018, nós, os maítres Uedson Dias e Luciano Fernandes (41 e 31 anos de casa, respectivamente) resolvemos unir forças juntando a equipe de craques: Sebastião de Souza, José Maria Fontes, Luiz Ademar, Francisco Viana e João Batista de Almeida. Com o fechamento da antiga casa, os então funcionários saem sem nada.
					</p>

					<div className="floatRight">
						<img src={FloatRightImage} alt="float" />
					</div>

					<p className="container hideMobile">
						O nome do restaurante surgiu devido a relação que os integrantes possuem. Como a ideia surgiu para dar continuidade a essa relação, decidimos passar para o mundo a ideia de acolher pessoas. Assim nos propomos a tratar todos os que entram em nosso estabelecimento como amigos, dando pessoalidade ao nosso serviço. Entre Amigos por não ser atendimento ao cliente e sim um amigo servindo o outro.
					</p>

					<p className="container compensation hideMobile">
						Com a agenda de fãs e clientes que não abriram mão de nossos clássicos, passamos a preparar os banquetes em casa, em cozinha improvisada, e servíamos diretamente nos eventos. “Foi uma correria. Usávamos a minha cozinha, em Pedra de Guaratiba, e a do Uedson, em Belford Roxo, e trazíamos tudo para a Zona Sul”, conta Luciano.
					</p>

					<div className="clearFloat"></div>


					<section className="left">
						<img src={FloatLeftImage} alt="float" className="floatLeft" />
					</section>

					<section className="right negativeCompensation">

						<h2 className="justifyRight container">ENTRE AMIGOS</h2>

						<p className="container hideMobile">
							Na época, apareceram possíveis investidores e pontos para instalação de um espaço físico, mas nada certo. Para dar uma força, os amigos que comandam o Raro (restaurante a quilo na Cobal do Humaitá), cediam a cozinha de lá para que pudéssemos preparar nossas quitutes. “Isso facilitou muito a nossa vida e começamos a circular por Botafogo”, comenta Uedson.
						</p>

						<p className="container">
							Com a indicação de um cliente amigo, chegamos ao atual local do restaurante, onde funcionava um bar de cervejas, com trilha sonora, poltronas de couro, além de chapéus mexicanos na parede. Somou-se a esse ambiente já cheio de referências, um cardápio português, dando inicio ao Restaurante Entre Amigos. 
						</p>

						<p className="container hideMobile">
							Com a chegada nesse novo ambiente, agora com o sentimento de lar, começamos apenas com serviço de Delivery, dando continuidade ao que iniciamos em nossas casas, porém agora estabelecendo um ponto de referência. Com pratos clássicos entregues em pirex de vidro, em porções unitárias, familiares ou mesmo para eventos e com preços mais baixos do que os praticados no Leblon.
						</p>

						<p className="container hideMobile">
							Com o ambiente mais favorável, aproveitando a feira local, decidimos abrir as portas ao público nos dias de feira, que acontecem aos sábados na rua e passamos a abrir apenas nesse dia, mantendo o serviço Delivery e eventos todos os dias.
						</p>

					</section>
				</section>

				<div className="moreButton" onClick={toggleModal}>
					Conheça mais
				</div>

				<div className="container goalText">
					<p>
						Reunir pessoas em um ambiente familiar e acolhedor, além de nos tornarmos referência em comida portuguesa no Rio de Janeiro, mantendo preço justo e acessível a todos: esse é o principal foco da nossa união.
					</p>
				</div>
			</div>

			<PromotionalCard whatsappNumber={whatsappNumber}/>
		</>
	);
}

export default Home;
