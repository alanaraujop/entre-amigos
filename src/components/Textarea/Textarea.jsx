import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const Textarea = props => {

  const useStyles = makeStyles({
    main: {
      backgroundColor: '#F9F9F9',
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

  return (
    <TextField 
      className={classes.main} 
      id="outlined-basic" 
      label={props.label} 
      variant="outlined"
      size="small"
      multiline={true} 
      rows={8}
    />
  );
};

export default Textarea;
