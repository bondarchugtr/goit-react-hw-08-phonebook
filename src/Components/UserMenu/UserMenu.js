import React from "react";
import { useSelector, useDispatch } from "react-redux";
import authSelectors from "../../redux/auth/auth-selector";
import authOperations from "../../redux/auth/auth-operations";
import styleButton from "../PhoneContacts/PhoneContacts.module.scss";
import s from "./UserMenu.module.scss";
function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  return (
    <>
      <div className={s.UserMenu}>
        <div>
          <span className={s.user__text}>Hello, {name}</span>
        </div>
        <button
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
          className={styleButton.Button}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default UserMenu;
