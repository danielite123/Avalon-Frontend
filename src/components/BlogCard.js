import React from "react";
import { Link } from "react-router-dom";
import blog from "../images/blog-1.jpg";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">14 Aug, 2023</p>
        <h5 className="title">A beautiful sunday morning renaissance</h5>
        <p className="desc">
          Today 14 Aug, 2023 daniel created is first eccomerce webiste Avalon
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
