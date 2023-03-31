import React from 'react';
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";
// import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
       <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign up" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Sign Up</h3>
                <form action="" className="d=flex flex-column gap-15">
                  <div>
                  <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                  />
                  </div>
                  <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                  </div>
                  <div className="mt-2">
                  <input
                    type="tel"
                    name="Mobile"
                    placeholder="Mobile Number"
                    className="form-control"
                  />
                  </div>
                  <div className="mt-2">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                  </div>
                  <div>
                        <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                        <button  className="button border-0">Sign Up</button>
                        </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
