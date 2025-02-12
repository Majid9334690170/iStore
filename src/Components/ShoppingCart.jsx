import React from 'react'
import { Link } from 'react-router-dom'

function ShoppingCart() {
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
                        <h2>Shopping Cart</h2>
                        <div className="breadcrumb__option">
                            <Link to="/">Home</Link>
                            <span>Shopping Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End -->

    <!-- Shoping Cart Section Begin --> */}
    <section className="shoping-cart spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th className="shoping__product">Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="shoping__cart__item">
                                        <img src="img/cart/cart-1.jpg" alt=""/>
                                        <h5>Vegetable’s Package</h5>
                                    </td>
                                    <td className="shoping__cart__price">
                                        $55.00
                                    </td>
                                    <td className="shoping__cart__quantity">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <input type="text" value="1"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="shoping__cart__total">
                                        $110.00
                                    </td>
                                    <td className="shoping__cart__item__close">
                                        <span className="icon_close"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="shoping__cart__item">
                                        <img src="img/cart/cart-2.jpg" alt=""/>
                                        <h5>Fresh Garden Vegetable</h5>
                                    </td>
                                    <td className="shoping__cart__price">
                                        $39.00
                                    </td>
                                    <td className="shoping__cart__quantity">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <input type="text" value="1"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="shoping__cart__total">
                                        $39.99
                                    </td>
                                    <td className="shoping__cart__item__close">
                                        <span className="icon_close"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="shoping__cart__item">
                                        <img src="img/cart/cart-3.jpg" alt=""/>
                                        <h5>Organic Bananas</h5>
                                    </td>
                                    <td className="shoping__cart__price">
                                        $69.00
                                    </td>
                                    <td className="shoping__cart__quantity">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <input type="text" value="1"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="shoping__cart__total">
                                        $69.99
                                    </td>
                                    <td className="shoping__cart__item__close">
                                        <span className="icon_close"></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__btns">
                        <Link to="#" className="primary-btn cart-btn">CONTINUE SHOPPING</Link>
                        <Link to="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading"></span>
                            Upadate Cart</Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="shoping__continue">
                        <div className="shoping__discount">
                            <h5>Discount Codes</h5>
                            <form action="#">
                                <input type="text" placeholder="Enter your coupon code"/>
                                <button type="submit" className="site-btn">APPLY COUPON</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="shoping__checkout">
                        <h5>Cart Total</h5>
                        <ul>
                            <li>Subtotal <span>$454.98</span></li>
                            <li>Total <span>$454.98</span></li>
                        </ul>
                        <Link to="#" className="primary-btn">PROCEED TO CHECKOUT</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default ShoppingCart