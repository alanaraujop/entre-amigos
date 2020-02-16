import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from './styles';

const ContactForm = props => {

  const useStyles = makeStyles({
    root: {
      backgroundColor: '#FDFDFD',
      margin: '8px 0',
      '& label.Mui-focused': {
        color: '#D96921',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#D96921',
        },
        '&:hover fieldset': {
          borderColor: '#D96921',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#D96921',
        },
      },
    },
    textarea: {
      '.MuiTextField-root': {
        height: '300px'
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
        },
      },
    }
  });

  const classes = useStyles();

  return (
    <Form>
      <p>
        Deseja saber mais sobre nossos serviços ou gostaria de fazer o seu evento conosco? Nos mande uma mensagem.
      </p>
      <TextField className={classes.root} id="outlined-basic" label="Seu Nome" variant="outlined" />
      <TextField className={classes.root} id="outlined-basic" label="E-mail" variant="outlined" />
      <TextField className={classes.root} id="outlined-basic" label="WhatsApp" variant="outlined" />
      <TextField
        className={classes.root}
        select
        label="Assunto"
        variant="outlined"
      >
        <MenuItem>
          Teste
        </MenuItem>
      </TextField>
      <TextField className={classes.textarea} id="outlined-basic" label="WhatsApp" variant="outlined" multiline={true}/>
    </Form>
  );
};

export default ContactForm;
