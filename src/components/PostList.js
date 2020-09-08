import React from "react";
import Post from "./Post";

const masterPostList = [
  {
    name: 'Lorem Ipsum',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Lorem Ipsum',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Lorem Ipsum',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Lorem Ipsum',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Lorem Ipsum',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];

function PostList() {
  return (
    <React.Fragment>
      <hr/>
      {masterPostList.map((post, index) =>
        <Post image={post.image}
        name={post.name}
        post={post.post}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default PostList;