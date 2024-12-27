// import { FiSearch } from 'react-icons/fi';

import { useState } from "react";
import style from "./Form.module.css"

const Form = ({onSubmit}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue);
      setInputValue('');
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        Add
      </button>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
