import React from "react";
// import watch from "../images/watch2.webp";
// import watch1 from "../images/watch3 (1).webp";
import { Link, useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";
import addcartImg from "../images/add-cart.svg";
import view from "../images/view.svg";
import prodcompare from "../images/prodcompare.svg";
import wishlist from "../images/wish.svg";
// import speaker from "../images/laptop.jpg"

const ProductCard3 = (props) => {
    const { grid } = props;
    let location = useLocation();
  
    return (
      <div
        className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wishlist} alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="https://m.media-amazon.com/images/I/71eIMccUT3L.__AC_SX300_SY300_QL70_FMwebp_.jpg"  className="img-fluid ms-5 w-50" alt="product" />
            <img src="https://m.media-amazon.com/images/I/71LGS7+Co+L._AC_SX466_.jpg"  className="img-fluid ms-5 w-50" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Elecder</h6>
            <h5 className="product-title">
            Elecder i45 On-Ear Headphones with Microphone - Foldable Stereo Bass Headphones with No-Tangle 1.5M Cord, 3.5MM Jack, Portable Wired Headphones  </h5>
            <StarRatings
              rating={3}
              name="rating"
              numberOfStars={5}
              starDimension="26px"
              starRatedColor="orange"
            />
            <p className={`description ${grid === 12 ? "d-block":"d-none"}`}>the Samsung Galaxy Watch models can do those things, but some models do it better than others. Some look better than others, too. Samsung has made five iterations of its smartwatch with a few design variations: the latest flagships are the Samsung Galaxy Watch 5</p>
            <p className="price">$16.99</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodcompare} alt="addcart" />
              </Link>
              <Link>
                <img src={view} alt="addcart" />
              </Link>
              <Link>
                <img src={addcartImg} alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    );
  };
  




export default ProductCard3;
