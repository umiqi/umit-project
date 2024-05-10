import React from 'react';

const Feature = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: '60px', height: '60px' }}>
                                <i className="fa fa-user-check fa-2x text-primary"></i>
                            </div>
                            <h1 className="display-1 text-light mb-0">01</h1>
                        </div>
                        <h5>Creative Designers</h5>
                    </div>
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: '60px', height: '60px' }}>
                                <i className="fa fa-check fa-2x text-primary"></i>
                            </div>
                            <h1 className="display-1 text-light mb-0">02</h1>
                        </div>
                        <h5>Quality Products</h5>
                    </div>
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: '60px', height: '60px' }}>
                                <i className="fa fa-drafting-compass fa-2x text-primary"></i>
                            </div>
                            <h1 className="display-1 text-light mb-0">03</h1>
                        </div>
                        <h5>Free Consultation</h5>
                    </div>
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: '60px', height: '60px' }}>
                                <i className="fa fa-headphones fa-2x text-primary"></i>
                            </div>
                            <h1 className="display-1 text-light mb-0">04</h1>
                        </div>
                        <h5>Customer Support</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;
