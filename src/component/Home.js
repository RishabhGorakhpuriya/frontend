import React from 'react'
// import About from './About'
import Contact from './Contact'
import '../assets/css/Home.css'
import OurService from './OurService'
const Home = () => {
    return (
        <>
            <div className="banner-slider mt-5" id='home'>
                <div className="">
                    <div className="col-md-12">
                        <div id="demo" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                            </div>

                            <div className="carousel-inner mt-5" id="first">
                                <div className="carousel-item active">
                                    <picture>
                                        <source media="(max-width : 620px)" srcSet='image/M-Banner1.jpeg' className="d-block" />
                                        <img src="image/Banner1.jpeg" alt="" className="d-block" width="100%" />
                                    </picture>
                                </div>
                                <div className="carousel-item">
                                    <picture>
                                        <source media='(max-width : 620px)' srcSet='image/M-Banner2.jpeg' className="d-block" />
                                        <img src="image/Banner2.jpeg" alt="uniform" className="d-block" width="100%" />
                                    </picture>
                                </div>
                                <div className="carousel-item">
                                    <picture>
                                        <source media='(max-width : 620px)' srcSet='image/M-Banner3.jpeg' className="d-block" />
                                        <img src="image/Banner3.jpeg" alt="Banner" className="d-block" width="100%" />
                                    </picture>
                                </div>
                                <div className="carousel-item">
                                    <picture>
                                        <source media='(max-width : 620px)' srcSet='image/M-Banner6.jpeg' className="d-block" />
                                        <img src="image/uniform-mobile.jpg" alt="Banner" className="d-block" width="100%" />
                                    </picture>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                <span><i class="fa-solid fa-chevron-left fa-2x"></i></span>

                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                {/* <span className="carousel-control-next-icon"></span> */}
                                <i class="fa-solid fa-chevron-right fa-2x" width="40px"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <OurService />
            </div>
            <div>
                <Contact />
            </div>
        </>
    )
}

export default Home

