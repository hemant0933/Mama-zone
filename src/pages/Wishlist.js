import React from 'react';
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";
import cross from "../images/cross.svg"
import watch from "../images/watch2.webp";
import watch2 from "../images/watch3 (1).webp";

const Wishlist = () => {
  return (
    <>
       <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <div className='wishlist-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                        <img src= {cross} className='position-absolute cross img-fluid' alt=""/>
                        <div className='wishlist-card-image'>
                            <img src={watch} className="img-fluid w-100" alt="watch"/>
                        </div>
                        <div className='py-3 px-3'>
                                <h5 className='title'>SAMSUNG Watch 4, 44mmSuper AMOLED </h5>
                                <h6 className='price'>$ 158.42</h6>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                        <img src= {cross} className='position-absolute cross img-fluid' alt=""/>
                        <div className='wishlist-card-image'>
                            <img src={watch2} className="img-fluid w-100" alt="watch"/>
                        </div>
                        <div className='py-3 px-3'>
                                <h5 className='title'>SAMSUNG Watch 4, 44mmSuper AMOLED </h5>
                                <h6 className='price'>$ 158.42</h6>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                        <img src= {cross} className='position-absolute cross img-fluid' alt=""/>
                        <div className='wishlist-card-image'>
                            <img src={watch} className="img-fluid w-100" alt="watch"/>
                        </div>
                        <div className='py-3 px-3'>
                                <h5 className='title'>SAMSUNG Watch 4, 44mmSuper AMOLED </h5>
                                <h6 className='price'>$ 158.42</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </>
  );
}

export default Wishlist;
