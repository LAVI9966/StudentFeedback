import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="text-white d-flex flex-wrap justify-content-between align-items-center py-3 border-top text-white bg-dark">
      <div className="text-white col-md-4 d-flex align-items-center text-white">
        <a
          Href="/"
          className="text-white mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1 text-white"
        >
          <svg className="text-white bi" width="30" height="24">
            <use xlink:Href="#bootstrap"></use>
          </svg>
        </a>
        <span className="text-white mb-3 mb-md-0 text-white">
          © 2022 Company, Inc
        </span>
      </div>

      <ul className="text-white nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="text-white ms-2 me-3">
          <a className="icon text-white" text-white Href="#">
            <FaTwitter />
          </a>
        </li>
        <li className="text-white ms-2 me-3">
          <a className="icon text-white " Href="#">
            <CiInstagram />
          </a>
        </li>
        <li className="text-white ms-2 me-3">
          <a className="icon text-white " Href="#">
            <CiFacebook />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
