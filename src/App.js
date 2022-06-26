import React from "react";
import Iran from './components/Iran'
import Canada from './components/Canada'
import America from './components/America'
import Home from "./components/Home";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>

      <header>
        <div className="header"> <h1 >countries</h1>

          <div  ><Link to="/">Home</Link></div>
          <div>    <Link to="/Iran">iran</Link></div>
          <div>  <Link to="/Canada">canada</Link></div>
          <div><Link to="/America">america</Link></div>
        </div>
      </header>





      <Routes>
        <Route path="/Canada" element={<Canada />} >
        </Route>
        <Route path="/Iran" element={<Iran />}   >

        </Route>
        <Route path="/America" element={<America />}>

        </Route>
        <Route path="/" element={<Home />}>

        </Route>
      </Routes>

      <footer className="footer"><span>Thank you for coming to our website</span></footer>


    </Router>
  );
}

export default App;
