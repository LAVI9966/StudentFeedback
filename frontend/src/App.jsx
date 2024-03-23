import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { FacultyProvider } from "./Components/Admin/Facultycontex";
import { Navigate } from "react-router-dom";
function App() {
  const [user, setuser] = useState(true);
  const login = () => {
    setuser(true);
  };
  const logout = () => {
    setuser(false);
  };
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

// proteted Routes
export const ProotectedRoutes = ({ user, children }) => {
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
};
