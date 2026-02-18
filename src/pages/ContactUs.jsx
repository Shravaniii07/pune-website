import React from "react";

const ContactUs = () => {
  return (
    <div className="pt-24">

      {/* 🔥 Header Section */}
      <section className="bg-black text-white py-20 text-center w-250">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">
          We would love to hear from you!
        </p>
      </section>

      {/* 📩 Contact Form */}
      <section className="py-16 px-10 bg-gray-100">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-10">

          <form className="space-y-6">

            <div>
              <label className="block mb-2 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message"
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Send Message
            </button>

          </form>

        </div>
      </section>

      {/* 📍 Extra Contact Info */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">Visit Us</h2>
        <p>Pune, Maharashtra, India</p>
        <p>Email: info@punetourism.com</p>
        <p>Phone: +91 98765 43210</p>
      </section>

    </div>
  );
};

export default ContactUs;
