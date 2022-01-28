import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";

const FormRegistration = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = (el) => {
    el.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName("");
    setPassword("");
    setEmail("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        //   className={s.Forma}
      >
        <label
        // className={s.nameinput}
        />
        login
        <input
          //   className={s.Forma__input}
          id={nanoid()}
          type="text"
          name="name"
          value={name}
          required
          onChange={handleChange}
        />
        <label
        // className={s.nameinput}
        />
        Password
        <input
          //   className={s.Forma__input}
          id={nanoid()}
          type="text"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />
        <label />
        Email
        <input
          //   className={s.Forma__input}
          id={nanoid()}
          type="text"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />
        <button
          type="submit"
          // className={s.Button__form}
        >
          Registry
        </button>
      </form>
    </>
  );
};

export default FormRegistration;
