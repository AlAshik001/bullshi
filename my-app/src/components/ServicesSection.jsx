// src/components/ServicesSection.jsx
export default function ServicesSection() {
  return (
    <section className="p-10 text-center bg-white">
      <h3 className="text-2xl font-bold text-blue-700 mb-6">Our Services</h3>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full">
          {/* 🔹 Service Icon */}
          <img src="/service-icon.png" alt="Service Icon" className="w-10 h-10" />
        </div>
        <p className="max-w-lg text-gray-600">
          We would like to lend a helping hand in the process of clearing all the 19 subjects. Video lectures at your fingertips!
        </p>
      </div>
    </section>
  );
}
