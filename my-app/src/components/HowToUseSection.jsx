// src/components/HowToUseSection.jsx
export default function HowToUseSection() {
  const steps = [
    "Log in with your personal credentials",
    "Enter the subject and topic name of your choice",
    "Select your favourite lecturer",
    "Book your slot with date and time through online chat",
  ];

  return (
    <section className="p-10 bg-white">
      <h3 className="text-2xl font-bold text-blue-700 text-center mb-6">How to use the app</h3>
      <div className="flex flex-col items-center gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center space-x-4 max-w-lg">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-700 font-bold rounded-full">
              {index + 1}
            </div>
            <p className="text-gray-600">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
