import { useState, ChangeEvent } from "react";

export default function useForm(inputValues: {[key: string]: string}) {

  const [formValues, setFormValues] = useState(inputValues);
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;
    setFormValues({...formValues, [name]: value});
  };

  return {formValues, handleChange, setFormValues};

}