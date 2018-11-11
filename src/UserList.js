import React from "react";

export const UserList = props => {
  return (
    <ul className="user-list">
      {props.users.map(user => (
        <li>
          <img src={user.avatarUrl} />
          {user.name}
        </li>
      ))}
    </ul>
  );
};
