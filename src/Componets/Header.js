import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

function Header(props) {
    return (
        <div className="main-header">
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                        <NavLink to={"#"} >
                            <div>
                                <Button close />
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <a href="index.html">
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </a>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li>
                                {/* <a className="nav-link scrollto active" href="index.html">Home</a> */}
                                {/* <Navlink exact className="nav-link scrollto active" to={"/"}>Home</Navlink>  */}
                                <NavLink exact className="nav-link scrollto" to={"/"}>Home</NavLink>
                            </li>
                            <li>
                                {/* <a className="nav-link scrollto" href="./pages/departments.html">Departments</a> */}
                                <NavLink exact className="nav-link scrollto" to={"/Department"}>Department</NavLink>
                            </li>
                            <li>
                                {/* <a className="nav-link scrollto" href="./pages/doctors.html">Doctors</a> */}
                                <NavLink exact className="nav-link scrollto" to={"/Doctors"}>Doctors</NavLink>
                            </li>
                            <li>
                                {/* <a className="nav-link scrollto " href="./pages/about.html">About</a> */}
                                <NavLink exact className="nav-link scrollto" to={"/About"}>About</NavLink>
                            </li>
                            <li>
                                {/* <a className="nav-link scrollto" href="./pages/contact.html">Contact</a> */}
                                <NavLink exact className="nav-link scrollto" to={"/Contact"}>Contact</NavLink>
                            </li>
                            <li>
                                {/* <a className="nav-link scrollto" href="./pages/contact.html">Contact</a> */}
                                <NavLink exact className="nav-link scrollto" to={"/More"}>More</NavLink>
                            </li>
                            <li>
                            <NavLink exact className="nav-link scrollto" to={"/Form"}>Doctor Form</NavLink>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    {/* <a href="./pages/appointment.html" className="appointment-btn scrollto">
                        <span className="d-none d-md-inline">Make an</span>
                        Appointment</a> */}


                    
                        <NavLink exact className="appointment-btn scrollto" to={"/Form"}>
                            {/* <span className="d-none d-md-inline">Make an</span> */}
                        Doctor</NavLink>
                    <a href="#" className="appointment-btn scrollto">
                        <span className="d-none d-md-inline">Login/ Signup</span>
                    </a>
                </div>
            </header>
        </div>

    );
}

export default Header;