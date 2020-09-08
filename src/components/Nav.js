import React from "react";

function Nav() {
  return (
    <React.Fragment>
      <div id="nav">
        <div class="btn-group" role="group">
          <button class="btn btn-secondary">Home</button>
          <button class="btn btn-secondary">Notifications</button>
          <button class="btn btn-secondary">Messages</button>
        </div>
        <button id="tweet" class="btn btn-outline-info">Tweet</button>
        <input placeholder="Search" id="search" class="form-control input-md"></input>
      </div>
    </React.Fragment>
  );
}

export default Nav;