import BannerSlider from "../src/Components/BannerSlider";
import CloseButton from "../src/Components/CloseButton";
import Footer from "../src/Components/Footer";
import Header from "../src/Components/Header";
import { getCarousel } from "../src/services/carousel.service";

export async function getStaticProps() {
  const slides = await getCarousel();
  return {
    props: {
      slides,
    },
  };
}
export default function Home({ slides }) {
  return (
    <div>
      <Header />
      <BannerSlider slides={slides} />
      <CloseButton />
      <Footer />
    </div>
  );
}
