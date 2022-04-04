import React from "react";
import User from "./User";

function Users() {
  const UserList = [
    {
      id: 1,
      name: "monika",
      age: 29,
    },
    {
      id: 2,
      name: "sharad",
      age: 29,
    },
    {
      id: 3,
      name: "Suma",
      age: 29,
    },
    {
      id: 4,
      name: "Gaanavi",
      age: 29,
    },
    {
      id: 5,
      name: "Abhijeet",
      age: 29,
    },
    { id: 6, name: "Hello", age: 50 },
  ];
  return (
    <div>
      <h1>This is a parent</h1>
      {UserList.map((user) => {
        return <User key={user.id} name={user.name} age={user.age} />;
      })}
    </div>
  );
}

export default Users;
