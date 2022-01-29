import s from "./Components/PhoneBook/PhoneBook.module.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Views/NavMenu";
import { NoMatch } from "./Components/Views/NavMenu";
import FormAuthorization from "./Components/AuthorizationHome/AuthorizationHome";
import FormRegistration from "./Components/RegistryHome/RegisteryHome";
function App() {
  return (
    <div className={s.Container}>
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
