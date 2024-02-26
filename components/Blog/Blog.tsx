import React from "react";
import BlogLeft from "./BlogLeft";
import BlogRight from "./BlogRight";

const Blog = () => {
  return (
    <section className="relative md:py-24 py-16 mt-10">
      <BlogLeft />
      <BlogRight />
    </section>
  );
};

export default Blog;
