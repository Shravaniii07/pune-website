// import React from 'react'
// import { Link } from "react-router-dom";
// import places from "../data/placesData";

// export const Places = () => {
//   return (
//     <div className="p-10">
//       <h2 className="text-3xl font-bold">Famous Places</h2>

//       <ul className="mt-4 space-y-2">
//         <li>
//           <Link to="/places/1" className="text-blue-600">
//             Shaniwar Wada
//           </Link>
//         </li>
//         <li>
//           <Link to="/places/2" className="text-blue-600">
//             Sinhagad Fort
//           </Link>
//         </li>
//       </ul>
//     </div>
//   )
// }

// export default Places;
import React from "react";

const places = [
   {
    name: "Dagdusheth Temple",
    image: "https://i0.wp.com/theunstumbled.com/wp-content/uploads/2025/08/ganesh-chaturthi-in-pune.jpg?fit=1200%2C817&ssl=1",
    website: "https://www.dagdushethganpati.com/",
  },
  {
    name: "Shaniwar Wada",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/shaniwar-wada-pune-maharashtra-1-attr-hero?qlt=82&ts=1742184639448",
    website: "https://en.wikipedia.org/wiki/Shaniwar_Wada",
  },
  {
    name: "Sinhagad Fort",
    image: "https://static2.tripoto.com/media/filter/tst/img/1580119/TripDocument/1584183757_1584183738460.jpg",
    website: "https://en.wikipedia.org/wiki/Sinhagad",
  },
  {
    name: "Aga Khan Palace",
    image: "https://www.royalorchidhotels.com/images/Blog/04_Nov_2022_02_31_50aga-khan-palace-pune-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    website: "https://en.wikipedia.org/wiki/Aga_Khan_Palace",
  },
];

<div className="flex justify-center mt-12">
  <a
    href="https://www.maharashtratourism.gov.in/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition duration-300">
      Visit More
    </button>
  </a>
</div>




const Places = () => {
  return (
    <div className="pt-24 bg-gray-100 min-h-screen px-10 pb-20">

      <h1 className="text-4xl font-bold text-center text-orange-500 mb-12">
        Explore Famous Places in Pune
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {places.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={place.image}
              alt={place.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-5 text-center">
              <h2 className="text-xl font-semibold mb-4">
                {place.name}
              </h2>

              <a
                href={place.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Visit Website
              </a>
            </div>
            
          </div>
        ))}

      </div>
<div className="flex justify-center mt-16">
        <a
          href="https://www.maharashtratourism.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-orange-500 text-white px-10 py-4 rounded-lg hover:bg-orange-600 transition duration-300 text-lg">
            Visit More
          </button>
        </a>
      </div>
    </div>
  );
};

export default Places;
