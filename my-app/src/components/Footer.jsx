// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-10">
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold text-lg">Need Help?</h4>
          <button className="mt-2 bg-blue-600 px-4 py-2 rounded-lg">Contact Us</button>
        </div>
        <div>
          <h4 className="font-bold text-lg">General Enquiries</h4>
          <p>support@helpingmbbs.com</p>
        </div>
        <div>
          <h4 className="font-bold text-lg">Social Media</h4>
          {/* 🔹 Replace with icons */}
          <div className="flex space-x-4 mt-2">
            <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
            <img src="/twitter.png" alt="Twitter" className="w-6 h-6" />
            <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
