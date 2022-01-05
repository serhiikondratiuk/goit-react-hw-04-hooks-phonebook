import { useState } from "react";
import s from "./ContactForm.module.css";

function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    if (name === "name") setName(value);
    if (name === "number") setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number });
    setName("");
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.wrapper}>
        <input
          className={s.input}
          type="text"
          value={name}
          onChange={handleInputChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={s.label}>Name</label>
      </div>
      <div className={s.wrapper}>
        <input
          className={s.input}
          type="tel"
          value={number}
          onChange={handleInputChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <label className={s.label}>Number</label>
      </div>
      <button className={s.button} type="submit">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Add contact
      </button>
    </form>
  );
}

export default Form;
