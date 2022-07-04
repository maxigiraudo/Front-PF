
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from "./componentes/LandinPage"
import Home from "./componentes/Home";
import Detail from "./componentes/Detail";
import Form from "./componentes/Form";

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

