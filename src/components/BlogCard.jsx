import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "../Data/Data";

const BlogCard = () => {
  return (
    <>
      {blogData?.map((i, j) => {
        return (
          <div className="col-12 col-md-6 col-xl-3 mb-3 border-0 card bg-transparent" key={j}>
            <div className="blog-card border p-2">
              <div className="card-image">
                <img src={i.blogImg} className="img-fluid w-100" alt="blog-1" />
              </div>

              <div className="blog-content">
                <p className="date">{i.date}</p>
                <h5 className="title">{i.head}</h5>
                <p className="desc">{i.title}</p>
                <Link to="/blog/bid" className="button">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogCard;
