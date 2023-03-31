import React, { useState } from "react";
import BreadCrumb from "../component/BreadCrumb";
// import { Helmet } from "react-helmet";
import Meta from "../component/Meta";
import headphoneimg from "../images/headphone.jpg";
import gr from "../images/gr.svg";
import gr1 from "../images/gr2.svg";
import gr2 from "../images/gr3.svg";
import gr3 from "../images/gr4.svg";
import ProductCard from "../component/ProductCard";
import StarRatings from "react-star-ratings";
import ProductCard2 from "../component/ProductCard2";
import ProductCard3 from "../component/ProductCard3";
import ProductCard4 from "../component/ProductCard4";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div className="">
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        Out of Stock(0)
                      </label>
                    </div>
                  </div>

                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>

                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <div className="d-flex flex-wrap">
                      <ul className=" colors ps-0">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>

                  <h5 className="sub-title">Sizes</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        M (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input py-1"
                        value=""
                        id="color-4"
                      />
                      <label className="form-check-label" htmlFor="color-4">
                        XL (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input py-1"
                        value=""
                        id="color-3"
                      />
                      <label className="form-check-label" htmlFor="color-3">
                        L (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Products Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-3 px-3">
                      Headphones
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-3 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-3 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-3 px-3">
                      Wire
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-3 px-3">
                      Tablet
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-3 px-3">
                      Power Banks
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products d-flex mb-3">
                    <div className="w-50">
                      <img
                        src={headphoneimg}
                        className="img-fluid"
                        alt="random"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphones bulk 10 pack multi coloured for students
                      </h5>
                      <StarRatings
                        rating={3}
                        name="rating"
                        numberOfStars={5}
                        starDimension="15px"
                        // starHoverColor="red"
                        starRatedColor="orange"
                      />
                      <b>$ 100</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src={headphoneimg}
                        className="img-fluid"
                        alt="random"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphones bulk 10 pack multi coloured for students
                      </h5>
                      <StarRatings
                        rating={3}
                        name="rating"
                        numberOfStars={5}
                        starDimension="15px"
                        // starHoverColor="red"
                        starRatedColor="orange"
                      />
                      <b>$100</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By :
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected>
                        Best selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="created-descending">
                        Date, new to old
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src={gr}
                        className="d-block img-fluid"
                        alt="gr-svg"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src={gr1}
                        className="d-block img-fluid"
                        alt="gr-svg"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src={gr2}
                        className="d-block img-fluid"
                        alt="gr-svg"
                      />
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src={gr3}
                        className="d-block img-fluid"
                        alt="gr-svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                  <ProductCard2 grid={grid} />
                  <ProductCard3 grid={grid} />
                  <ProductCard4 grid={grid} />
                  <ProductCard2 grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard2 grid={grid} />
                  <ProductCard3 grid={grid} />
                  <ProductCard4 grid={grid} />
                  <ProductCard2 grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard2 grid={grid} />
                  <ProductCard3 grid={grid} />
                  <ProductCard4 grid={grid} />
                  <ProductCard2 grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
