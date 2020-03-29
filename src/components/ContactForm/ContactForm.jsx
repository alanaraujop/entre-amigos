import React from 'react';
import './ContactForm.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik'; 
import * as Yup from 'yup';
import InputMask from 'react-input-mask';

const ContactForm = () => {

  const formSchemaValues = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  const formValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Por favor, informe um nome válido')
      .max(25, 'O tamanho máximo são 25 caracteres')
      .required('O campo nome é obrigatório'),
    email: Yup.string()
      .email("Insira um e-mail válido")
      .required('O campo e-mail é obrigatório'),
    phone: Yup.string()
      .min(11, 'Por favor, informe um número válido')
      .max(11, 'Por favor, informe um número válido')
      .required('O campo whatsapp é obrigatório'),
    subject: Yup.string()
      .required('O campo assunto é obrigatório'),
    message: Yup.string()
    .min(15, 'A mensagem deve ter ao menos 15 caracteres')
    .max(250, 'A mensagem deve ter no máximo 250 caracteres')
    .required('O campo mensagem é obrigatório')
  });

  const subjectOptions = ['Reservas', 'Delivery', 'Eventos', 'Dúvidas e Sugestões'];

  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <form className="contact-form">
      <Formik
        initialValues={formSchemaValues}
        validationSchema={formValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid, handleChange, handleBlur, value, errors, touched }) => {
          return (
            <div className="contact-form">
              <p>
                Deseja saber mais sobre nossos serviços ou gostaria de fazer o seu evento conosco? Nos mande uma mensagem.
              </p>
              {console.log(errors)}
              <Form>
                <div className={`field-container ${touched.name && errors.name ? 'error' : ''}`}>
                  <Field
                    required
                    id="name"
                    name="name"
                    as="input"
                    className="field"
                  />
                  <label htmlFor="name">Seu nome</label>
                  <span className="error-message"><ErrorMessage name="name" /></span>
                </div>

                <div className={`field-container ${touched.email && errors.email ? 'error' : ''}`}>
                  <Field
                    required
                    id="email"
                    name="email"
                    as="input"
                    className="field"
                  />
                  <label htmlFor="email">E-mail</label>
                  <span className="error-message"><ErrorMessage name="email" /></span>
                </div>

                <div className={`field-container ${touched.phone && errors.phone ? 'error' : ''}`}>
                  <InputMask
                    mask="(99) 99999-9999"
                    // value={value}
                    onChange={handleChange}
                  >
                    {() => (
                      <Field
                        required
                        id="phone"
                        name="phone"
                        as="input"
                        value={value}
                        // onChange={handleChange}
                        className="field"
                      />
                    )}
                    </InputMask>

                  <label htmlFor="phone">WhatsApp</label>
                  <span className="error-message"><ErrorMessage name="phone" /></span>
                </div>

                <div className={`field-container ${touched.subject && errors.subject ? 'error' : ''}`}>
                  <Field
                    required
                    id="subject"
                    name="subject"
                    as="select"
                    className="field"
                  >
                    <option disabled value=""></option>
                    {subjectOptions.map((item, index) => {
                      return (
                        <option value={item} key={index}>{item}</option>
                      )
                    })}
                  </Field>
                  <label htmlFor="subject">Assunto</label>
                  <span className="error-message"><ErrorMessage name="subject" /></span>
                </div>

                <div className={`field-container ${touched.message && errors.message ? 'error' : ''}`}>
                  <Field
                    required
                    id="message"
                    name="message"
                    as="textarea"
                    className="field"
                    rows="10"
                  />
                  <label htmlFor="message">Escreva aqui sua ensagem</label>
                  <span className="error-message"><ErrorMessage name="message" /></span>
                </div>
                
                <button
                  type="submit"
                  className={`send-button ${!dirty || !isValid ? 'disabled' : ''}`}
                  disabled={!dirty || !isValid}
                >
                  Enviar
                </button>
          
              </Form>
            </div>
          )
        }}
      </Formik>
    </form>
  );
};

export default ContactForm;
