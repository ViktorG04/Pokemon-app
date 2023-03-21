import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "./views/Favorites";
import Principal from "./views/Principal";
import Page404 from "./views/Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
