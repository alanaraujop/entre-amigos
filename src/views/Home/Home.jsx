import React, { useEffect } from 'react';
import './Home.scss';
import { 
  BannerSlider,
  TriadFlex,
  TextPortrait,
  PromotionalCard,
  NewsCarousel
} from '../../components';
import { whatsappNumber } from '../../info';
import NewsImage1 from '../../assets/images/news/news1.png';
import NewsImage2 from '../../assets/images/news/news2.png';
import NewsImage3 from '../../assets/images/news/news3.png';
import NewsImage4 from '../../assets/images/news/news4.jpg';

const Home = props => {

  useEffect(() => {
    window.scrollTo(0,0);
    // eslint-disable-next-line
  }, []);

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
    },
    {
      photo: NewsImage4,
      href: 'https://www.viagemegastronomia.com.br/gastronomia/delivery/5-hotspots-gastronomicos-pedir-casa-rio-de-janeiro/'
    }
  ];
  
  return (
    <div id="Home">
      <BannerSlider />

      <div className="main-container">
        <TriadFlex />
      </div>

      <TextPortrait />

      <div className="news-container">
        <div className="container">
          <h2>Entre Amigos na mídia</h2>
        </div>

        <NewsCarousel news={news.reverse()} />

        <PromotionalCard whatsappNumber={whatsappNumber}/>
      </div>
    </div>
  );
};

export default Home;
