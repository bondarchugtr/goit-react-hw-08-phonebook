import React, { useState } from "react";
import { nanoid } from "nanoid";
import authOperations from "../../redux/auth/auth-operations";
import { useDispatch } from "react-redux";

const FormAuthorization = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };
  const reset = () => {
    setEmail("");
    setPassword("");
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
          name="email"
          value={email}
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
        <button
          type="submit"
          // className={s.Button__form}
        >
          Login
        </button>
      </form>
    </>
  );
};

export default FormAuthorization;
