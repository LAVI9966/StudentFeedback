import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import Welcome from "./Components/Welcome.jsx";
import Courselist from "./Components/Course/Courselist.jsx";
import ListFaculty from "./Components/Faculty/ListFaculty.jsx";
import AdminHome from "./Components/Admin/AdminHome.jsx";
import MangageFaculty from "./Components/Admin/MangageFaculty.jsx";
import Feedback from "./Components/Feedback/Feedback.jsx";
import Facultyfeedback from "./Components/Feedback/Facultyfeedback.jsx";
import CourseFeedback from "./Components/Feedback/CourseFeedback.jsx";
import Courserate from "./Components/Rating/Courserate.jsx";
import Facultyrate from "./Components/Rating/Facultyrate.jsx";
import Addcourse from "./Components/Admin/Addcourse.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/courselist",
    element: <Courselist></Courselist>,
  },
  {
    path: "/listfaculty",
    element: <ListFaculty></ListFaculty>,
  },
  {
    path: "/facultyrate/:fc",
    element: <Facultyrate></Facultyrate>,
  },
  {
    path: "/courserate/:cd",
    element: <Courserate></Courserate>,
  },
  {
    path: "/admin",
    element: <AdminHome></AdminHome>,
  },
  {
    path: "/managefaculty",
    element: <MangageFaculty></MangageFaculty>,
  },
  {
    path: "/feedbacks",
    element: <Feedback></Feedback>,
  },
  {
    path: "/feedbacks/coursefeedback",
    element: <CourseFeedback></CourseFeedback>,
  },
  {
    path: "/feedbacks/facultyfeedback",
    element: <Facultyfeedback></Facultyfeedback>,
  },
  {
    path: "/addcourse",
    element: <Addcourse></Addcourse>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/*  */}
  </React.StrictMode>
);
