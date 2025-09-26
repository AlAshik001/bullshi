// src/components/CTASection.jsx
export default function CTASection() {
  return (
    <section className="p-10 bg-gradient-to-r from-blue-100 to-blue-200 flex flex-col md:flex-row items-center justify-between">
      <div className="space-y-4 max-w-md">
        <h3 className="text-2xl font-bold text-blue-800">Your journey awaits</h3>
        <p className="text-gray-700">Reserve your spot now!</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700">
          Book Now
        </button>
      </div>
      {/* 🔹 Replace with phone mockup image */}
      <img src="/phone-mockup.png" alt="App Mockup" className="w-60 mt-6 md:mt-0" />
    </section>
  );
}
