import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [posts, setPosts] = useState({});

  const fetchPost = async () => {
    const res = await axios.get("http://posts.com/posts");
    

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  console.log(posts);

  const renderedPosts = Object.values(posts).map(post => {
    return (
      <div
        classname="card"
        style={{ width: '30%', marginBottom: '20px' }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList comments={post.comments}></CommentList>
          <CommentCreate postId={post.id}></CommentCreate>
          
        </div>
      </div>
    );
  });

  return(
    <div className="d-flex flex-row flex-wrap justify-content-between">
    {renderedPosts}
    </div>
  );
    
  
};
