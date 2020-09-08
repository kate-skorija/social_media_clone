import React from "react";
import UserList from "./UserList"

function Users() {
  return (
    <React.Fragment>
      <div class="column">
        <div id="users">
          <div class="row">
            <h3>Lorem Ipsum</h3>
          </div>
          <UserList />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Users;