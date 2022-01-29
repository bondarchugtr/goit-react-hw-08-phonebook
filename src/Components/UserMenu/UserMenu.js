import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PhoneBook from "../PhoneBook/PhoneBook";
import authSelectors from "../../redux/auth/auth-selector";
import { useLocation } from "react-router";
import { Route, Routes, useNavigate } from "react-router-dom";
import authOperations from "../../redux/auth/auth-operations";
function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  // let location = useLocation();
  // let navigate = useNavigate();
  return (
    <div>
      <div>
        <span>Hello,{name}</span>
      </div>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>

      <div>
        {/* <Routes>
          <Route path="/contacts" element={<PhoneBook />} />
        </Routes> */}
        <PhoneBook />
      </div>
    </div>
  );
}

export default UserMenu;
