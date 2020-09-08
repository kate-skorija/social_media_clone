import React from "react";
import Profile from "./Profile";
import Posts from "./Posts";
import Contacts from "./Users";

function ContentContainer() {
  return (
    <React.Fragment>
      <div class="row">
        <div class="col-md-3">
          <Profile />
        </div>
        <div class="col-md-6">
          <Posts />
        </div>
        <div class="col-md-3">
          <Contacts />
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContentContainer;