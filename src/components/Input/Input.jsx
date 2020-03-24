import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputMask from 'react-input-mask';

const Input = props => {

  const useStyles = makeStyles({
    main: {
      backgroundColor: '#FDFDFD',
      margin: '8px 0',
      '& label.Mui-focused': {
        color: '#D96921',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#FFA95C',
        },
        '&:hover fieldset': {
          borderColor: '#FFA95C',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#FFA95C',
        },
      },
    }
  });

  const classes = useStyles();

  const phoneMasked = () => {

    return (
      <InputMask
        mask="(99) 99999-9999"
        // value={}
        // onChange={}
      >
        {() => (
            <TextField 
              className={classes.main} 
              id="outlined-basic" 
              label={props.label} 
              variant="outlined"
              size="small"
              inputComponent={props.inputComponent}
            />
          )}
      </InputMask>
    )
  }

  if (props.phone) {
    return phoneMasked();
  }

  return (
    <TextField 
      className={classes.main} 
      id="outlined-basic" 
      label={props.label} 
      variant="outlined"
      size="small"
      inputComponent={props.inputComponent}
    />
  );
};

export default Input;
