import React from 'react';
import ScrollspyNav from "react-scrollspy-nav";
import '../assets/css/Navbar.css'
const Navbar = () => {
    const navLinkAction = () => {
        document.getElementById("nav-menu").classNameList.remove("show");
    };
    return (
        <>
            <div className="main-header mb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand text-center" href="/" ><img src="image/Nav-braned.png" alt="" width="170px" /></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justif content-between" id="navbarSupportedContent">
                                    <ul className="navbar-nav mar-5 m-0">
                                        <ScrollspyNav
                                            className="nav__menu"
                                            scrollTargetIds={["home", "ourservice", "contact",]}
                                            offset={-50}
                                            activeNavClass="active"
                                            scrollDuration="150">
                                            <ul className="nav__list">
                                                <li className="nav__item">
                                                    <a href="#home" className="nav__link active" onClick={navLinkAction}>HOME</a>
                                                </li>
                                                <li className="nav__item">
                                                    <a href="#ourservice" className="nav__link" onClick={navLinkAction}>OUR SERVICE</a>
                                                </li>
                                                <li className="nav__item">
                                                    <a href="#contact" className="nav__link" onClick={navLinkAction}>Contact</a>
                                                </li>
                                            </ul>
                                        </ScrollspyNav>
                                    </ul>
                                    <div className="contact-number">
                                        <div className="contact-icon d-flex align-items-center">
                                            <i className="fa-brands fa-whatsapp mx-1"></i>
                                            <i className="fa-solid fa-phone head-icon mx-1"></i>
                                            <span className="phone-number"> +91 8989757974</span>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar