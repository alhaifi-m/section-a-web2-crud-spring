import React from 'react'
import Post from './Post'
const PostList = ({ post = [] }) => {
  console.log("I am in PostList", post);

  return (
      <ul>
          {Array.isArray(post) ? post.map((item) => (
              <Post post={item} key={item.id} />
          )) : <li>No posts available</li>}
      </ul>
  );
};

export default PostList;