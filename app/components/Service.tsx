import React from "react";

function Service() {
  const services = [
    {
      title: "Data Centre Infrastructure",
      desc: "Design and management of robust, scalable physical and virtual environments.",
      icon: "🏢",
    },
    {
      title: "Next Gen Application Development",
      desc: "Building modern, high-performance web and software applications.",
      icon: "💻",
    },
    {
      title: "AI & GenAI Application Development",
      desc: "Integrating cutting-edge artificial intelligence to create intelligent, automated workflows.",
      icon: "🤖",
    },
    {
      title: "VPS Cloud & Hosting Services",
      desc: "Reliable, high-availability hosting solutions tailored to your workload.",
      icon: "☁️",
    },
    {
      title: "Hybrid Cloud Migration",
      desc: "Expert guidance in migrating workloads from public cloud environments to secure hybrid cloud architectures.",
      icon: "🔄",
    },
    {
      title: "Network Management",
      desc: "End-to-end oversight of network performance, security, and connectivity.",
      icon: "🌐",
    },
    {
      title: "Training & Collaboration",
      desc: "Empowering your teams through technical training and collaborative development models.",
      icon: "🎓",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      
      {/* Soft Background Accent */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#26C6DA] opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1565C0] opacity-10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D47A1]">
            Comprehensive Services & Solutions
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Beyond our product suite, we provide expert services to handle the 
            most demanding technical requirements — from infrastructure to 
            AI-powered innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="text-4xl mb-5">{service.icon}</div>

              <h3 className="text-xl font-semibold text-[#0D47A1] mb-4 group-hover:text-[#1565C0] transition">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>

              {/* Accent Line */}
              <div className="mt-6 h-1 w-12 bg-gradient-to-r from-[#1565C0] to-[#26C6DA] rounded-full group-hover:w-20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
