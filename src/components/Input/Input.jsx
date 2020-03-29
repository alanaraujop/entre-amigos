import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { masks } from "../../utils/masks";
import { useFormikContext } from "formik";

const Input = props => {
  const { mask, name, label } = props;
  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleBlur
  } = useFormikContext();

  const handleChange = event => {
    const maskedValue = masks[mask || "standard"](event.target.value);
    console.log(maskedValue);
    setFieldValue(name, maskedValue);
  };

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
    <>
      <TextField
        error={touched[name] && errors[name]}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur(name)}
        className={classes.main}
        label={label}
        variant="outlined"
        size="small"
      />
      <span className="error-message">{touched[name] && errors[name]}</span>
    </>
  );
};

export default Input;
