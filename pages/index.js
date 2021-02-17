import BannerSlider from "../src/Components/BannerSlider";
import CloseButton from "../src/Components/CloseButton";
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
      <BannerSlider slides={slides} />
      <CloseButton />
    </div>
  );
}
