import React from 'react';
import BlogPostItem from '../components/BlogPostItem';
import RecentPostItem from '../components/RecentPostItem';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  return (
    <>
      {/* Breadcrumb Area */}
      <section className="breadcrumb-area breadcrumb-bg" style={{ backgroundImage: 'url(img/bg/breadcrumb_bg.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2 className="title">New Blogs</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">Blog Page</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Area */}
      <section className="blog-area blog-bg" style={{ backgroundImage: 'url(img/bg/blog_bg.jpg)' }}>
        <div className="container">
          <div className="row">
            {/* Blog Posts */}
            <div className="col-lg-8">
              <BlogPostItem 
                imgSrc="img/blog/blog_thumb01.jpg"
                date="10 Mar 2021"
                title="Your Free Movie Streaming Purposes"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua."
                author="Admin"
                likes={63}
                comments={12}
              />
              <BlogPostItem 
                imgSrc="img/blog/blog_thumb02.jpg"
                date="10 Mar 2021"
                title="Where watch English movies free?"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua."
                author="Admin"
                likes={63}
                comments={12}
              />
              <BlogPostItem 
                imgSrc="img/blog/blog_thumb03.jpg"
                date="10 Mar 2021"
                title="House movie to is streaming website?"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua."
                author="Admin"
                likes={63}
                comments={12}
              />
              {/* Pagination */}
              <div className="pagination-wrap mt-60">
                <nav>
                  <ul>
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">Next</a></li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <aside className="blog-sidebar">
              <div className="widget blog-widget">
      <div className="widget-title mb-30">
        <h5 className="title">Search Objects</h5>
      </div>
      <form action="#" className="sidebar-search">
        <input type="text" placeholder="Search..." />
        <button><i className="fas fa-search"></i></button>
      </form>
    </div>
    <div className="widget blog-widget">
      <div className="widget-title mb-30">
        <h5 className="title">Categories</h5>
      </div>
      <div className="sidebar-cat">
        <ul>
          <li><a href="#">Movies</a> <span>12</span></li>
          <li><a href="#">Action Movies</a> <span>10</span></li>
          <li><a href="#">Streaming</a> <span>9</span></li>
          <li><a href="#">Download</a> <span>16</span></li>
        </ul>
      </div>
    </div>
    <div className="widget blog-widget">
      <div className="widget-title mb-30">
        <h5 className="title">Recent Posts</h5>
      </div>
      <div className="rc-post">
        <ul>
          <RecentPostItem
            imgSrc="img/blog/rc_post_thumb01.jpg"
            title="Express Management Effective"
            date="10 Mar 2021"
          />
          <RecentPostItem
            imgSrc="img/blog/rc_post_thumb02.jpg"
            title="Where watch English movies free?"
            date="10 Mar 2021"
          />
          <RecentPostItem
            imgSrc="img/blog/rc_post_thumb03.jpg"
            title="House movie streaming website"
            date="10 Mar 2021"
          />
        </ul>
      </div>
    </div>
    <div className="widget blog-widget">
      <div className="widget-title mb-30">
        <h5 className="title">Tag Post</h5>
      </div>
      <div className="tag-list">
        <ul>
          <li><a href="#">Movies</a></li>
          <li><a href="#">Creative</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Romantic</a></li>
          <li><a href="#">Who</a></li>
          <li><a href="#">English</a></li>
          <li><a href="#">Blending</a></li>
        </ul>
      </div>
    </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;


// const SidebarSearch: React.FC = () => {
//   return (
//     <div className="widget blog-widget">
//       <div className="widget-title mb-30">
//         <h5 className="title">Search Objects</h5>
//       </div>
//       <form action="#" className="sidebar-search">
//         <input type="text" placeholder="Search..." />
//         <button><i className="fas fa-search"></i></button>
//       </form>
//     </div>
//   );
// };

// const SidebarCategories: React.FC = () => {
//   return (
//     <div className="widget blog-widget">
//       <div className="widget-title mb-30">
//         <h5 className="title">Categories</h5>
//       </div>
//       <div className="sidebar-cat">
//         <ul>
//           <li><a href="#">Movies</a> <span>12</span></li>
//           <li><a href="#">Action Movies</a> <span>10</span></li>
//           <li><a href="#">Streaming</a> <span>9</span></li>
//           <li><a href="#">Download</a> <span>16</span></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

