import { useState } from "react";

const defaultError = {
  alias: false,
  comment: false,
};

const useForm = (defaultValues) => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultError);

  const onHandleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validate = () => {
    const { alias, comment } = values;
    const alerts = {};

    if (alias !== "" && comment !== "") {
      return true;
    }

    if (alias === "") {
      alerts.alias = true;
    }

    if (comment === "") {
      alerts.comment = true;
    }
    setErrors(alerts);
    return false;
  };

  return {
    values,
    errors,
    validate,
    onHandleChange,
  };
};

export default useForm;
