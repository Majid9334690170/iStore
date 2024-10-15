import React from 'react'
import { Link } from 'react-router-dom'

function BlogDetails() {
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

    <!-- Blog Details Hero Begin --> */}
    <section className="blog-details-hero set-bg" data-setbg="img/blog/details/details-hero.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="blog__details__hero__text">
                        <h2>The Moment You Need To Remove Garlic From The Menu</h2>
                        <ul>
                            <li>By Majid Ansari</li>
                            <li>October 3, 2024</li>
                            <li>23 Comments</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Blog Details Hero End -->

    <!-- Blog Details Section Begin --> */}
    <section className="blog-details spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-5 order-md-1 order-2">
                    <div className="blog__sidebar">
                        <div className="blog__sidebar__search">
                            <form action="#">
                                <input type="text" placeholder="Search..."/>
                                <button type="submit"><span className="icon_search"></span></button>
                            </form>
                        </div>
                        <div className="blog__sidebar__item">
                            <h4>Categories</h4>
                            <ul>
                                <li><Link to="/vegetable">Vegetables (12)</Link></li>
                                <li><Link to="/fruits">Fruits (12)</Link></li>
                                <li><Link to="/cake">Original Cake (12)</Link></li>
                                <li><Link to="/drink">Soft Drink (12)</Link></li>
                                <li><Link to="/dryfruits">DryFruits (12)</Link></li>
                            </ul>
                        </div>
                        <div className="blog__sidebar__item">
                            <h4>Recent News</h4>
                            <div className="blog__sidebar__recent">
                                <Link to="#" className="blog__sidebar__recent__item">
                                    <div className="blog__sidebar__recent__item__pic">
                                        <img src="img/blog/sidebar/sr-1.jpg" alt=""/>
                                    </div>
                                    <div className="blog__sidebar__recent__item__text">
                                        <h6>09 Kinds Of Vegetables<br /> Protect The Liver</h6>
                                        <span>MAR 05, 2019</span>
                                    </div>
                                </Link>
                                <Link to="#" className="blog__sidebar__recent__item">
                                    <div className="blog__sidebar__recent__item__pic">
                                        <img src="img/blog/sidebar/sr-2.jpg" alt=""/>
                                    </div>
                                    <div className="blog__sidebar__recent__item__text">
                                        <h6>Tips You To Balance<br /> Nutrition Meal Day</h6>
                                        <span>MAR 05, 2019</span>
                                    </div>
                                </Link>
                                <Link to="#" className="blog__sidebar__recent__item">
                                    <div className="blog__sidebar__recent__item__pic">
                                        <img src="img/blog/sidebar/sr-3.jpg" alt=""/>
                                    </div>
                                    <div className="blog__sidebar__recent__item__text">
                                        <h6>4 Principles Help You Lose <br />Weight With Vegetables</h6>
                                        <span>MAR 05, 2019</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="blog__sidebar__item">
                            <h4>Search By</h4>
                            <div className="blog__sidebar__item__tags">
                                <Link to="/dryfruits">DryFruits</Link>
                                <Link to="/drink">Soft Drink</Link>
                                <Link to="/vegetable">Vegetables</Link>
                                <Link to="/fruits">Fruit</Link>
                                <Link to="/cake">Original Cake</Link>
                                {/* <Link to="#">Lifestyle</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-7 order-md-1 order-1">
                    <div className="blog__details__text">
                        <img src="img/blog/details/details-pic.jpg" alt=""/>
                        <p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                            dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
                            aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
                            sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
                            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
                            Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
                            quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
                            feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                        <h3>The corner window forms a place within a place that is a resting point within the large
                            space.</h3>
                        <p>The study area is located at the back with a view of the vast nature. Together with the other
                            buildings, a congruent story has been managed in which the whole has a reinforcing effect on
                            the components. The use of materials seeks connection to the main house, the adjacent
                            stables</p>
                    </div>
                    <div className="blog__details__content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="blog__details__author">
                                    <div className="blog__details__author__pic">
                                        <img src="img/img-1000.png" alt=""/>
                                    </div>
                                    <div className="blog__details__author__text">
                                        <h6>Majid Ansari</h6>
                                        <span>Creater</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="blog__details__widget">
                                    <ul>
                                        <li><span>Categories:</span> Food</li>
                                        <li><span>Tags:</span> All, Vegetables,Fruits, DryFruits, Soft Drink, Original Cake</li>
                                    </ul>
                                    <div className="blog__details__social">
                                        <Link to="#"><i className="fa fa-facebook"></i></Link>
                                        <Link to="#"><i className="fa fa-twitter"></i></Link>
                                        <Link to="#"><i className="fa fa-google-plus"></i></Link>
                                        <Link to="#"><i className="fa fa-linkedin"></i></Link>
                                        <Link to="#"><i className="fa fa-envelope"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Blog Details Section End -->

    <!-- Related Blog Section Begin --> */}
    <section className="related-blog spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title related-blog-title">
                        <h2>Post You May Like</h2>
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
    
    </>
  )
}

export default BlogDetails