import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { FacultyProvider } from "./Components/Admin/Facultycontex";
function App() {
  return (
    <FacultyProvider>
      <div>
        <Navbar />
        <div>
          <Home></Home>
        </div>
        <Footer />
      </div>
    </FacultyProvider>
  );
}

export default App;
