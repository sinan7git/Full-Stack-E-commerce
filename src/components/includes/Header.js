import React from 'react'
import { IoIosSearch, IoIosPerson, IoIosCart } from "react-icons/io";
import '../includes/Header.css'
import MobileMenu from "../MobileMenu";
import { useState, useContext, useEffect } from "react";
import img1 from '../images/bg/pngtree-e-commerce-logo-template-png-image_5066821-removebg-preview (1).png'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

function Header() {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { userData, updateUserData } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    if (userData) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [userData]);

  const handleLogout = () => {
    updateUserData({ type: 'LOGOUT' });
  };

  const handleSearchClick = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id="htc__header" className="htc__header__area header--one">
      <div
        id="sticky-header-with-topbar"
        className="mainmenu__wrap sticky__header"
      >
        <div className="container">
          <div className="row">
            <div className="menumenu__container clearfix">
              <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
                <div className="logo">
                  <Link to="/">
                    <img
                      src={img1}
                      alt="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-7 col-lg-8 col-sm-5 col-xs-3">
                <nav className="main__menu__nav hidden-xs hidden-sm">
                  <ul className="main__menu">
                    <li class="drop">
                      <Link to="">Home</Link>
                    </li>
                    <li class="drop">
                      <Link to="#">women</Link>
                      <ul class="dropdown mega_dropdown">
                        <li>
                          <a class="mega__title" to="product-grid.html">
                          Clothing
                          </a>
                          <ul class="mega__item">
                            <li>
                              <Link to="/dress/"> Dresses</Link>
                            </li>
                            <li>
                              <Link to="/tops/">Tops</Link>
                            </li>
                            <li>
                              <Link to="/outer/">Outerwear</Link>
                            </li>
                            <li>
                              <Link to="/active/">Activewear</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a class="mega__title" to="product-grid.html">
                          Shoes
                          </a>
                          <ul class="mega__item">
                            <li>
                              <Link to="/heels/">Heels</Link>
                            </li>
                            <li>
                              <Link to="/sneakers/">Sneakers</Link>
                            </li>
                            <li>
                              <Link to="/bootsW/">Boots</Link>
                            </li>
                            <li>
                              <Link to="/sandals/">Sandals</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a class="mega__title" to="product-grid.html">
                          Accessories
                          </a>
                          <ul class="mega__item">
                            <li>
                              <Link to="/handbag/">Handbags</Link>
                            </li>
                            <li>
                              <Link to="/jewel/">Jewelry</Link>
                            </li>
                            <li>
                              <Link to="/hatW/">Hats</Link>
                            </li>
                            <li>
                              <Link to="/scarves/">Scarves</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="drop">
                      <Link to="#">men</Link>
                      <ul class="dropdown mega_dropdown">
                        <li>
                          <Link class="mega__title" to="product-grid.html">
                          Clothing
                          </Link>
                          <ul class="mega__item">
                            <li>
                              <Link to="/tshirt/">T-Shirts</Link>
                            </li>
                            <li>
                              <Link to="/shirt/">Shirts</Link>
                            </li>
                            <li>
                              <Link to="/pants/">Pants</Link>
                            </li>
                            <li>
                              <Link to="/jeans/">Jeans</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a class="mega__title" to="product-grid.html">
                          Shoes
                          </a>
                          <ul class="mega__item">
                            <li>
                              <Link to="/dressShoe/">Dress Shoes</Link>
                            </li>
                            <li>
                              <Link to="/casualShoe/">Casual Shoes
</Link>
                            </li>
                            <li>
                              <Link to="/sneakerMen/">Sneakers</Link>
                            </li>
                            <li>
                              <Link to="/boots/">Boots</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a class="mega__title" to="product-grid.html">
                          Accessories
                          </a>
                          <ul class="mega__item">
                            <li>
                              <Link to="/watches/">Watches</Link>
                            </li>
                            <li>
                              <Link to="/wallets/">Wallets</Link>
                            </li>
                            <li>
                              <Link to="/belts/">Belts</Link>
                            </li>
                            <li>
                              <Link to="/hats/">Hats</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="drop">
                      <Link to="#">Pages</Link>
                      <ul class="dropdown">
                        <li>
                          <Link to="/blog/">Blog</Link>
                        </li>
                        <li>
                          <Link to="/top/">Top Rated</Link>
                        </li>
                        <li>
                          <Link to="/testimonial/">Testimonial</Link>
                        </li>
                        <li>
                          <Link to="/brand/">Brand</Link>
                        </li>
                        <li>
                          <Link to="/contact/">contact</Link>
                        </li>

                      </ul>
                    </li>
                    <li>
                      <Link to="/products/">Products</Link>
                    </li>
                    <li>
                      <Link to="/contact/">contact</Link>
                    </li>
                     <li>
                          <Link to="/order_list/">OrderList</Link>
                        </li>
                  </ul>
                </nav>

                <div class="mobile-menu clearfix visible-xs visible-sm">
                  <div style={{marginLeft:"69px"}}>
                    <MobileMenu />
                  </div>
                    
                </div>
              </div>
              <div className="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                <div className="header__right">
                <div className={`header__search ${isSearchOpen ? "search__open" : ""}`}>
          <Link to="#">
            <i className="fas fa-search icons" ></i>
          </Link>
          {isSearchOpen && (
            <div className="search__bar"  style={{ width: "700px", height: "40px", backgroundColor: "white" }}>
              <input type="text" placeholder="Search items" />
            </div>
          )}
        </div>
        {isLoggedIn ? (
          <>
                 <div className="header__account">
                   <Link to="/login/"> <i onClick={handleLogout} className="fas fa-sign-out-alt icons"></i></Link>
                  </div> 
                  
                   <div className="htc__shopping__cart">
                    <Link className="cart__menu" to="/cart/">
                    <i className="fas fa-cart-shopping icons"></i>
                    </Link>
                    <a to="#">
                      <span className="htc__qua">2</span>
                    </a>
                  </div>
            </>
            ) : (
              <>
                  <div className="header__account">
                    <Link to="/login/">
                    <i className="fas fa-user icons"></i>
                    </Link>
                  </div>
                  </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="mobile-menu-area">
            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
