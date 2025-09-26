// src/components/MissionSection.jsx
export default function MissionSection() {
  return (
    <section className="p-10 text-center bg-blue-50">
      <h3 className="text-2xl font-bold text-blue-700 mb-6">Our Mission</h3>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full">
          {/* 🔹 Mission Icon */}
          <img src="/mission-icon.png" alt="Mission Icon" className="w-10 h-10" />
        </div>
        <p className="max-w-lg text-gray-600">
          Guide students through difficulties and challenges of competency-based medical education.
        </p>
      </div>
    </section>
  );
}
