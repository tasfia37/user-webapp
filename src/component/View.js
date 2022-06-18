import React from "react";

export const View = ({ users }) => {
  return users.map((user) => (
    <tr key={user.FirstName + " " + user.LastName}>
      <td>{user.FirstName + " " + user.LastName}</td>
      <td>{user.Gender}</td>
      <td>{user.DateOfBirth}</td>
      <td>{user.Email}</td>
      <td>{user.Phone}</td>
    </tr>
  ));
};
