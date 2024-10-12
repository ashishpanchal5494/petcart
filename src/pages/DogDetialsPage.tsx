import React, { useEffect, useState } from 'react';
import { PiCatLight } from 'react-icons/pi';
import { FaGoogle } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import {  Link, useParams } from 'react-router-dom';

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
  breed_group: string;
  name: string;
  description: string;
  bred_for: string
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

interface DogImage {
  id: string;
  url: string;
  breeds: Breed[];
  width: number;
  height: number;
  categories: Category[];
}

// Define your component
const DogDetailsPage: React.FC = () => {
    const [data, setData] = useState<DogImage | null>(null); 
    console.log(data)
    const [loading, setLoading] = useState<boolean>(false);
    const {id} = useParams<{id: string}>()

    const breed = data?.breeds?.[0];
    const referenceImageId = breed?.reference_image_id;
    const wikipediaUrl = breed?.wikipedia_url || "#";

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
  
        const response = await fetch(`https://api.thedogapi.com/v1/images/${id}`, requestOptions);
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
    }, [id]);
  return (
    <>

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
        className="movie-details-area "
        style={{ backgroundImage: 'url(../img/bg/catDetails.jpeg)'
          }}
      >
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-xl-3 col-lg-4">
              <div className="movie-details-img">
                <img src={data?.url} alt="" style={{width: 400, height: 400}}/>
                <a href="https://www.youtube.com/watch?v=hflVT6eJ8bA" className="popup-video">
                  <img src="../img/images/play_icon.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="movie-details-content">
                <h5>Dog</h5>
                <h2>
                 {data?.breeds?.[0].name || data?.categories?.[0].name || "Name"}
                </h2>
               
                <p>
                  Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There
                  are many variations of passages of lorem Ipsum available, but the majority have
                  suffered alteration in some injected humour.
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
                      <Link
                        to={"/price"}
                        className="btn popup-video"
                      >
                        <i className="fas fa-play"></i> Buy Now
                      </Link>
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
                  <h2 className="title">Dog Qualities</h2>
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
                                <i className="fas fa-play"></i> Bred for
                              </a>
                              <span className="duration">
                                {data?.breeds?.[0].bred_for || "'N/A'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Breed Group
                              </a>
                              <span className="duration">
                                {data?.breeds?.[0].breed_group || "'N/A'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Adoptablity
                              </a>
                              <span className="duration">
                                {data?.breeds?.[0].adaptability || "'N/A'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Affection
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].affection_level || "'N/A'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Child Friendly
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].child_friendly || "'N/A'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Dog Friendly
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].dog_friendly || "'N/A'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Energy
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].energy_level || "'N/A'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Grooming
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].grooming || "'N/A'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Hairless
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].hairless || "'N/A'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Health issues
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].health_issues || "'N/A'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Hypoallergenic
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].hypoallergenic || "'N/A'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Life
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].life_span || "'N/A'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Origin
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].origin || "'N/A'"}
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
                              {data?.breeds?.[0].shedding_level || "'N/A'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Social Needs
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].social_needs || "'N/A'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Stranger Friendly
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].stranger_friendly || "'N/A'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Temperament
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].temperament || "'N/A'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Vocalisation
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].vocalisation || "'N/A'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Imperial
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].weight.imperial || "'N/A'"}
                              </span>
                            </li>
                            <li>
                              <a href="#" className="popup-video">
                                <i className="fas fa-play"></i> Metric
                              </a>
                              <span className="duration">
                              {data?.breeds?.[0].weight.metric || "'N/A'"}
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
                    <div className="card">
                     
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <ul>
                            <li>
                              <a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video">
                                <i className="fas fa-play"></i> Episode 1 - The World Is Purple
                              </a>
                              <span className="duration">
                                <i className="far fa-clock"></i> 28 Min
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
                <img src="../img/images/dog-poster.jpg" alt="" />
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
    </>
  );
};

export default DogDetailsPage;

