import { useState } from "react";

function ValidationForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValidity, setisValidity] = useState(false);

  function handleChange(evt) {
    setValues({ ...values, [evt.target.name]: evt.target.value });
    setErrors({ ...errors, [evt.target.name]: evt.target.validationMessage });
    setisValidity(evt.target.closest("form").checkValidity());
  }

  function resetForm() {
    setValues({});
    setErrors({});
    setisValidity(false);
  }
  return {
    values,
    errors,
    isValidity,
    handleChange,
    resetForm,
  };
}

export default ValidationForm;
