import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PhoneBook from "../PhoneBook/PhoneBook";
import authSelectors from "../../redux/auth/auth-selector";
import { Route, Routes } from "react-router-dom";
import { CustomLink } from "../Views/NavMenu";
import authOperations from "../../redux/auth/auth-operations";

function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <span>Hello,{name}</span>
      </div>
      {/* <CustomLink to="/" className={""}> */}
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
      {/* </CustomLink> */}
      <div>
        <Routes>
          <Route path="/contacts" element={<PhoneBook />} />
        </Routes>
      </div>
    </div>
  );
}

export default UserMenu;
