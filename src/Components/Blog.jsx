import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
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
                        <h2>Blog</h2>
                        <div className="breadcrumb__option">
                            <Link to="/">Home</Link>
                            <span>Blog</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End -->

    <!-- Blog Section Begin --> */}
    <section className="blog spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-5">
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
                            <li>
                      <Link to="/vegetable">Vegetables</Link>
                    </li>
                    <li>
                      <Link to="/fruits">Fresh Fruits </Link>
                    </li>
                    <li>
                      <Link to="/cake">Original Cake</Link>
                    </li>
                    <li>
                      <Link to="/drink">Soft Drink</Link>
                    </li>
                    <li>
                      <Link to="/dryfruits">DryFruits</Link>
                    </li>
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
                                        <span>Octobr 8, 2024</span>
                                    </div>
                                </Link>
                                <Link to="#" className="blog__sidebar__recent__item">
                                    <div className="blog__sidebar__recent__item__pic">
                                        <img src="img/blog/sidebar/sr-2.jpg" alt=""/>
                                    </div>
                                    <div className="blog__sidebar__recent__item__text">
                                        <h6>Tips You To Balance<br /> Nutrition Meal Day</h6>
                                        <span>Octobr 8, 2024</span>
                                    </div>
                                </Link>
                                <Link to="#" className="blog__sidebar__recent__item">
                                    <div className="blog__sidebar__recent__item__pic">
                                        <img src="img/blog/sidebar/sr-3.jpg" alt=""/>
                                    </div>
                                    <div className="blog__sidebar__recent__item__text">
                                        <h6>4 Principles Help You Lose <br />Weight With Vegetables</h6>
                                        <span>Octobr 8, 2024</span>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-7">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src="img/blog/blog-2.jpg" alt=""/>
                                </div>
                                <div className="blog__item__text">
                                    <ul>
                                        <li><i className="fa fa-calendar-o"></i> Octobr 8, 2024</li>
                                        <li><i className="fa fa-comment-o"></i> 5</li>
                                    </ul>
                                    <h5><Link to="#">6 ways to prepare breakfast for 30</Link></h5>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                        quaerat </p>
                                    <Link to="#" className="blog__btn">READ MORE <span className="arrow_right"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src="img/blog/blog-3.jpg" alt=""/>
                                </div>
                                <div className="blog__item__text">
                                    <ul>
                                        <li><i className="fa fa-calendar-o"></i> Octobr 8, 2024</li>
                                        <li><i className="fa fa-comment-o"></i> 5</li>
                                    </ul>
                                    <h5><Link to="#">Visit the clean farm in the US</Link></h5>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                        quaerat </p>
                                    <Link to="#" className="blog__btn">READ MORE <span className="arrow_right"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src="img/blog/blog-1.jpg" alt=""/>
                                </div>
                                <div className="blog__item__text">
                                    <ul>
                                        <li><i className="fa fa-calendar-o"></i> Octobr 8, 2024</li>
                                        <li><i className="fa fa-comment-o"></i> 5</li>
                                    </ul>
                                    <h5><Link to="#">Cooking tips make cooking simple</Link></h5>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                        quaerat </p>
                                    <Link to="#" className="blog__btn">READ MORE <span className="arrow_right"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src="img/blog/blog-4.jpg" alt=""/>
                                </div>
                                <div className="blog__item__text">
                                    <ul>
                                        <li><i className="fa fa-calendar-o"></i> Octobr 8, 2024</li>
                                        <li><i className="fa fa-comment-o"></i> 5</li>
                                    </ul>
                                    <h5><Link to="#">Cooking tips make cooking simple</Link></h5>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                        quaerat </p>
                                    <Link to="#" className="blog__btn">READ MORE <span className="arrow_right"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src="img/blog/blog-4.jpg" alt=""/>
                                </div>
                                <div className="blog__item__text">
                                    <ul>
                                        <li><i className="fa fa-calendar-o"></i>Octobr 8, 2024</li>
                                        <li><i className="fa fa-comment-o"></i> 5</li>
                                    </ul>
                                    <h5><Link to="#">The Moment You Need To Remove Garlic From The Menu</Link></h5>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                        quaerat </p>
                                    <Link to="#" className="blog__btn">READ MORE <span className="arrow_right"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src="img/blog/blog-6.jpg" alt=""/>
                                </div>
                                <div className="blog__item__text">
                                    <ul>
                                        <li><i className="fa fa-calendar-o"></i> Octobr 8, 2024</li>
                                        <li><i className="fa fa-comment-o"></i> 5</li>
                                    </ul>
                                    <h5><Link to="#">Cooking tips make cooking simple</Link></h5>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                        quaerat </p>
                                    <Link to="#" className="blog__btn">READ MORE <span className="arrow_right"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product__pagination blog__pagination">
                                <Link to="#">1</Link>
                                <Link to="#">2</Link>
                                <Link to="#">3</Link>
                                <Link to="#"><i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Blog