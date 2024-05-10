import React from 'react';

const ServiceItem = ({ imgSrc, title, description }) => {
    return (
        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item">
                <div className="overflow-hidden">
                    <img className="img-fluid" src={imgSrc} alt="" />
                </div>
                <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">{title}</h4>
                    <p>{description}</p>
                    <a className="fw-medium" href="">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                </div>
            </div>
        </div>
    );
};

const Service = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="section-title text-center">
                    <h1 className="display-5 mb-5">Our Services</h1>
                </div>
                <div className="row g-4">
                    <ServiceItem
                        imgSrc="img/service-1.jpg"
                        title="General Carpentry"
                        description="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam."
                    />
                    <ServiceItem
                        imgSrc="img/service-2.jpg"
                        title="Furniture Manufacturing"
                        description="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam."
                    />
                    <ServiceItem
                        imgSrc="img/service-3.jpg"
                        title="Furniture Remodeling"
                        description="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam."
                    />
                    <ServiceItem
                        imgSrc="img/service-4.jpg"
                        title="Wooden Floor"
                        description="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam."
                    />
                    <ServiceItem
                        imgSrc="img/service-5.jpg"
                        title="Wooden Furniture"
                        description="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam."
                    />
                    <ServiceItem
                        imgSrc="img/service-6.jpg"
                        title="Custom Work"
                        description="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam."
                    />
                </div>
            </div>
        </div>
    );
};

export default Service;
