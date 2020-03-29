import React from "react";
import "./ContactForm.scss";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { Input, SelectInput, Textarea } from "..";
import * as Yup from "yup";
import { Formik } from "formik";

const formSchemaValues = {
  name: "",
  email: "",
  phone: "",
  subject: "Reservas",
  message: ""
};

const formValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Por favor, informe um nome válido")
    .max(25, "O tamanho máximo são 25 caracteres")
    .required("O campo nome é obrigatório"),
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O campo e-mail é obrigatório"),
  phone: Yup.string()
    .min(14, "Por favor, informe um número válido")
    .max(15, "Por favor, informe um número válido")
    .required("O campo whatsapp é obrigatório"),
  message: Yup.string()
    .min(15, "A mensagem deve ter ao menos 15 caracteres")
    .max(250, "A mensagem deve ter no máximo 250 caracteres")
    .required("O campo mensagem é obrigatório")
});

const ContactForm = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "'Muli', sans-serif"
    }
  });

  const handleLogin = _form => {
    console.log("SUBMIT :: ", _form);
  };

  return (
    <ThemeProvider theme={theme}>
      <Formik
        initialValues={formSchemaValues}
        onSubmit={values => handleLogin(values)}
        validationSchema={formValidationSchema}
      >
        {({ handleSubmit, dirty, isValid }) => (
          <div className="contact-form">
            <p>
              Deseja saber mais sobre nossos serviços ou gostaria de fazer o seu
              evento conosco? Nos mande uma mensagem.
            </p>

            <Input name="name" label="Seu Nome" />
            <Input name="email" label="E-mail" />
            <Input mask={"phone"} name="phone" label="WhatsApp" />

            <SelectInput name="subject" label="Assunto">
              <option value="Reservas">Reservas</option>
              <option vlaue="Delivery">Delivery</option>
              <option value="Eventos">Eventos</option>
              <option value="Dúvidas e sugestões">Dúvidas e sugestões</option>
            </SelectInput>

            <Textarea name="message" label="Escreva aqui sua mensagem" />

            <button
              className={`send-button ${!dirty || !isValid ? "disabled" : ""}`}
              type="submit"
              onClick={dirty && isValid ? handleSubmit : undefined}
              disable={!dirty || !isValid}
            >
              Enviar
            </button>
          </div>
        )}
      </Formik>
    </ThemeProvider>
  );
};

export default ContactForm;
