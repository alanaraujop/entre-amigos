import BannerSlider from "../src/Components/BannerSlider";
import CloseButton from "../src/Components/CloseButton";
import { ContactForm } from "../src/Components/ContactForm/ContactForm";
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
      <ContactForm />
    </div>
  );
}
