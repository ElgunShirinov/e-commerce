import React from "react";
import { ImArrowLeft2 } from "react-icons/im";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
import { blogData } from "../Data/Data";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Single Blog"} />
      <BreadCrumb title="Single Blog" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
          {blogData?.map((i, j) =>{
            return (
              <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <ImArrowLeft2 className="fs-4" /> Go back to Blogs
                </Link>
                <h3 className="title">
                  {i.head}
                </h3>
                <img
                  src={i.blogImg}
                  className="img-fluid w-100 my-4"
                  alt="blog-1"
                />
                <p>
                  {i.title}
                </p>
              </div>
            </div>
            <div className="col-9"></div>
          </div>
            )
          })}
          
        </Container>
    </>
  );
};

export default SingleBlog;
