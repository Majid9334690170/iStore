import React from 'react'
import { Link } from 'react-router-dom'

function Dryfruits() {
  return (
    <>
    
    <section className="hero">
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
                    <div className="hero__item set-bg" data-setbg="img/dryfruits/dryfruits.jpg">
                        <div className="hero__text ">
                            <span>DtyFruits</span>
                            <h2>DryFruits <br />100% Original</h2>
                            <p>Free Pickup and Delivery Available</p>
                            <Link to="#" className="primary-btn">SHOP NOW</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
        <section className="featured spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Fresh Product</h2>
                    </div>
                    {/* <div className="featured__controls">
                        <ul>
                            <li className="active" data-filter="*">All</li>
                            <li data-filter=".oranges">Drink Fruits</li>
                            <li data-filter=".fresh-meat">Fresh Fruits</li>
                            <li data-filter=".vegetables">Vegetables</li>
                            <li data-filter=".fastfood">Fastfood</li>
                        </ul>
                    </div> */}
                </div>
            </div>
            <div className="row featured__filter">
                <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/dryfruits/Almond.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">Almond</Link></h6>
                            <h5>$8.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/dryfruits/Apricot.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">Apricot</Link></h6>
                            <h5>$5.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/dryfruits/cashews.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">Cashews</Link></h6>
                            <h5>$6.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/dryfruits/Chia-seeds.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">Chia Seeds</Link></h6>
                            <h5>$7.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/dryfruits/Dates.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">Dates</Link></h6>
                            <h5>$9.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/dryfruits/Dried-coconut.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">Dried Coconut</Link></h6>
                            <h5>$7.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/dryfruits/Dried-Figs.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">Dried Figs</Link></h6>
                            <h5>$9.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/dryfruits/Figs.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">Figs</Link></h6>
                            <h5>$10.00</h5>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/dryfruits/hazelnuts.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">Hazelnuts</Link></h6>
                            <h5>$10.00</h5>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/dryfruits/nuts.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">Nuts</Link></h6>
                            <h5>$10.00</h5>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/dryfruits/Raisins-kismis.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">Raisins Kismis</Link></h6> 
                            <h5>$10.00</h5>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/dryfruits/walnut.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">Welnut</Link></h6>  
                            <h5>$10.00</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    
    </>
  )
}

export default Dryfruits