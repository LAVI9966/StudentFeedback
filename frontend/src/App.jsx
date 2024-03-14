import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
function App() {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="content">
          <Home></Home>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
