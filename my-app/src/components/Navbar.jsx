// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        {/* 🔹 Replace with your logo */}
        <img src="/picture1.png" alt="Logo" className="w-10 h-10" />
        <span className="text-xl font-bold text-blue-600">Helping MBBS</span>
      </div>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><a href="#home" className="hover:text-blue-600">Home</a></li>
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#join" className="hover:text-blue-600">Join Us</a></li>
      </ul>
    </nav>
  );
}
