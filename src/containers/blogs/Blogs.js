import React from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";

export default function Blogs() {
  return (
    <div className="main">
      <div className="blog-header">
        <h1 className="blog-header-text">Blogs</h1>
        <p className="subTitle blog-subtitle">With Love for Developing cool stuff. i love to write and teach others what i have learned</p>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          <BlogCard />
          <BlogCard/>
        </div>
      </div>
    </div>
  );
}
