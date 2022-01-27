import React, { useState } from "react";
import { NavLink, useResolvedPath, useMatch, Outlet } from "react-router-dom";
import s from "./NavMenu.module.css";

function CustomLink({ children, to, ...props }) {
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
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <nav className={s.nav__menu__container}>
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
          {isLogin && (
            <li className={s.nav__menu__item}>
              <CustomLink to="/contacts" className={s.nav__menu__text}>
                Logout
              </CustomLink>
            </li>
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
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
