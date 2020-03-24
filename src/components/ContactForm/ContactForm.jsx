import React from 'react';
import './ContactForm.scss';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { Input, SelectInput, Textarea } from '..';

const ContactForm = () => {

  const theme = createMuiTheme({
    typography: {
      "fontFamily": "'Muli', sans-serif"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <form className="contact-form">
        <p>
          Deseja saber mais sobre nossos serviços ou gostaria de fazer o seu evento conosco? Nos mande uma mensagem.
        </p>

        <Input label="Seu Nome"/>
        <Input label="E-mail"/>
        <Input label="WhatsApp" phone={true}/>

        <SelectInput label="Assunto">
          <option value="Reservas">Reservas</option>
          <option vlaue="Delivery">Delivery</option>
          <option value="Eventos">Eventos</option>
          <option value="Dúvidas e sugestões">Dúvidas e sugestões</option>
        </SelectInput>
        
        <Textarea label="Escreva aqui sua mensagem"/>

        <button className="send-button">
          Enviar
        </button>
      </form>
    </ThemeProvider>
  );
};

export default ContactForm;
