import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const AllCard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="grid grid-cols-3 gap-6 p-6 mx-auto">
      {users.map((user) => (
        <Cards key={user.id} user={user} remove={handleRemove} />
      ))}
    </div>
  );
};

export default AllCard;
