import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Menu, X } from "lucide-react";

export const MacbookProMobile = ()=> {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const serviceSteps = [
    {
      icon: "/mask-group.png",
      title: "Our Services",
      description: (
        <>
          we would like to lend the helping hand in the process of clearing all
          the <span className="text-[#0629b3] font-semibold">19 subjects</span> through the four year course. Video
          lectures on each topic of preferrable subjects at your comfortable
          time on your finger tips!
        </>
      ),
    },
    {
      icon: "/mask-group-1.png",
      title: "Our Mission",
      description:
        "Guide through your difficulties and challenges of competency based medical education.",
    },
  ];

  const appSteps = [
    "Log in with your personal credentials",
    "Enter the subject and topic name of your choice",
    "Select your favourite lecturer",
    "Book your slot with date and time through online chat",
  ];
  
  const socialMedia = [
      { name: 'Instagram', icon: "/mask-group-12.png" },
      { name: 'Facebook', icon: "/mask-group-10.png" },
      { name: 'Twitter', icon: "/mask-group-11.png" },
  ]
  return (
    <div className="bg-[#e9f5ff] w-full min-h-screen">
      {/* --- RESPONSIVE HEADER --- */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left Side: Logo and Title */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[linear-gradient(106deg,rgba(82,40,207,1)_16%,rgba(255,255,255,0.25)_50%,rgba(82,40,207,1)_90%)] flex items-center justify-center shrink-0">
                <img
                  className="w-[70%] h-[50%] object-contain"
                  alt="Logo"
                  src="/mask-group-9.png"
                />
              </div>
              <h1 className="font-semibold text-black text-xl md:text-2xl [font-family:'Inter',Helvetica]">
                Helping MBBS
              </h1>
            </Link>

            {/* Center: Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              <Link to="/" className="text-lg text-black hover:text-[#0e70c9] transition-colors">
                Home
              </Link>
              <Link to="#" className="text-lg text-[#0e70c9] font-semibold">
                About Us
              </Link>
              <Link to="/services" className="text-lg text-black hover:text-[#0e70c9] transition-colors">
                Join Us
              </Link>
            </nav>

            {/* Right Side: Profile Icon (Desktop) */}
            <div className="hidden md:block w-12 h-12 rounded-full bg-[linear-gradient(106deg,rgba(82,40,207,1)_16%,rgba(255,255,255,0.25)_50%,rgba(82,40,207,1)_90%)] shrink-0" />

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm pb-4">
            <nav className="flex flex-col items-center gap-4">
              <Link to="/" className="text-lg text-black hover:text-[#0e70c9] transition-colors">
                Home
              </Link>
              <Link to="#" className="text-lg text-[#0e70c9] font-semibold">
                About Us
              </Link>
              <Link to="/services" className="text-lg text-black hover:text-[#0e70c9] transition-colors">
                Join Us
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* --- RESPONSIVE HERO SECTION --- */}
        <section className="relative py-12 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(136deg,rgba(33,129,216,0.25)_29%,rgba(226,246,255,0.25)_58%,rgba(14,112,201,0.05)_100%)] -z-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-5xl md:text-7xl font-bold text-[#1e6670] [font-family:'ABeeZee',Helvetica]">
                  About Us
                </h2>
                <h3 className="mt-12 text-3xl md:text-4xl text-[#1e666f] opacity-85 [font-family:'Berlin_Sans_FB-Regular',Helvetica]">
                  Why It Started?
                </h3>
                <p className="mt-4 text-lg md:text-xl text-[#1e6670] opacity-65 [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica]">
                  Too many books to be covered within a short period of time...
                  clinical postings and theory classes taking our time...
                  "CBME" stressed out?
                </p>
              </div>
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  className="w-[300px] md:w-[450px] lg:w-[550px] object-cover"
                  alt="Indian man pointing"
                  src="/download-free-png-of-png-indian-man-pointing-smiling-finger---by.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- RESPONSIVE SERVICES & MISSION SECTION --- */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
          {serviceSteps.map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-shrink-0 w-32 h-32 bg-[#0e70c9] rounded-full flex items-center justify-center">
                <img className="w-16 h-16" alt="Icon" src={service.icon} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-[#555563] [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica]">
                  {service.title}
                </h3>
                <p className="mt-4 text-lg md:text-xl text-[#555563] opacity-75 [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </section>
        
        {/* --- RESPONSIVE HOW TO USE SECTION --- */}
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-shrink-0 w-32 h-32 bg-[#0e70c9] rounded-full flex items-center justify-center">
                    <img className="w-16 h-16" alt="Icon" src="/mask-group-2.png" />
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-[#555563] [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica]">
                        How to use the app
                    </h3>
                    <ul className="mt-4 space-y-2">
                        {appSteps.map((step, index) => (
                            <li key={index} className="flex items-start text-lg md:text-xl text-[#555563] opacity-75 [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica]">
                                <img src="/mask-group-3.png" alt="bullet" className="w-6 h-6 mr-3 mt-1"/>
                                <span>{step}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        {/* --- RESPONSIVE JOURNEY SECTION --- */}
        <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="hidden md:block absolute top-0 right-0 h-full w-1/2 bg-[#0e70c9] rounded-l-[75px]"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
                        <h2 className="text-5xl md:text-7xl font-bold text-[#555563] [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica]">
                            Your journey awaits
                        </h2>
                        <div className="flex justify-center md:justify-start">
                             <img className="w-24 h-24" alt="Arrows down" src="/mask-group-8.png" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-[#555563] [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica]">
                            Reserve your spot now!
                        </h2>
                    </div>
                    {/* Image with background */}
                    <div className="w-full md:w-1/2 flex justify-center relative h-[500px] md:h-auto">
                        <img
                          className="absolute inset-0 w-full h-full object-cover rounded-2xl z-0"
                          alt="Galaxy Background"
                          src="/rectangle-206.png"
                        />
                        <img
                          className="relative z-10 w-auto h-full max-h-[600px] object-contain"
                          alt="Phone mockup"
                          src="/white-iphone-16e-mockup-upper-left-view-label.png"
                        />
                    </div>
                </div>
                 <div className="mt-12 text-center">
                    <Button className="bg-white text-[#555563] text-2xl md:text-3xl font-bold px-12 py-6 rounded-full h-auto shadow-lg hover:bg-gray-100 transition [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica]">
                        Book Now !
                    </Button>
                </div>
            </div>
        </section>
      </main>

      {/* --- RESPONSIVE FOOTER --- */}
      <footer className="bg-[#0e70c9] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center md:text-left">
                {/* Need Help */}
                <div className="space-y-4">
                    <h3 className="text-4xl font-semibold [font-family:'Barlow',Helvetica]">Need Help?</h3>
                    <p className="text-lg [font-family:'Inter',Helvetica]">Contact us, and we'll respond to you promptly</p>
                    <Button className="bg-white text-black text-lg px-6 py-2 rounded-lg h-auto hover:bg-gray-200">Get in Touch</Button>
                </div>
                {/* General Enquiries */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold [font-family:'Inter',Helvetica]">General Enquiries</h3>
                    <div className="text-lg opacity-80">
                        <p>Email</p>
                        <a href="mailto:helpingmbbs@gmail.com" className="hover:underline">helpingmbbs@gmail.com</a>
                    </div>
                     <div className="text-lg opacity-80">
                        <p>Phone</p>
                        <a href="tel:+918825404647" className="hover:underline">+91 8825404647</a>
                    </div>
                </div>
                {/* Social Media */}
                 <div className="space-y-4">
                    <h3 className="text-2xl font-semibold [font-family:'Inter',Helvetica]">Social Media</h3>
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        {socialMedia.map(social => (
                             <a key={social.name} href="#" className="flex items-center gap-3 text-lg opacity-80 hover:opacity-100">
                                <img src={social.icon} alt={social.name} className="w-6 h-6"/>
                                <span>{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};