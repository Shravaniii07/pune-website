// import React from 'react'

// export const Home = () => {
//   return (
    
//     <div className='p-10 text-center pt-24'>
//         <h1 className='text-4xl font-bold'>Welcome To Pune</h1>
//         <p className='mt-4'>
//             Explore famous places,history and culture of pune.
//         </p>
//     </div>
//   );
// }

// export default Home;


import React from "react";

const Home = () => {
  return (
    <div className="pt-20">

      {/* 🔥 HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://thumbs.dreamstime.com/b/pune-skyline-color-buildings-blue-sky-vector-illustration-business-travel-tourism-concept-historic-93385016.jpg')",
        }}
      >

        <div className="absolute w-full h-full bg-black opacity-50"></div>

        <div className="relative flex flex-col 
                        items-center justify-center 
                        h-full text-white text-center">

          <h1 className="text-6xl font-bold mb-6">
            Discover Pune
          </h1>

          <p className="text-xl mb-8">
            Explore History, Culture and Beautiful Destinations
          </p>

          <button className="bg-orange-500 px-8 py-3 rounded-lg 
                             text-black hover:bg-orange-600 transition">
            Explore Now
          </button>
        </div>
      </section>


      {/* 🏛 ABOUT SECTION */}
      <section className="py-20 bg-gray-100 text-center px-10">
        <h2 className="text-4xl font-bold mb-6 text-orange-500">
          About Pune
        </h2>
        <p className="max-w-3xl mx-auto text-lg">
          Pune is known as the cultural capital of Maharashtra.
          It is famous for education, forts, history and
          beautiful hill stations.
        </p>
      </section>


      {/* 🌄 POPULAR PLACES */}
      <section className="py-20 bg-white px-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Places
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
            <img 
              src="https://i0.wp.com/theunstumbled.com/wp-content/uploads/2025/08/ganesh-chaturthi-in-pune.jpg?fit=1200%2C817&ssl=1"
              alt=""
              className="h-60 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Dagdusheth Halwai Ganpati.</h3>
              <p className="mt-3">
                Important place fro Devotees.
              </p>
            </div>
          </div>

          <div className="shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
            <img 
              src="https://media3.thrillophilia.com/filestore/lgm8jxez59s9adpk07o0kz96st1d_1524317419_Shaniwar_Wada_Palace.jpg?w=400&dpr=2"
              alt=""
              className="h-60 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Shaniwar Wada</h3>
              <p className="mt-3">
                Historic fort built in 1732.
              </p>
            </div>
          </div>

          <div className="shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
            <img 
              src="https://awesomeplaces.blog/wp-content/uploads/2019/07/rc037a2100.jpg?w=750"
              alt=""
              className="h-60 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Sinhagad Fort</h3>
              <p className="mt-3">
                Famous for Tanaji Malusare battle.
              </p>
            </div>
          </div>

          <div className="shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
            <img 
              src="https://s7ap1.scene7.com/is/image/incredibleindia/aga-khan-palace-pune-maharashtra-2-attr-hero?qlt=82&ts=1742168980767"
              alt=""
              className="h-60 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Aga Khan Palace</h3>
              <p className="mt-3">
                Important place in Indian freedom history.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* 🖼 GALLERY SECTION */}
      <section className="py-20 bg-gray-100 px-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="https://media.holidify.com/images/cmsuploads/compressed/baps-shree-swaminarayan-mandir-pune-tourism-entry-fee-timings-holidays-reviews-header_20250130093022.jpg"
               className="rounded-lg hover:scale-105 transition" />
          <img src="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/tourist-places-in-pune.jpg"
               className="rounded-lg hover:scale-105 transition" />
          <img src="https://s7ap1.scene7.com/is/image/incredibleindia/shinde%20chatri-pune-maharashtra-hero?qlt=82&ts=1742194797332"
               className="rounded-lg hover:scale-105 transition" />
          <img src="https://i0.wp.com/theunstumbled.com/wp-content/uploads/2025/08/ganesh-chaturthi-in-pune.jpg?fit=1200%2C817&ssl=1"
               className="rounded-lg hover:scale-105 transition" />
        </div>
      </section>


      {/* 🔻 FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        <p>© 2026 Pune Tourism | All Rights Reserved</p>
      </footer>

    </div>
  );
};

export default Home;
