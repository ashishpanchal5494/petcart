import React from 'react';

const LiveStream = () => {
  return (
    <section className="live-area live-bg fix" style={{ backgroundImage: 'url(img/bg/live_bg.jpg)' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Content */}
          <div className="col-xl-5 col-lg-6">
            <div className="section-title title-style-two mb-25">
              <span className="sub-title">ONLINE Adopt & Buy</span>
              <h2 className="title">Find Your Perfect Furry Friend: Cats & Dogs Await!</h2>
            </div>
            <div className="live-movie-content">
              <p>
                Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod. There are many variations of passages of
                lorem Ipsum available, but the majority have suffered alteration.
              </p>
              <div className="live-fact-wrap">
                <div className="resolution">
                  <h2>Healthy & Fit</h2>
                </div>
                <div className="active-customer">
                  <h4><span className="odometer" data-count="20">100+</span>Breeds</h4>
                  
                </div>
              </div>
              <a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="btn popup-video">
                <i className="fas fa-play"></i> Watch Now
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="col-xl-7 col-lg-6">
            <div className="live-movie-img wow fadeInRight" data-wow-delay=".2s" data-wow-duration="1.8s">
              <img src="img/images/live_img.png" alt="Live Movie" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStream;
