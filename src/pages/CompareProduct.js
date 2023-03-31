import React from 'react';
import BreadCrumb from "../component/BreadCrumb";
import Meta from "../component/Meta";
import cross from "../images/cross.svg"
import Color from "../component/color"

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className='compare-product-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src={cross} className="position-absolute cross img-fluid" alt='watch2'/>
                            <div className='product-card-image  d-flex justify-content-center'>
                                <img src="https://rukminim1.flixcart.com/image/416/416/jx257680/tablet/4/s/v/honor-jdn2-al00hn-original-imafhhyfhhmyfjwg.jpeg?q=70" className="img-fluid" style={{width:"205px",height:"250px"}} alt="watch"/>
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>
                                    Honor Pad 8 - 4 GB RAM 128GB ROM 12 Inch With Wi-Fi Only Tablet
                                </h5>
                                <h6 className='price mb-3 mt-3'>$ 100</h6>
                               <div>
                               <div className='product-detail'>
                                <h5>Brand:</h5>
                                <p>Honor </p>
                               </div>
                               <div className='product-detail'>
                                <h5>Screen Size:</h5>
                                <p>12 inch</p>
                               </div>
                               <div className='product-detail'>
                                <h5>Connectivity:</h5>
                                <p>Wifi Only</p>
                               </div>
                               <div className='product-detail'>
                                <h5>Color:</h5>
                                <Color/>
                               </div>
                               <div className='product-detail'>
                                <h5>Ram & Rom:</h5>
                                <div className='d-flex gap-10'>
                                    <p>4 Gb</p>
                                    <p>128 Gb</p>
                                </div>
                               </div>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src={cross} className="position-absolute cross img-fluid" alt='watch2'/>
                            <div className='product-card-image d-flex justify-content-center'>
                                <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/tablet/r/v/e/-original-imagj72vv3gydgem.jpeg?q=70" className="img-fluid" style={{width:"205px",height:"250px"}} alt="watch"/>
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>
                                APPLE iPad Pro (4th Gen) 256 GB ROM 11.0 inch with Wi-Fi Only
                                </h5>
                                <h6 className='price mb-3 mt-3'>$ 2000</h6>
                               <div>
                               <div className='product-detail'>
                                <h5>Brand:</h5>
                                <p>Apple </p>
                               </div>
                               <div className='product-detail'>
                                <h5>Screen Size:</h5>
                                <p>11.0 inch</p>
                               </div>
                               <div className='product-detail'>
                                <h5>Connectivity:</h5>
                                <p>Wifi Only</p>
                               </div>
                               <div className='product-detail'>
                                <h5>Color:</h5>
                                <Color/>
                               </div>
                               <div className='product-detail'>
                                <h5>Rom:</h5>
                                <div className='d-flex gap-10'>
                                    <p>256 Gb</p>
                                </div>
                               </div>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src={cross} className="position-absolute cross img-fluid" alt='watch2'/>
                            <div className='product-card-image d-flex justify-content-center'>
                                <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/tablet/d/d/n/-original-imaggp4gtdze4hfd.jpeg?q=70" className="img-fluid" style={{width:"205px",height:"250px"}} alt="watch"/>
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>
                                REDMI Pad 6 GB RAM 128 GB ROM 10.61 Inch with Wi-Fi Only Tablet
                                </h5>
                                <h6 className='price mb-3 mt-3'>$ 100</h6>
                               <div>
                               <div className='product-detail'>
                                <h5>Brand:</h5>
                                <p>Redmi </p>
                               </div>
                               <div className='product-detail'>
                                <h5>Screen Size:</h5>
                                <p>10.61 inch</p>
                               </div>
                               <div className='product-detail'>
                                <h5>Connectivity:</h5>
                                <p>Wifi Only</p>
                               </div>
                               <div className='product-detail'>
                                <h5>Color:</h5>
                                <Color/>
                               </div>
                               <div className='product-detail'>
                                <h5>Ram & Rom:</h5>
                                <div className='d-flex gap-10'>
                                    <p>6 Gb</p>
                                    <p>128 Gb</p>
                                </div>
                               </div>
                               </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
      </div>
    </>
  );
}

export default CompareProduct;
