import React from "react";
import '../assets/css/footer.css'
const footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container py-5">
                    <div className="row py-3">

                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-uppercase font-weight-bold mb-4">About</h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a href="#" className="text-muted">Home</a></li>
                                <li className="mb-2"><a href="#ourservice" className="text-muted">Our Service</a></li>
                                <li className="mb-2"><a href="#contact" className="text-muted">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            <h5 className="text-uppercase font-weight-bold mb-4">Our Products</h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a href="#" className="text-muted">College & School Uniform</a></li>
                                <li className="mb-2"><a href="#" className="text-muted">Pant</a></li>
                                <li className="mb-2"><a href="#" className="text-muted">Shirt</a></li>
                                <li className="mb-2"><a href="#" className="text-muted">Coat</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            <h5 className="text-uppercase font-weight-bold mb-4">Company</h5>
                            <p className="text-muted mb-4">Our company make your uniform on your request</p>
                            {/* <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a href="#" className="text-muted">Request</a></li>
                                <li className="mb-2"><a href="#" className="text-muted">Register</a></li>
                                <li className="mb-2"><a href="#" className="text-muted">Sitemap</a></li>
                            </ul> */}
                        </div>
                        <div className="col-lg-4 col-md-12 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4">Registered Office Address</h6>
                            <p className="text-muted mb-4">Here , write the complete address of the Registered office address along with telephone number.</p>
                            <ul className="list-inline mt-4">
                                <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fab  fa-2x fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fab fa-2x fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fab fa-2x fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fab fa-2x fa-youtube"></i></a></li>
                                <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fab fa-2x fa-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default footer