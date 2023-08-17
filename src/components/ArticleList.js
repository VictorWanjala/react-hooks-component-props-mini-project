import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList(props) {
  return (
    <div>
      <main>
       
        {blogData.posts.map((post, index) => (
          <Article
            key={index}
            title={post.title}
            date={post.date}
            preview={post.preview}
          />
        ))}
      </main>
    </div>
  );
}

export default ArticleList;
