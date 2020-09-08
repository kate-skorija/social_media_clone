import React from "react";
import UserHeader from "./UserHeader"
import Bio from "./Bio"

function Profile() {
  return (
    <React.Fragment>
      <div class="row">
        <UserHeader />
      </div>
      <div class="row">
        <Bio />
      </div>
    </React.Fragment>
  );
}

export default Profile;