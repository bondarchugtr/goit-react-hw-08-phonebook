import React, { useState, useEffect } from "react";
import { NavLink, useResolvedPath, useMatch, Outlet } from "react-router-dom";
import s from "./NavMenu.module.scss";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selector";

export function Layout() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [activeLinkAuth, setActiveLinkAuth] = useState(true);
  const [activeLinkReg, setActiveLinkReg] = useState(false);

  const handleClickAuth = () => {
    setActiveLinkAuth(true);
    setActiveLinkReg(false);
  };

  const handleClickReg = () => {
    setActiveLinkAuth(false);
    setActiveLinkReg(true);
  };

  return (
    <header>
      <nav>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <div>
            <ul className={s.nav__menu__container}>
              <li className={s.nav__menu__item}>
                <NavLink
                  to="login"
                  className={
                    activeLinkAuth ? s.nav__menu__text__dec : s.nav__menu__text
                  }
                  onClick={handleClickAuth}
                >
                  Authorization
                </NavLink>
              </li>
              <li className={s.nav__menu__item}>
                <NavLink
                  to="register"
                  className={
                    activeLinkReg ? s.nav__menu__text__dec : s.nav__menu__text
                  }
                  onClick={handleClickReg}
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <Outlet />
    </header>
  );
}

export function NoMatch() {
  return (
    <div>
      <h1>Nothing to see here!</h1>
      <p>
        <NavLink to="/">Go to the home page</NavLink>
      </p>
    </div>
  );
}
