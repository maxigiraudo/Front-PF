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
import Favorite from "./components/Favorite/Favorite";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import MyCollections from "./components/MyCollections/MyCollections";
import Wallet from "./components/Wallet/Wallet";

function App() {
  let favoritoInicial = JSON.parse(localStorage.getItem("favorito"));
  if (!favoritoInicial) {
    favoritoInicial = [];
  }

  const [favorito, setFavorito] = useState(favoritoInicial);

  useEffect(() => {
    let favoritoInicial = JSON.parse(localStorage.getItem("favorito"));
    if (favoritoInicial) {
      localStorage.setItem("favorito", JSON.stringify(favorito));
    } else {
      localStorage.setItem("favorito", JSON.stringify([]));
    }
  }, [favorito]);

  const agregarFavorito = (e) => {
    const copiaFavorito = favorito;
    const nuevoFavorito = favorito.filter((item) => item.id !== e.id);
    setFavorito([...nuevoFavorito, e]);

    if (copiaFavorito.length !== nuevoFavorito.length) {
      Swal.fire("", "Item already exist in the favorite", "error");
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Item added to favorite succefully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const eliminarFavorito = (id) => {
    const nuevoFavorito = favorito.filter((e) => e.id !== id);
    setFavorito(nuevoFavorito);
  };
  console.log(favorito);
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
    const copiaCarrito = carrito;
    const nuevoCarrito = carrito.filter((item) => item.id !== e.id);
    setCarrito([...nuevoCarrito, e]);

    if (copiaCarrito.length !== nuevoCarrito.length) {
      Swal.fire("", "Item already exist in the cart", "error");
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Item added to cart succefully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
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
          element={
            <Home
              carrito={carrito}
              agregarCarrito={agregarCarrito}
              agregarFavorito={agregarFavorito}
              favorito={favorito}
            />
          }
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
        <Route
          path="/favorite"
          element={
            <Favorite eliminarFavorito={eliminarFavorito} favorito={favorito} />
          }
        />
        <Route path="/mycollections" element={<MyCollections />} />
      </Routes>
    </div>
  );
}
export default App;
