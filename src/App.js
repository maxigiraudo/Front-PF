import "./App.css";

import { Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import About from "./components/About/About";
import FormRegister from "./components/FormRegister/FormRegister";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Login from "./components/Login/Login.jsx";

function App() {
  return (
    <div className="generalApp">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id/:token_address" element={<Detail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route path="/formRegister" element={<FormRegister />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
