import React, { useState } from "react";
import { NavLink, useResolvedPath, useMatch, Outlet } from "react-router-dom";
import s from "./NavMenu.module.css";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selector";
export function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <NavLink
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </NavLink>
      {match && " (active)"}
    </div>
  );
}

export function Layout() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header>
      <nav className={s.nav__menu__container}>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <>
            <ul className={s.nav__menu__list}>
              <li className={s.nav__menu__item}>
                <CustomLink to="/" className={s.nav__menu__text}>
                  Authorization
                </CustomLink>
              </li>
              <li className={s.nav__menu__item}>
                <CustomLink to="/register" className={s.nav__menu__text}>
                  Register
                </CustomLink>
              </li>
            </ul>
          </>
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
