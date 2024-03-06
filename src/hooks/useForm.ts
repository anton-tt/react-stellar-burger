import { useState, ChangeEvent } from "react";

export default function useForm<T extends {[key: string]: string}>(inputValues:T) {

  const [formValues, setFormValues] = useState(inputValues);
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;
    setFormValues({...formValues, [name]: value});
  };

  return {formValues, handleChange, setFormValues};

}