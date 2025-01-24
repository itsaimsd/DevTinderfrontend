// import React from "react";

// const UserCard = ({ user }) => {
//   const { firstName, lastName, photoUrl, age, gender, about } = user;

//   return (
//     <div className="card bg-base-300 w-96 shadow-xl">
//       <figure>
//         <img src={user.photoUrl} alt="Photo" />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{firstName + " " + lastName}</h2>
//         {age && gender && <p>{age + ", " + gender}</p>}
//         <p>{about}</p>
//         <div className="card-actions justify-around my-4">
//           <button className="btn btn-primary">Ignore</button>
//           <button className="btn btn-secondary">Interested</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserCard;

import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about } = user;

  return (
    <div className="card w-96 bg-base-200 shadow-xl">
      <figure className="h-56 overflow-hidden">
        <img
          src={photoUrl}
          alt={`${firstName}'s Photo`}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title text-2xl font-bold">
          {firstName} {lastName}
        </h2>
        {age && gender && (
          <p className="text-gray-500 text-sm">
            <span className="font-semibold">Age:</span> {age},{" "}
            <span className="font-semibold">Gender:</span> {gender},{" "}
          </p>
        )}

        <p className="text-gray-700 mt-2">
          {about || "No additional information available."}
        </p>
        <div className="card-actions justify-center mt-4">
          <button className="btn btn-primary w-28">Ignore</button>
          <button className="btn btn-secondary w-28">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
