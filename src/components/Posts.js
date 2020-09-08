import React from "react";
import PostList from "./PostList";

function Posts() {
  return (
    <React.Fragment>
      <div class="column">
        
        <div id="posts">
        <div class="row" id="statusWrapper">
          <input id="status" placeholder="What's happening?"class="form-control"></input>
        </div>
          <PostList />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Posts;