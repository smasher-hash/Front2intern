"use client";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

          {/* Left */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Quality Healthcare for a Better Tomorrow
            </h1>
            <p className="mt-6 text-lg md:text-xl opacity-90">
              Trusted healthcare professionals dedicated to your well-being.
              Book appointments, consult doctors, and access medical services
              instantly.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-gray-100 transition">
                Book Appointment
              </button>

              <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPXUWm53S2VOi3_QqX-yKmFGjPyoAYNRkug&s"
              alt="Healthcare Illustration"
              className="w-80 md:w-[380px]"
            />
          </div>

        </div>
      </section>

      {/* ---------------- SERVICES SECTION ---------------- */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Healthcare Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">24/7 Emergency Care</h3>
              <p className="text-gray-700">
                Immediate medical assistance from our dedicated emergency team.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">Online Consultation</h3>
              <p className="text-gray-700">
                Talk to certified doctors from anywhere — anytime.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">Diagnostic Services</h3>
              <p className="text-gray-700">
                World-class lab tests and diagnostics for accurate results.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg"
            className="rounded-2xl shadow-lg"
            alt="doctor"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6">About Our Hospital</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              We are committed to providing advanced medical care with compassion.
              Our team of highly trained doctors and nurses ensure that every
              patient receives personalized attention.
            </p>

            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
              Read More
            </button>
          </div>

        </div>
      </section>

      {/* ---------------- CONTACT SECTION ---------------- */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help? Contact Us
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our team is available to assist you with any medical queries,
            appointment bookings, or emergency support.
          </p>

          <div className="mt-6">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="py-8 bg-gray-900 text-center text-gray-300">
        © {new Date().getFullYear()} My Healthcare Site — All Rights Reserved.
      </footer>
    </main>
  );
}

