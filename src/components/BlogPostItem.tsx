import React from "react";


const BlogPostItem: React.FC<{
    imgSrc: string;
    date: string;
    title: string;
    description: string;
    author: string;
    likes: number;
    comments: number;
  }> = ({ imgSrc, date, title, description, author, likes, comments }) => {
    return (
      <div className="blog-post-item">
        <div className="blog-post-thumb">
          <a href="blog-details.html"><img src={imgSrc} alt="Blog post thumbnail" /></a>
        </div>
        <div className="blog-post-content">
          <span className="date"><i className="far fa-clock"></i> {date}</span>
          <h2 className="title"><a href="blog-details.html">{title}</a></h2>
          <p>{description}</p>
          <div className="blog-post-meta">
            <ul>
              <li><i className="far fa-user"></i> by <a href="#">{author}</a></li>
              <li><i className="far fa-thumbs-up"></i> {likes}</li>
              <li><i className="far fa-comments"></i><a href="#">{comments} Comments</a></li>
            </ul>
            <div className="read-more">
              <a href="blog-details.html">Read More <i className="fas fa-angle-double-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogPostItem