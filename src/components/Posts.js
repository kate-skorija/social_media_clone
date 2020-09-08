import React from "react";

import PostList from "./PostList";

function Posts() {
  return (
    <React.Fragment>
      <div class="row">
        <input placeholder="What's happening?"></input>
      </div>
      <PostList />
    </React.Fragment>
  );
}

export default Posts;