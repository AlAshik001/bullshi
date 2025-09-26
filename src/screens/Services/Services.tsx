import React from "react";
import { Button } from "../../components/ui/button";
import { ArrowLeft, BookOpen, Users, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

export const Services = (): JSX.Element => {
  const services = [
    {
      icon: <BookOpen className="w-16 h-16 text-white" />,
      title: "Video Lectures",
      description: "Comprehensive video lectures covering all 19 MBBS subjects with expert faculty",
      features: ["HD Quality Videos", "Downloadable Content", "24/7 Access", "Mobile Friendly"]
    },
    {
      icon: <Users className="w-16 h-16 text-white" />,
      title: "Expert Faculty",
      description: "Learn from experienced medical professionals and renowned educators",
      features: ["Qualified Doctors", "Teaching Experience", "Subject Specialists", "Interactive Sessions"]
    },
    {
      icon: <Clock className="w-16 h-16 text-white" />,
      title: "Flexible Scheduling",
      description: "Book sessions at your convenience with our flexible timing options",
      features: ["Choose Your Time", "Reschedule Options", "Weekend Classes", "Emergency Sessions"]
    }
  ];

  const subjects = [
    "Anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology",
    "Microbiology", "Forensic Medicine", "Community Medicine", "Medicine",
    "Surgery", "Obstetrics & Gynecology", "Pediatrics", "Orthopedics",
    "ENT", "Ophthalmology", "Dermatology", "Psychiatry", "Radiology", "Anesthesia"
  ];

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      year: "Final Year MBBS",
      rating: 5,
      comment: "The video lectures helped me understand complex topics easily. The faculty is amazing!"
    },
    {
      name: "Rahul Kumar",
      year: "3rd Year MBBS",
      rating: 5,
      comment: "Flexible scheduling allowed me to balance studies with clinical postings perfectly."
    },
    {
      name: "Sneha Patel",
      year: "2nd Year MBBS",
      rating: 5,
      comment: "Best investment for my medical education. Highly recommend to all MBBS students."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link to="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="w-6 h-6" />
              <span className="text-lg font-semibold">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Helping MBBS</h1>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive learning solutions designed specifically for MBBS students to excel in their medical education journey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">All 19 MBBS Subjects Covered</h2>
            <p className="text-xl text-gray-600">Complete coverage of your entire MBBS curriculum</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 text-center hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 cursor-pointer">
                <span className="text-gray-800 font-medium">{subject}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Real feedback from real medical students</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm">{testimonial.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Excel in Your MBBS Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of medical students who have transformed their learning experience with our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
              Start Free Trial
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Helping MBBS</span>
              </div>
              <p className="text-gray-400">Empowering medical students to achieve excellence in their MBBS journey.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Video Lectures</li>
                <li>Expert Faculty</li>
                <li>Flexible Scheduling</li>
                <li>Study Materials</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>helpingmbbs@gmail.com</p>
                <p>+91 8825404647</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Helping MBBS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};