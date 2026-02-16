import React from "react";
import LightPillar from "./components/LightPillar";
import Hero from "./components/Hero";
import Image from "next/image";
import logo from "../public/images/logo.png";
import Bottleneck from "./components/Bottleneck";
import Suit from "./components/Suit";
import Service from "./components/Service";
import Partner from "./components/Partner";

function Page() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-black">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-5 w-full z-50">
        <div className="w-[90%] mx-auto backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center h-16">

              {/* Logo */}
              <div className="text-xl font-bold text-white">
            <div className="flex items-center gap-3">
  <Image 
    src={logo} 
    alt="Boston Tech India Logo" 
    className="h-14 w-auto object-contain" 
  />
  
  <div className="leading-tight">
    <span className="block text-xl font-bold text-white">
      Boston Tech
    </span>
    <span className="block text-sm font-medium text-gray-300">
      India
    </span>
  </div>
</div>

              </div>

              {/* Links */}
              <div className="hidden md:flex space-x-8 text-white">
                <a href="#home" className="hover:text-purple-400 transition">
                  Home
                </a>
                <a href="#about" className="hover:text-purple-400 transition">
                  About
                </a>
                <a href="#services" className="hover:text-purple-400 transition">
                  Services
                </a>
                <a href="#contact" className="hover:text-purple-400 transition">
                  Contact
                </a>
              </div>

              {/* Button */}
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Get Started
              </button>

            </div>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section id="home" className="relative h-screen overflow-hidden">

        {/* LightPillar Background */}
        <div className="absolute inset-0 z-0">
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={1}
            rotationSpeed={0.3}
            glowAmount={0.002}
            pillarWidth={3}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={25}
            interactive={false}
            mixBlendMode="screen"
            quality="high"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 pt-12">
          <Hero />
        </div>
      </section>

      <Bottleneck />
      <Suit />
      <Service />
      
      <Partner />



       {/* Additional sections like Partner, Service, Suit can be added here */}
       {/* <Partner /> */}
       {/* <Service /> */}
       {/* <Suit /> */}

    </div>
  );
}

export default Page;
