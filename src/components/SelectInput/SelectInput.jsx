import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useFormikContext } from "formik";

const SelectInput = props => {
  const { name, label } = props;
  const { values, handleBlur, setFieldValue } = useFormikContext();

  const useStyles = makeStyles({
    main: {
      backgroundColor: "#F9F9F9",
      margin: "8px 0",
      "& label.Mui-focused": {
        color: "#D96921"
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#FFA95C"
        },
        "&:hover fieldset": {
          borderColor: "#FFA95C"
        },
        "&.Mui-focused fieldset": {
          borderColor: "#FFA95C"
        }
      }
    }
  });

  const classes = useStyles();

  return (
    <TextField
      value={values[name]}
      onChange={event => setFieldValue(name, event.target.value)}
      onBlur={handleBlur(name)}
      className={classes.main}
      select
      label={label}
      variant="outlined"
      size="small"
      SelectProps={{
        native: true
      }}
    >
      {props.children}
    </TextField>
  );
};

export default SelectInput;
