import React from "react";

const BlogLazy = React.lazy(() => import("./blog"));

const Blog = () => (
  <React.Suspense fallback={null}>
    <BlogLazy />
  </React.Suspense>
);

export { Blog };
