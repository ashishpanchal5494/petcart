import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

// Define the type for the data you are fetching
interface AnimalImage {
  id: string;
  url: string;
  breeds: any[]; // Adjust this type based on the actual structure of your API response
  width: number;
  height: number;
}

const Main: React.FC = () => {
  // Slider settings for react-slick
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  // State to hold the animal data (cats or dogs)
  const [data, setData] = useState<AnimalImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // State to track which tab is active (default to "dog")
  const [activeTab, setActiveTab] = useState<string>('dog');

  // Function to fetch cat data
  const fetchCat = async () => {
    setLoading(true); // Set loading to true when fetching data
    try {
      const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "live_wLeX2GXWb3zDQc4jtd5WIMRK46XFahzcS4koib1Th69lcgIVIYHlFB6keXpgniAu",
      });

      const requestOptions: RequestInit = {
        method: "GET",
        headers: headers,
        redirect: "follow",
      };

      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10", requestOptions);
      const result = await response.json();
      setData(result); // Update state with cat data
    } catch (error) {
      console.error("Error fetching cat data:", error);
    } finally {
      setLoading(false); // Set loading to false when fetching is complete
    }
  };

  // Function to fetch dog data
  const fetchDog = async () => {
    setLoading(true); // Set loading to true when fetching data
    try {
      const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "live_OaHIG8eCcZMEa4InVCcG2atA5aNEXhvLmHM97uxpxtO1T9z6hO7WRhYG4csputqz",
      });

      const requestOptions: RequestInit = {
        method: "GET",
        headers: headers,
        redirect: "follow",
      };

      const response = await fetch("https://api.thedogapi.com/v1/images/search?limit=10", requestOptions);
      const result = await response.json();
      setData(result); // Update state with dog data
    } catch (error) {
      console.error("Error fetching dog data:", error);
    } finally {
      setLoading(false); // Set loading to false when fetching is complete
    }
  };

  // Use useEffect to trigger the correct data fetch based on active tab
  useEffect(() => {
    if (activeTab === 'cat') {
      fetchCat(); // Fetch cat data when the "cat" tab is active
    } else {
      fetchDog(); // Fetch dog data when the "dog" tab is active
    }
  }, [activeTab]); // Dependency array includes activeTab to trigger fetch on tab change

  return (
    <section className="ucm-area ucm-bg" style={{ backgroundImage: 'url(img/bg/ucm_bg_shape.png)' }}>
      <div className="ucm-bg-shape" style={{ backgroundImage: 'url(img/bg/ucm_bg_shape.png)' }}></div>
      {loading ? (
        <div id="preloader">
          <div id="loading-center">
            <div id="loading-center-absolute">
              <img src="img/preloader.svg" alt="Loading" />
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row align-items-end mb-55">
            <div className="col-lg-6">
              <div className="section-title text-center text-lg-left">
                <span className="sub-title">ONLINE BUY</span>
                <h2 className="title">Our Category</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ucm-nav-wrap">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${activeTab === 'cat' ? 'active' : ''}`}
                      id="cat-tab"
                      role="tab"
                      aria-controls="cat"
                      aria-selected={activeTab === 'cat'}
                      onClick={() => setActiveTab('cat')}
                    >
                      Cat
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${activeTab === 'dog' ? 'active' : ''}`}
                      id="dog-tab"
                      role="tab"
                      aria-controls="dog"
                      aria-selected={activeTab === 'dog'}
                      onClick={() => setActiveTab('dog')}
                    >
                      Dog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Carousel Component */}
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="animal" role="tabpanel" aria-labelledby="animal-tab">
              <div className="tr-movie-active" style={{ padding: 10 }}>
                <Slider {...settings}>
                  {data.map((item, index) => (
                    <div key={index}>
                      <div className="movie-item movie-item-three mb-50">
                        <div className="movie-poster">
                          <img src={item.url} alt="Animal" style={{ width: 380, height: 250, borderRadius: 10 }} />
                          <ul className="overlay-btn" style={{ width: 380 }}>
                            <li>
                              <Link to={`/${activeTab}/${item.id}`} className="btn">
                                Details
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Main;
