// src/components/AboutSection.jsx
export default function AboutSection() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center p-10 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-blue-800">About Us</h2>
        <p className="text-gray-700">
          We aim to lend a helping hand in the process of clearing all the 19 subjects taught in the first-year course.
          Video lectures are delivered by professional experts at your convenience.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        {/* 🔹 Replace with your About Us image */}
        <img src="/about-us.png" alt="About Us" className="rounded-xl shadow-lg max-h-80" /> 
      </div>
    </section>
  );
}
