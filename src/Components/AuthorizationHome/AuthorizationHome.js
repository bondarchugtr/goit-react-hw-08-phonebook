import React, { useState } from "react";
import { nanoid } from "nanoid";
const FormAuthorization = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    switch (name) {
      case "name":
        setLogin(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };
  return (
    <>
      <form
      //   onSubmit={handleSubmit}
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
          name="login"
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
