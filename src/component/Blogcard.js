import React from "react";
import blogImg1 from "../images/blog-1.jpg";
import { Link } from "react-router-dom";

const Blogcard = () => {
  return (
      <div className="blog-card">
        <div className="card-image">
          <img src={blogImg1} className='img-fluid w-100' alt="blog-card-1"></img>
        </div>
        <div className="blog-content">
          <p className="date">27 Mar, 2022</p>
          <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
          <p className="desc">
            You're Only As Good Last Collection, which is an enormous Pressure. I think is something About..
          </p>
          <Link className="button" to="/">Read More</Link>
        </div>
      </div>
  );
};

export default Blogcard;
