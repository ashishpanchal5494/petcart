import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className="services-area services-bg" style={{ backgroundImage: 'url(img/bg/services_bg.jpg)' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left side image section */}
          <div className="col-lg-6">
            <div className="services-img-wrap">
              <img src="img/images/services_img3.png" alt="services" />
              <Link to="price" className="download-btn" download>
                "Buy Now" <img src="fonts/download.svg" alt="Download icon" />
              </Link>
            </div>
          </div>

          {/* Right side text content */}
          <div className="col-lg-6">
            <div className="services-content-wrap">
              <div className="section-title title-style-two mb-20">
                <span className="sub-title">Our Services</span>
                <h2 className="title">Buy & Adopt Your Favorite Pet From This Platform.</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages
                of lorem Ipsum available, but the majority have suffered alteration in some injected humour.
              </p>
              <div className="services-list">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="flaticon-television"></i>
                    </div>
                    <div className="content">
                      <h5>Enjoy Your Favorite pet.</h5>
                      <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-video-camera"></i>
                    </div>
                    <div className="content">
                      <h5>Watch Everywhere.</h5>
                      <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
