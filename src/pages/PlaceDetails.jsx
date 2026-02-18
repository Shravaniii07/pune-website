// import React from 'react'

// export const PlaceDetails = () => {
//   return (
//     <div>PlaceDetails</div>
//   )
// }

import React from "react";
import { useParams } from "react-router-dom";

const PlaceDetails = () => {
  const { id } = useParams();

  let content = "";

  if (id === "1") {
    content = "Shaniwar Wada was built in 1732 by the Peshwas.";
  } else if (id === "2") {
    content = "Sinhagad Fort is famous for Tanaji Malusare battle.";
  }

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold">Place Details</h2>
      <p className="mt-4">{content}</p>
    </div>
  );
};

export default PlaceDetails;
