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
import Favorite from "./components/Favorite/Favorite.jsx"
import { useEffect, useState } from "react";




function App() {
  let carritoInicial = JSON.parse(localStorage.getItem("carrito"));
  if (!carritoInicial) {
    carritoInicial = [];
  }
  const [carrito, setCarrito] = useState(carritoInicial);

  useEffect(() => {
    let carritoInicial = JSON.parse(localStorage.getItem("carrito"));
    if (carritoInicial) {
      localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
      localStorage.setItem("carrito", JSON.stringify([]));
    }
  }, [carrito]);

  const agregarCarrito = (e) => {
    setCarrito([...carrito, e]);
  };

  const eliminarCarrito = (id) => {
    const nuevoCarrito = carrito.filter((e) => e.id !== id);
    setCarrito(nuevoCarrito);
  };

  const limpiarCarrito = () => {
    setCarrito([]);
  };

  return (
    <div className="generalApp">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={<Home carrito={carrito} agregarCarrito={agregarCarrito} />}
        />
        <Route path="/detail/:id/:token_address" element={<Detail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route path="/formRegister" element={<FormRegister />} />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              limpiarCarrito={limpiarCarrito}
              eliminarCarrito={eliminarCarrito}
              carrito={carrito}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/favorite" element={<Favorite/>} />
      </Routes>
    </div>
  );
}
export default App;
