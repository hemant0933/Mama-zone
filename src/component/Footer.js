import React from "react";
import { Link } from "react-router-dom";
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from 'react-icons/bs';
import newLetter from "../images/newsletter.png";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top d-flex gap-30 align-items-center">
                <img src={newLetter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="footer-links d-flex flex-column">
                <address className="text-white fs-6">
                  Hno : 273 Near St. Paul School,
                  <br />
                  Aburoad, Rajasthan
                  <br />
                  PinCode: 307026
                  <a
                    href="Tel: +91 9166072479"
                    className="mt-4 d-block mb-1 text-white"
                  >
                    +91 9166072479
                  </a>
                  <a
                    href="mailto: hemantkumar0933@gmail.com"
                    className="mt-2 d-block mb-0 text-white"
                  >
                    hemantkumar0933@gmail.com
                  </a>
                  <div className="social_icons d-flex align-items-center gap-30 mt-4">
                    <a href="https://www.linkedin.com/in/hemant-kumar-0a9b69bb/" className="text-white">
                      <BsLinkedin className="fs-4"/>
                    </a>
                    <a href="https://github.com/hemant0933"  className="text-white">
                      <BsGithub className="fs-4"/>
                    </a>
                    <a href="/"  className="text-white">
                      <BsYoutube className="fs-4"/>
                    </a>
                    <a href="https://www.instagram.com/hemant00000000/"  className="text-white">
                     <BsInstagram className="fs-4"/>
                    </a>
                  </div>
                </address>
                {/* <Link className="text-white py-2 mb-1"></Link>
                <Link className="text-white py-2 mb-1"></Link> */}
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy; {new Date().getFullYear()}  Powered by Developer's Corner
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
