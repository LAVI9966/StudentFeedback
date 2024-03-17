import { createContext, useContext } from "react";
import axios from "axios";
const FacultyContext = createContext();

const FacultyProvider = ({ children }) => {
  return (
    <FacultyContext.Provider value={fetch}>{children}</FacultyContext.Provider>
  );
};

export { FacultyContext, FacultyProvider };
