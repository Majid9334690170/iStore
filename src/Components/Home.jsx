import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    
    {/* <!-- Hero Section Begin --> */}
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
                            {/* <li><Link to="#">Fresh Meat</Link></li> */}
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
                    <div className="hero__item set-bg" data-setbg="img/hero/banner.jpg">
                        <div className="hero__text">
                            <span>FRUIT FRESH</span>
                            <h2>Vegetable <br />100% Organic</h2>
                            <p>Free Pickup and Delivery Available</p>
                            <Link to="#" className="primary-btn">SHOP NOW</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Hero Section End -->

    <!-- Categories Section Begin --> */}
    <section className="categories">
        <div className="container">
            <div className="row">
                <div className="categories__slider owl-carousel">
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="img/dryfruits/dryfruits.jpg">
                            <h5><Link to="#">Dry Fruits</Link></h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="img/cake/Vanilla-cupcakes.jpg">
                            <h5><Link to="/cake">Original Cake</Link></h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="img/categories/cat-3.jpg">
                            <h5><Link to="/vegetable">Vegetables</Link></h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="img/juice/Soft-drink.jpg">
                            <h5><Link to="/drink">Soft Drink</Link></h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="img/categories/cat-5.jpg">
                            <h5><Link to="/fruits">Fresh fruits</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Categories Section End -->

    <!-- Featured Section Begin --> */}
    <section className="featured spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Fresh Product</h2>
                    </div>
                    <div className="featured__controls">
                        <ul>
                            <li className="active" data-filter="*">All</li>
                            <li><Link to="/vegetable">Vegetables</Link></li>
                            <li><Link to="/fruits">Fresh fruits</Link></li>
                            <li><Link to="/cake">Cake</Link></li>
                            <li><Link to="/drink">Soft Drink</Link></li>
                            <li><Link to="/dryfruits">DryFruits</Link></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row featured__filter">
                <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-1.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">Fresh fruits</Link></h6>
                            <h5>$8.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/dryfruits/dryfruits.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">DryFruits</Link></h6>
                            <h5>$5.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/cake/Vanilla-cupcakes.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">Cake</Link></h6>
                            <h5>$6.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/categories/cat-3.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">Vegetables</Link></h6>
                            <h5>$7.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/juice/Soft-drink.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">Soft Drink</Link></h6>
                            <h5>$9.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-6.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">Orange</Link></h6>
                            <h5>$7.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-7.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">Mango </Link></h6>
                            <h5>$9.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-8.jpg">
                            <ul className="featured__item__pic__hover">
                                <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><Link to="#">Apple</Link></h6>
                            <h5>$10.00</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Featured Section End -->

    <!-- Banner Begin --> */}
    <div className="banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="banner__pic">
                        <img src="img/banner/banner-1.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="banner__pic">
                        <img src="img/banner/banner-2.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Banner End -->

    <!-- Latest Product Section Begin --> */}
    <section className="latest-product spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="latest-product__text">
                        <h4>Latest Products</h4>
                        <div className="latest-product__slider owl-carousel">
                            <div className="latest-prdouct__slider__item">
                                <Link to="/dryfruits" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/dryfruits/dryfruits.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>DryFruits</h6>
                                        <span>$30.00</span>
                                    </div>
                                </Link>
                                <Link to="/vegetable" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/categories/cat-3.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Vegetable</h6>
                                        <span>$30.00</span>
                                    </div>
                                </Link>
                                <Link to="/fruits" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/featured/feature-6.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Orange</h6>
                                        <span>$30.00</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="latest-prdouct__slider__item">
                                <Link to="/cake" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/cake/Vanilla-cupcakes.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Original Cake</h6>
                                        <span>$30.00</span>
                                    </div>
                                </Link>
                                <Link to="/drink" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/juice/Soft-drink.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </Link>
                                <Link to="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-3.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="latest-product__text">
                        <h4>Top Rated Products</h4>
                        <div className="latest-product__slider owl-carousel">
                            <div className="latest-prdouct__slider__item">
                                <Link to="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-1.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </Link>
                                <Link to="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-2.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </Link>
                                <Link to="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-3.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="latest-prdouct__slider__item">
                                <Link to="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-1.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </Link>
                                <Link to="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-2.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </Link>
                                <Link to="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-3.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="latest-product__text">
                        <h4>Review Products</h4>
                        <div className="latest-product__slider owl-carousel">
                            <div className="latest-prdouct__slider__item">
                                <Link to="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-1.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </Link>
                                <Link to="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-2.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </Link>
                                <Link to="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-3.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="latest-prdouct__slider__item">
                                <Link to="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-1.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </Link>
                                <Link to="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-2.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </Link>
                                <Link to="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-3.jpg" alt=""/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Latest Product Section End -->

    <!-- Blog Section Begin --> */}
    <section className="from-blog spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title from-blog__title">
                        <h2>From The Blog</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic">
                            <img src="img/blog/blog-1.jpg" alt=""/>
                        </div>
                        <div className="blog__item__text">
                            <ul>
                                <li><i className="fa fa-calendar-o"></i> October 8, 2024</li>
                                <li><i className="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><Link to="#">Cooking tips make cooking simple</Link></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic">
                            <img src="img/blog/blog-2.jpg" alt=""/>
                        </div>
                        <div className="blog__item__text">
                            <ul>
                                <li><i className="fa fa-calendar-o"></i>October 8, 2024</li>
                                <li><i className="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><Link to="#">6 ways to prepare breakfast for 30</Link></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic">
                            <img src="img/blog/blog-3.jpg" alt=""/>
                        </div>
                        <div className="blog__item__text">
                            <ul>
                                <li><i className="fa fa-calendar-o"></i>October 8, 2024</li>
                                <li><i className="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><Link to="#">Visit the clean farm in the US</Link></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Blog Section End --> */}

    </>
  )
}

export default Home