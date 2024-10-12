import React from "react";

const RecentPostItem: React.FC<{ imgSrc: string, title: string, date: string }> = ({ imgSrc, title, date }) => {
    return (
      <li className="rc-post-item">
        <div className="thumb">
          <a href="blog-details.html"><img src={imgSrc} alt="Recent post thumbnail" /></a>
        </div>
        <div className="content">
          <h5 className="title"><a href="blog-details.html">{title}</a></h5>
          <span className="date"><i className="far fa-clock"></i> {date}</span>
        </div>
      </li>
    );
  };

  export default RecentPostItem