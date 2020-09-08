import React from "react";
import Post from "./Post";

const masterPostList = [
  {
    name: 'Lorem Ipsum',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et odio pellentesque diam volutpat commodo.'
  },
  {
    name: 'Lorem Ipsum',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et odio pellentesque diam volutpat commodo.'
  },
  {
    name: 'Lorem Ipsum',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et odio pellentesque diam volutpat commodo.'
  },
  {
    name: 'Lorem Ipsum',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et odio pellentesque diam volutpat commodo.'
  },
  {
    name: 'Lorem Ipsum',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et odio pellentesque diam volutpat commodo.'
  }
];

function PostList() {
  return (
    <React.Fragment>
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