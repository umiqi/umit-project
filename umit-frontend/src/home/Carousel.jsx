import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <Slider {...settings}>
            <div className="position-relative">
                <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(53, 53, 53, .7)' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8 text-center">
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome To WooDY</h5>
                                <h1 className="display-3 text-white animated slideInDown mb-4">Best Carpenter & Craftsman Services</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-relative">
                <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(53, 53, 53, .7)' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8 text-center">
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome To WooDY</h5>
                                <h1 className="display-3 text-white animated slideInDown mb-4">Best Carpenter & Craftsman Services</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-relative">
                <img className="img-fluid" src="img/carousel-3.jpg" alt="" />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(53, 53, 53, .7)' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8 text-center">
                                <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome To WooDY</h5>
                                <h1 className="display-3 text-white animated slideInDown mb-4">Best Carpenter & Craftsman Services</h1>
                                <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Carousel;
