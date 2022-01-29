import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Views/NavMenu";
import { NoMatch } from "./Components/Views/NavMenu";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authOperations from "./redux/auth/auth-operations";
import FormAuthorization from "./Components/AuthorizationHome/AuthorizationHome";
import FormRegistration from "./Components/RegistryHome/RegisteryHome";
import s from "./Components/PhoneBook/PhoneBook.module.scss";
import globalScss from "./style/utils/global.module.scss";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <div className={`${s.Container} ${globalScss.container}`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/authorization" element={<FormAuthorization />} />
          <Route path="/register" element={<FormRegistration />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
