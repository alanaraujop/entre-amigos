import React from 'react';
import MapLocation from '../../components/MapLocation';
import OpensAt from '../../components/OpensAt';
import ContactForm from '../../components/ContactForm';

const Contact = () => {

  const locationURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.61735681159965!2d-43.186883844017146!3d-22.954730465430693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fe48a90778f%3A0x3024635ee6287eed!2sR.%20Paulo%20Barreto%2C%2064a%20-%20Botafogo%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022280-010!5e0!3m2!1spt-BR!2sbr!4v1581859721523!5m2!1spt-BR!2sbr";

  const info = "Funcionamos de sexta à domingo, das 19h às 00:00h.";

  return (
    <>
      <ContactForm />
      <MapLocation location={locationURL} />
      <OpensAt info={info} />
    </>
  );
};

export default Contact;
