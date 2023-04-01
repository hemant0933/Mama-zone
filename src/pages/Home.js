import React from "react";
import { Link } from "react-router-dom";
import cameraimg from "../images/camera.jpg";
import tvimg from "../images/tv.jpg";
import speakerimg from "../images/speaker.jpg";
import gamepad from "../images/gamepad (1).webp";
import headphoneimg from "../images/headphone.jpg";
import Accimg from "../images/acc.jpg";
import homeapp from "../images/homeapp.jpg";
import laptop from "../images/laptop.jpg";

import service from "../images/service.png";
import service2 from "../images/service-02.png";
import service3 from "../images/service-03.png";
import service4 from "../images/service-04.png";
import service5 from "../images/service-05.png";
import mainBanner from "../images/main-banner.jpg";
import mainBanner2 from "../images/main-banner-1.jpg";
import smallBanner1 from "../images/catbanner-01.jpg";
import smallBanner2 from "../images/catbanner-02.jpg";
import smallBanner3 from "../images/catbanner-03.jpg";
import smallBanner4 from "../images/catbanner-04.jpg";

import Marquee from "react-fast-marquee";

import brand1 from "../images/brand-01.png";
import brand2 from "../images/brand-02.png";
import brand3 from "../images/brand-03.png";
import brand4 from "../images/brand-04.png";
import brand5 from "../images/brand-05.png";
import brand6 from "../images/brand-06.png";
import brand7 from "../images/brand-07.png";
import brand8 from "../images/brand-08.png";
import Blogcard from "../component/Blogcard";
import ProductCard from "../component/ProductCard";
import Specialproducts from "../component/Specialproducts";
import famous1 from "../images/watch.jpg";
import famous2 from "../images/macbook.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
            
               <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <div className="main-banner position-relative">
                <img
                  src={mainBanner}
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo.
                  </p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div> </SwiperSlide>
        <SwiperSlide>
          
         
                
                <div className="main-banner position-relative">
                <img
                  src={mainBanner2}
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo.
                  </p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div> 
                
                
                </SwiperSlide>
      </Swiper>

            </div>
            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src={smallBanner1}
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>Laptop Max</h5>
                    <p>
                      From $1699.00 <br />
                      or $64.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={smallBanner3}
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy IPad Air</h5>
                    <p>
                      From $599.00
                      <br /> or $49.91/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={smallBanner2}
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF</h4>
                    <h5>Smartwatch 7</h5>
                    <p>
                      Shop the latest band <br />
                      styles and colors.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={smallBanner4}
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      High-fidelity playback &<br />
                      ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src={service} alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service2} alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service3} alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service4} alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service5} alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={cameraimg} alt="Camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={tvimg} alt="tv" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>HeadPhones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={headphoneimg} alt="headphone" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Accessories</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={Accimg} alt="acc" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Home Appliances</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={homeapp} alt="homeapp" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Bluetooth Speaker</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={speakerimg} alt="" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Laptops</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={laptop} alt="" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={gamepad} alt="gamePad" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3 bg-white ">
              <div className="famous-card position-relative p-2">
                <div className="famous-content">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p className="text-dark">From $399 or $16.62/mo. for 24 mo.*</p>
                </div>
                <div>
                <img src={famous1} className="img-fluid" alt="famous" />
                </div>
              </div>
            </div>
            <div className="col-3 bg-white">
              <div className="famous-card position-relative p-2">
                <div className="famous-content">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p className="text-dark">From $399 or $16.62/mo. for 24 mo.*</p>
                </div>
                <div>
                <img src={famous1} className="img-fluid" alt="famous" />
                </div>
              </div>
            </div>
            <div className="col-3 bg-white">
              <div className="famous-card position-relative p-2">
                <div className="famous-content">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Apple 2020 Macbook Air</h6>
                  <p className="text-dark">From $1,999 or $3,662/mo. for 24 mo.*</p>
                </div>
                <div className="py-5">
                <img src={famous2} className="img-fluid" alt="famous" />
                </div>
              </div>
            </div>
            <div className="col-3 bg-white">
              <div className="famous-card position-relative p-2">
                <div className="famous-content">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p className="text-dark">From $399 or $16.62/mo. for 24 mo.*</p>
                </div>
                <div>
                <img src={famous1} className="img-fluid" alt="famous" />
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-home-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <Specialproducts />
            <Specialproducts />
            <Specialproducts />
            <Specialproducts />
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>

            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src={brand1} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand2} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand3} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand4} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand5} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand6} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand7} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand8} alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
            <Blogcard />
            </div>
            <div className="col-3">
            <Blogcard />
            </div>
            <div className="col-3">
            <Blogcard />
            </div>
            <div className="col-3">
            <Blogcard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
