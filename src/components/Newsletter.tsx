import React from 'react';

const Newsletter = () => {
  return (
    <section className="newsletter-area newsletter-bg" style={{ backgroundImage: 'url(img/bg/newsletter_bg.jpg)' }}>
      <div className="container">
        <div className="newsletter-inner-wrap">
          <div className="row align-items-center">
            {/* Left side - Content */}
            <div className="col-lg-6">
              <div className="newsletter-content">
                <h4>Adopt Start 7 Days Free.</h4>
                <p>Enter your email to create or restart your membership.</p>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="col-lg-6">
              <form className="newsletter-form">
                <input type="email" required placeholder="Enter your email" />
                <button className="btn" type="submit">Get Started</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
