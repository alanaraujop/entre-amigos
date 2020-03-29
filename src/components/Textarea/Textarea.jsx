import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useFormikContext } from "formik";

const Textarea = props => {
  const { name, label } = props;
  const {
    values,
    errors,
    touched,
    handleBlur,
    setFieldValue
  } = useFormikContext();

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
        className={classes.main}
        value={values[name]}
        onChange={event => setFieldValue(name, event.target.value)}
        onBlur={handleBlur(name)}
        label={label}
        variant="outlined"
        size="small"
        multiline={true}
        rows={8}
      />
      <span className="error-message">{touched[name] && errors[name]}</span>
    </>
  );
};

export default Textarea;
