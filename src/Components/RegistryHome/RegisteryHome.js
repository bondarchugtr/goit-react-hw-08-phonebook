import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import s from "../Forma/InputPhonebook.module.scss";
const FormRegistration = () => {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  const [contact, setContact] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setContact((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (el) => {
    el.preventDefault();
    dispatch(authOperations.register({ ...contact }));
    reset();
  };

  const reset = () => {
    setContact({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.Forma}>
        <label className={s.nameinput} />
        <span>login</span>
        <input
          className={s.Forma__input}
          id={nanoid()}
          type="text"
          name="name"
          value={contact.name}
          required
          onChange={handleChange}
        />
        <label className={s.nameinput} />
        <span>Password</span>

        <input
          className={s.Forma__input}
          id={nanoid()}
          type="text"
          name="password"
          value={contact.password}
          required
          onChange={handleChange}
        />
        <label />
        <span>Email</span>

        <input
          className={s.Forma__input}
          id={nanoid()}
          type="text"
          name="email"
          value={contact.email}
          required
          onChange={handleChange}
        />
        <button type="submit" className={s.Button__form}>
          Registry
        </button>
      </form>
    </>
  );
};

export default FormRegistration;
