import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { Form } from './styles';
import Input from '../Input';
import SelectInput from '../SelectInput';
import Textarea from '../Textarea';

const ContactForm = () => {

  const theme = createMuiTheme({
    typography: {
      "fontFamily": "'Muli', sans-serif"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Form>
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

        <button
          className="sendButton"
        >
          Enviar
        </button>
      </Form>
    </ThemeProvider>
  );
};

export default ContactForm;
