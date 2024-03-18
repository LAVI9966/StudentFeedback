import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
const Footer = () => {
  return (
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top text-white bg-dark myfooter">
      <div class="col-md-4 d-flex align-items-center">
        <a
          href="/"
          class="mb-3 me-2 mb-md-0 text-white bg-dark text-decoration-none lh-1"
        >
          <svg class="bi" width="30" height="24">
            <use xlink:href="#bootstrap"></use>
          </svg>
        </a>
        <span class="mb-3 mb-md-0 text-white bg-dark">© 2024 Company, Inc</span>
      </div>

      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3">
          <a class="text-white bg-dark" href="#">
            <svg class="bi" width="24" height="24">
              <use xlink:href="#twitter"></use>
            </svg>
          </a>
        </li>
        <li class="ms-3">
          <a class="text-white bg-dark" href="#">
            <svg class="bi" width="24" height="24">
              <use xlink:href="#instagram"></use>
            </svg>
          </a>
        </li>
        <li class="ms-3">
          <a class="text-white bg-dark" href="#">
            <svg class="bi" width="24" height="24">
              <use xlink:href="#facebook"></use>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
