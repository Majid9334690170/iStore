import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
    
    <section className="hero hero-normal">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="hero__categories">
                        <div className="hero__categories__all">
                            <i className="fa fa-bars"></i>
                            <span>All Grocery</span>
                        </div>
                        <ul>
                            <li><Link to="/vegetable">Vegetables</Link></li>
                            <li><Link to="/fruits">Fruits </Link></li>
                            <li><Link to="/cake">Original Cake</Link></li>
                            <li><Link to="/drink">Soft Drink</Link></li>
                            <li><Link to="/dryfruits">DryFruits</Link></li>
                            {/* <li><Link to="#">Fastfood</Link></li>
                            <li><Link to="#">Fresh Onion</Link></li>
                            <li><Link to="#">Papayaya & Crisps</Link></li>
                            <li><Link to="#">Oatmeal</Link></li>
                            <li><Link to="#">Fresh Bananas</Link></li> */}
                        </ul>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="hero__search">
                        <div className="hero__search__form">
                            <form action="#">
                                <div className="hero__search__categories">
                                    All Categories
                                    <span className="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder="What do yo u need?"/>
                                <button type="submit" className="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="hero__search__phone__text">
                                <h5>+91 9334690170</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Hero Section End -->

    <!-- Breadcrumb Section Begin --> */}
    <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>Contact Us</h2>
                        <div className="breadcrumb__option">
                            <Link to="/">Home</Link>
                            <span>Contact Us</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End -->

    <!-- Contact Section Begin --> */}
    <section className="contact spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div className="contact__widget">
                        <span className="icon_phone"></span>
                        <h4>Phone</h4>
                        <p>+91 9334690170</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div className="contact__widget">
                        <span className="icon_pin_alt"></span>
                        <h4>Address</h4>
                        <p>G-21, Block G, Noida Sector 3, Noida, Uttar Pradesh 201301</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div className="contact__widget">
                        <span className="icon_clock_alt"></span>
                        <h4>Open time</h4>
                        <p>10:00 am to 23:00 pm</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div className="contact__widget">
                        <span className="icon_mail_alt"></span>
                        <h4>Email</h4>
                        <p>officialmajid@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Contact Section End -->

    <!-- Map Begin --> */}
    <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.6365067551337!2d77.31621162554073!3d28.58067597569306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45a2fec4393%3A0xaa5938d112af449e!2sNoida%20Sector%203%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1728975331386!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className="map-inside">
            <i className="icon_pin"></i>
            <div className="inside-widget">
                <h4>Noida </h4>
                <ul>
                    <li>Phone: +91 9334690170</li>
                    <li>Add:  G-21, Block G, Noida Sector 3, Noida, Uttar Pradesh 201301</li>
                </ul>
            </div>
        </div>
    </div>
    {/* <!-- Map End -->

    <!-- Contact Form Begin --> */}
    <div className="contact-form spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="contact__form__title">
                        <h2>Leave Message</h2>
                    </div>
                </div>
            </div>
            <form action="#">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <input type="text" placeholder="Your name"/>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <input type="text" placeholder="Your Email"/>
                    </div>
                    <div className="col-lg-12 text-center">
                        <textarea placeholder="Your message"></textarea>
                        <button type="submit" className="site-btn">SEND MESSAGE</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    </>
  )
}

export default Contact