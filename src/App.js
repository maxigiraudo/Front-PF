import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Order from "./components/Order";
import Filter from "./components/Filter";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Detail from "./components/Detail";
import Form from "./components/Form";



function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </div>
    </Router> 
  );
}
export default App;
