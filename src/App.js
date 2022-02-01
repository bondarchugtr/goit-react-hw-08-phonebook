import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./Components/Views/NavMenu";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authOperations from "./redux/auth/auth-operations";
import FormAuthorization from "./Components/AuthorizationHome/AuthorizationHome";
import FormRegistration from "./Components/RegistryHome/RegisteryHome";
import globalScss from "./style/utils/global.module.scss";
import PrivateRoute from "./Components/Route/PrivateRoute";
import PublicRoute from "./Components/Route/PublicRoute";
import PhoneBook from "./Components/PhoneBook/PhoneBook";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <div className={globalScss.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route
            path="login"
            element={
              <PublicRoute
                element={<FormAuthorization />}
                redirectTo="/contacts"
                restricted
              />
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute
                element={<FormRegistration />}
                redirectTo="/contacts"
                restricted
              />
            }
          />
          <Route
            path="contacts/*"
            element={
              <PrivateRoute element={<PhoneBook />} redirectTo="/login" />
            }
          />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
