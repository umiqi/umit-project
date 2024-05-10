import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-white ${isScrolled ? 'fixed-top' : ''}`}>
            <div className="container">
                <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary">WooDY</h2>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/home" className="nav-item nav-link active">Home</Link>
                        <Link to="/About" className="nav-item nav-link">About</Link>
                        <Link to="/Service" className="nav-item nav-link">Service</Link>
                        <Link to="/Project" className="nav-item nav-link">Project</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu fade-up m-0">
                                <Link to="/Feature" className="dropdown-item">Feature</Link>
                                <Link to="/Quote" className="dropdown-item">Free Quote</Link>
                                <Link to="/Team" className="dropdown-item">Our Team</Link>
                                <Link to="/Testimonial" className="dropdown-item">Testimonial</Link>
                                <Link to="/NotFoundPage" className="dropdown-item">404 Page</Link>
                            </div>
                        </div>
                        <Link to="/Contact" className="nav-item nav-link">Contact</Link>
                    </div>
                    <Link to="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3"></i></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
