import React from "react";

const Cards = ({ user, remove }) => {
  const handleRemove = () => {
    remove(user.id);
  };
  return (
    <div>
      <div className="card w-full bg-base-100 rounded shadow-xl">
        <div className="p-2">
          <div className="text-center">
            <h2 className="text-lg font-bold">{user.name}</h2>
            <h2 className="">mail: {user.email}</h2>
          </div>
          <div className="p-6">
            <div className="flex justify-between mb-2">
              <h2 className="">Cell: {user.phone.slice(0,14)}</h2>
              <h2 className="">Website: {user.website}</h2>
            </div>
            <p className="font-bold">Address :</p>
            <div className="flex justify-between">
              <div>
                <p>Street: {user.address.street}</p>
                <p>Suite: {user.address.suite}</p>
              </div>
              <div>
                <p>City: {user.address.city}</p>
                <p>Zipcode:{user.address.zipcode}</p>
              </div>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={handleRemove}
              className=" bg-red-400 px-2 py-1 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
