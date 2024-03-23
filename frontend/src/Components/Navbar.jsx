import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const datatomanage = location.state?.datatomanage;

  console.log("nav se  ", datatomanage);
  return (
    <>
      <header class="p-3 text-bg-dark bg-black">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                class="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" class="nav-link px-2 text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href={`/updatesem/${JSON.stringify(datatomanage)}`}
                  class="nav-link px-2 text-white"
                >
                  UpdateSem
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-white">
                  About
                </a>
              </li>
            </ul>
            <div class="text-end">
              <Link to="/login">
                <button type="button" class="btn btn-outline-light me-2">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button type="button" class="btn btn-outline-light">
                  Sign-up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
