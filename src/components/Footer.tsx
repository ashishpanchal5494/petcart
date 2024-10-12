import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top-wrap">
        <div className="container">
          <div className="footer-menu-wrap">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="footer-logo">
                  <Link to={"/"}>
                    <img style={{height: 50, marginBottom: 10}} src="img/logo/petcart7.png" alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="footer-menu">
                  <nav>
                  <ul className="navigation">
                      <li className="active menu-item-has-children">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="cat">Cat</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="dog">Dog</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="price">Price</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="blog">Blog</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="contact">Contact</Link>
                      </li>
                    </ul>
                    <div className="footer-search">
                      <form>
                        <input type="text" placeholder="Find Favorite pet" />
                        <button type="submit">
                          <i className="fas fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-quick-link-wrap">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className="quick-link-list">
                  <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="footer-social">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="copyright-text">
                <p>Copyright &copy; 2024. All Rights Reserved By <a href="index.html">PetCart</a></p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="payment-method-img text-center text-md-right">
                <img src="img/images/card_img.png" alt="Payment Methods" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
