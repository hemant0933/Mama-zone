import React from "react";
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";
import { BiHome } from "react-icons/bi";
import { BsInfoSquare } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1575.175706644617!2d72.77809700225042!3d24.46724953714793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395d28a3624b29c7%3A0x13f1ec55861e1570!2sSt.%20Paul&#39;s%20Senior%20Secondary%20School%2C%20Abu%20Road!5e1!3m2!1sen!2sin!4v1680111423869!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        className="form-control"
                        type="tel"
                        placeholder="Mobile number"
                      />
                    </div>
                    <div>
                      <textarea
                        className="form-control w-100"
                        cols="30"
                        rows="5"
                        name=""
                        id=""
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex align-items-center gap-15 ">
                      <BiHome  className="fs-5"/>
                      <address className="mb-0">House no. 252 Near St. Paul School Aburoad,Rajasthan</address>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                      <IoCallOutline className="fs-5"/>
                      <a href="tel: +91 9166072479">+91 9166072479</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                       <AiOutlineMail className="fs-5"/>
                       <a href="mailto:hemantkumar0933@gmail.com">hemantkumar0933@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <BsInfoSquare  className="fs-5"/>
                        <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
