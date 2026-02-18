import React from "react";

const AboutUs = () => {
  return (
    <div className="pt-24">

      {/* 🔥 Header Section */}
      <section className="bg-orange-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">About Pune</h1>
        <p className="text-lg">
          Cultural Capital of Maharashtra
        </p>
      </section>

      {/* 📖 About Content */}
      <section className="py-16 px-10 bg-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <img
            src="https://media.istockphoto.com/id/686866620/vector/pune-skyline-with-color-buildings-and-blue-sky.jpg?s=612x612&w=0&k=20&c=9qoCxka4eN-vMzL8sJ4vfX-X-L_BzTfIvEU62CMRt1A="
            alt="Pune"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4 text-orange-500">
              History & Culture
            </h2>
            <p className="text-lg mb-4">
              Pune has a rich history dating back to the Maratha Empire.
              It was the seat of the Peshwas and played an important
              role in India’s freedom movement.
            </p>

            <p className="text-lg">
              Today, Pune is known for its educational institutions,
              IT hubs, forts, temples, and beautiful landscapes.
            </p>
          </div>

        </div>
      </section>

      {/* 🌟 Mission Section */}
      <section className="py-16 bg-white text-center px-10">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Our mission is to showcase the beauty, history and culture of Pune
          through a simple and modern tourism website experience.
        </p>
      </section>

    </div>
  );
};

export default AboutUs;
