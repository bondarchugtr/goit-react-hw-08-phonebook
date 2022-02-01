import React, { useState } from "react";
import { nanoid } from "nanoid";
import authOperations from "../../redux/auth/auth-operations";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selector";
import s from "../Forma/InputPhonebook.module.scss";

const FormAuthorization = () => {
  const dispatch = useDispatch();

  const [contact, setContact] = useState({
    email: "",
    password: "",
  });
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const handleChange = ({ target: { name, value } }) => {
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (el) => {
    el.preventDefault();
    dispatch(authOperations.logIn({ ...contact }));
    reset();
  };
  const reset = () => {
    setContact({
      email: "",
      password: "",
    });
  };
  return (
    <div className="">
      {!isLoggedIn && (
        <form onSubmit={handleSubmit} className={s.Forma}>
          <label />
          <span>login</span>
          <input
            className={s.Forma__input}
            id={nanoid()}
            type="text"
            name="email"
            value={contact.email}
            required
            onChange={handleChange}
          />
          <label />
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
          <button type="submit" className={s.Button__form}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default FormAuthorization;
