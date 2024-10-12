import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      {/* Breadcrumb Area */}
      <section className="breadcrumb-area breadcrumb-bg" style={{ backgroundImage: 'url(img/bg/breadcrumb_bg.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2 className="title">Contact Us</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Area */}
      <section className="contact-area contact-bg" style={{ backgroundImage: 'url(img/bg/contact_bg.jpg)' }}>
        <div className="container">
          <div className="row">
            {/* Contact Form */}
            <div className="col-xl-8 col-lg-7">
              <div className="contact-form-wrap">
                <div className="widget-title mb-50">
                  <h5 className="title">Contact Form</h5>
                </div>
                <div className="contact-form">
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" placeholder="Your Name *" />
                      </div>
                      <div className="col-md-6">
                        <input type="email" placeholder="Your Email *" />
                      </div>
                    </div>
                    <input type="text" placeholder="Subject *" />
                    <textarea name="message" placeholder="Type Your Message..." />
                    <button className="btn">Send Message</button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-xl-4 col-lg-5">
              <div className="widget-title mb-50">
                <h5 className="title">Information</h5>
              </div>
              <div className="contact-info-wrap">
                <p>
                  <span>Find solutions :</span> to common problems, or get help from a support agent industry's standard.
                </p>
                <div className="contact-info-list">
                  <ul>
                    <li>
                      <div className="icon"><i className="fas fa-map-marker-alt" /></div>
                      <p><span>Address :</span> W38 Park Road, New York</p>
                    </li>
                    <li>
                      <div className="icon"><i className="fas fa-phone-alt" /></div>
                      <p><span>Phone :</span> (09) 123 854 365</p>
                    </li>
                    <li>
                      <div className="icon"><i className="fas fa-envelope" /></div>
                      <p><span>Email :</span> support@movflx.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div id="map" style={{ backgroundImage: 'url(img/bg/map.jpg)', height: '400px' }}></div>
    </>
  );
};

export default Contact;

