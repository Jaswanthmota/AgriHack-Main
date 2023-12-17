
import "./index.css";
import Home from "./pages/Home";
import {Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
//import Register from "./pages/Register";
import Aboutus from "./pages/Aboutus";
import Carts from "./pages/Carts";
import R from "./pages/R";
import Register from "./pages/Register";
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/r" element={<R name="sai" />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/carts" element={<Carts />} /> */}
      </Routes>
      <div className="container px-5 pb-5 text-center">
        <div className="row" style={{ height: "40%" }}>
          <h2 className="text-center p-5">
            <img src="./social.png" alt="..." />
          </h2>
          <div className="col">
            <img src="./instagram.gif" alt="..." style={{ width: "40%" }} />
          </div>
          <div className="col">
            <img src="./facebook.gif" alt="..." style={{ width: "40%" }} />
          </div>
          <div className="col">
            <img src="./twitter.gif" alt="..." style={{ width: "40%" }} />
          </div>
        </div>
      </div>
      <footer className="bg-dark text-light text-center p-3 h5">
        Reach us through <br />
        <br />
        Contact : 9876655487 &nbsp;&nbsp; email : test@gmail.com
        <br />
        <br />
        @2022 All Rights reserved
      </footer>
    </div>
  );
}

export default App;
