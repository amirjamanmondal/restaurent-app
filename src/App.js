import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "./components/NavBar";
import Restaurent from "./components/Restaurent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div class="container-fluid">
        <Restaurent />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
