import PhoneBook from "./Components/PhoneBook/PhoneBook";
import s from "./Components/PhoneBook/PhoneBook.module.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Menu/MenuNav";
function App() {
  return (
    <div className={s.Container}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="contacts/" element={<PhoneBook />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
