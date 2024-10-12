import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { PiCatLight } from "react-icons/pi";
import { CiImageOn } from "react-icons/ci";

interface Category {
  id: string;
  name: string;
}

interface Weight {
  imperial: string;
  metric: string;
}

interface Breed {
  id: string;
  name: string;
  description: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  hairless: number;
  health_issues: number;
  hypoallergenic: number;
  life_span: string;
  origin: string;
  reference_image_id?: string;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  temperament: string;
  vocalisation: number;
  weight: Weight;
  wikipedia_url?: string;
}

interface CatImage {
  id: string;
  url: string;
  breeds: Breed[];
  width: number;
  height: number;
  categories: Category[];
}

// Define your component
const CatDetailsPage: React.FC = () => {
  const [data, setData] = useState<CatImage | null>(null);
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(false);

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

      const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`, requestOptions);
      const result = await response.json();
      setData(result); // Update state with cat data
    } catch (error) {
      console.error("Error fetching cat data:", error);
    } finally {
      setLoading(false); // Set loading to false when fetching is complete
    }
  }

  useEffect(() => {
   fetchCat()
  }, [id]);


  const breed = data?.breeds?.[0];
  const referenceImageId = breed?.reference_image_id;
  const wikipediaUrl = breed?.wikipedia_url || "#";


  return (
    
    <>
      {/* Movie Details Area */}
      {loading ? (
        <div id="preloader">
          <div id="loading-center">
            <div id="loading-center-absolute">
              <img src="../img/preloader.svg" alt="Loading" />
            </div>
          </div>
        </div>
      ) : (
        <>
      <section
        className="movie-details-area"
        style={{ backgroundImage: 'url(../img/bg/catDetails.jpeg)'}}
      >
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-xl-3 col-lg-4">
              <div className="movie-details-img">
                <img src={data?.url} alt="" style={{width: 400, height: 400}}/>
                <a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video">
                  <img src="../img/images/play_icon.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="movie-details-content">
                <h5>Cat</h5>
                <h2>
                 {data?.categories?.[0].name || data?.breeds?.[0].name || "'Name'"}
                </h2>
                {/* <div className="banner-meta">
                  <ul>
                    <li className="quality">
                      <span>Pg 18</span>
                      <span>hd</span>
                    </li>
                    <li className="category">
                      <a href="#">Romance,</a>
                      <a href="#">Drama</a>
                    </li>
                    <li className="release-time">
                      <span>
                        <i className="far fa-calendar-alt"></i> 2021
                      </span>
                      <span>
                        <i className="far fa-clock"></i> 128 min
                      </span>
                    </li>
                  </ul>
                </div> */}
                <p>
                  {data?.breeds?.[0].description || "Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour" }
                 
                </p>
                <div className="movie-details-prime">
                  <ul>
                    <li className="share">
                      <a href="#">
                      <PiCatLight size={30} />
                      </a>
                    </li>
                    <li className="streaming">
                      <h6>Favorite Cat</h6>
                      <span>Online Adopt & Buy</span>
                    </li>
                    <li className="watch">
                      <a
                        href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                        className="btn popup-video"
                      >
                        <i className="fas fa-play"></i> Watch Now
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="movie-details-btn">
              <a href={data?.url} className="download-btn" download="">
                Download <img src="fonts/download.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Episode Area */}
      <section
        className="episode-area episode-bg"
        style={{ backgroundImage: 'url(../img/bg/episode_bg.jpg)' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="movie-episode-wrap">
                <div className="episode-top-wrap">
                  <div className="section-title">
                    <span className="sub-title">ONLINE BUY & ADOPT</span>
                    <h2 className="title">Cat Qualities</h2>
                  </div>
                 
                </div>
                <div className="episode-watch-wrap">
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                    
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <ul>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Adoptablity
                              </a>
                              <span className="duration">
                                {data?.breeds?.[0].adaptability || "'N/P'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Affection
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].affection_level || "'N/P'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Child Friendly
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].child_friendly || "'N/P'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Dog Friendly
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].dog_friendly || "'N/P'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Energy
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].energy_level || "'N/P'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Grooming
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].grooming || "'N/P'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Hairless
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].hairless || "'N/P'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Health issues
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].health_issues || "'N/P'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Hypoallergenic
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].hypoallergenic || "'N/P'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Life
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].life_span || "'N/P'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Origin
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].origin || "'N/P'"}
                              </span>
                            </li>
                            <li>
                              <a href={`/cat/${referenceImageId}` || "#"} className="popup-video">
                                <i className="fas fa-play"></i> Reference
                              </a>
                              <span className="duration">
                              <CiImageOn size={20} />
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Shedding
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].shedding_level || "'N/P'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Social Needs
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].social_needs || "'N/P'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Stranger Friendly
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].stranger_friendly || "'N/P'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Temperament
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].temperament || "'N/P'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Vocalisation
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].vocalisation || "'N/P'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Imperial
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].weight.imperial || "'N/P'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Metric
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].weight.metric || "'N/P'"}
                              </span>
                            </li>
                            <li>
                              <a href={wikipediaUrl} className="popup-video">
                                <i className="fas fa-play"></i> Google
                              </a>
                              <span className="duration">
                              <FaGoogle size={20} />
                              </span>
                            </li>
                            {/* Add more episodes similarly */}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="episode-img">
                <img src="../img/images/cat-poster.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="movie-history-wrap">
                <h3 className="title">
                  About <span>History</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are
                  many variations of passages of lorem Ipsum available, but the majority have
                  suffered alteration in some injected humour. There are many variations of passages
                  of Lorem Ipsum available, but the majority have suffered alteration in some form,
                  by injected humour, or randomised words which don't look even slightly believable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </> )}

      {/* TV Series Area */}
      
    </>
  );
};

export default CatDetailsPage;

