import React from 'react';


interface BannerProps {
  backgroundImage: string;
}

const Banner: React.FC<BannerProps> = ({ backgroundImage }) => {

  return (
    <section
      className="banner-area banner-bg"
      style={{ backgroundImage: `url(${backgroundImage})`, height: 750 }} // dynamically setting background
    >
      <div className="container custom-container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="banner-content">
              <h6 className="sub-title wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.8s">
                PetCart
              </h6>
              <h2 className="title wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1.8s">
              Find Your <span>Perfect</span> Furry Friend:
              <div>
               Cats & Dogs Await!
              </div>
                {/* Find Your Perfect Furry Friend: Cats and Dogs Await! */}
              </h2>
              <div className="banner-meta wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1.8s">
                <ul>
                  <li className="quality">
                    <span>1000 +</span>
                    <span>Healthy</span>
                  </li>
                  <li className="category">
                    <a href="#">Cat,</a>
                    <a href="#">Dog</a>
                  </li>
                  <li className="release-time">
                    <span>
                      <i className="far fa-calendar-alt"></i> 2024
                    </span>
                    <span>
                      <i className="far fa-clock"></i> 24hrs
                    </span>
                  </li>
                </ul>
              </div>
              <a
                href="https://www.youtube.com/watch?v=t8tjT9MA7yU"
                className="banner-btn btn popup-video wow fadeInUp"
                data-wow-delay=".8s"
                data-wow-duration="1.8s"
              >
                <i className="fas fa-play"></i> Watch Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
