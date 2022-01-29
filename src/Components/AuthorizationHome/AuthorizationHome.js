import React, { useState } from "react";
import { nanoid } from "nanoid";
import authOperations from "../../redux/auth/auth-operations";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selector";
import globalScss from "../../style/utils/global.module.scss";
const FormAuthorization = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    <div className={globalScss.container}>
      {!isLoggedIn && (
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
      )}
    </div>
  );
};

export default FormAuthorization;
