import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Define types for movie data
interface DogImage {
  id: string;
  url: string;
  breeds: any[]; // Adjust this type based on the actual structure of your API response
  width: number;
  height: number;
}

const DogPage: React.FC = () => {
  const [data, setData] = useState<DogImage[]>([]);
  console.log(data)
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(12); // Number of items per page

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

      const response = await fetch("https://api.thedogapi.com/v1/images/search?limit=99", requestOptions);
      const result = await response.json();
      setData(result); // Update state with dog data
    } catch (error) {
      console.error("Error fetching dog data:", error);
    } finally {
      setLoading(false); // Set loading to false when fetching is complete
    }
  };

  useEffect(() => {
    fetchDog()
  }, []);

  // Logic for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Breadcrumb Area */}
      <section
        className="breadcrumb-area breadcrumb-bg"
        style={{ backgroundImage: `url('img/bg/breadcrumb_bg.jpg')` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2 className="title">
                  Our <span>Dogs</span>
                </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dogs
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Movie Area */}
      {loading ? (
        <div id="preloader">
          <div id="loading-center">
            <div id="loading-center-absolute">
              <img src="img/preloader.svg" alt="Loading" />
            </div>
          </div>
        </div>
      ) : (
      <section
        className="movie-area movie-bg"
        style={{ backgroundImage: `url('img/bg/movie_bg.jpg')` }}
      >
        <div className="container">
          <div className="row align-items-end mb-60">
            <div className="col-lg-6">
              <div className="section-title text-center text-lg-left">
                <span className="sub-title">ONLINE ADOPT & BUY</span>
                <h2 className="title">All Dogs</h2>
              </div>
            </div>
          </div>

        

          <div className="row tr-movie-active">
            {currentItems.map((item, index) => (
              <div
                key={index}
                className="col-xl-3 col-lg-3 col-sm-6 grid-item grid-sizer"
              >
                <div className="movie-item movie-item-three mb-50">
                  <div className="movie-poster">
                    <img src={item.url} alt="poster" style={{ width: 400, height: 300 }} />
                    <ul className="overlay-btn">
                      <li>
                        <a
                          href={item.url}
                          className="popup-video btn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Watch Now
                        </a>
                      </li>
                      <li>
                        <Link to={`/dog/${item.id}`} className="btn">
                          Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="row">
            <div className="col-12">
              <div className="pagination-wrap mt-30">
                <nav>
                  <ul className="pagination">
                    <li
                      className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                    >
                      <button
                        className="page-link"
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </button>
                    </li>

                    {[...Array(totalPages)].map((_, i) => (
                      <li
                        key={i}
                        className={`page-item ${
                          currentPage === i + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => paginate(i + 1)}
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}

                    <li
                      className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>)}
    </div>
  );
};

export default DogPage;







