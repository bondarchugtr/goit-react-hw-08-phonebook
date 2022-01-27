import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";

const FormRegistration = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (el) => {
    el.preventDefault();
    dispatch(authOperations.register({ name, password, email }));
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
          onChange={handleInputChange}
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
          value={name}
          required
          onChange={handleInputChange}
        />
        <label />
        Email
        <input
          //   className={s.Forma__input}
          id={nanoid()}
          type="text"
          name="email"
          value={name}
          required
          onChange={handleInputChange}
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
