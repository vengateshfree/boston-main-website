import React from "react";

function Partner() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-[#0D47A1] via-[#1565C0] to-[#00ACC1] overflow-hidden text-white">

      {/* Glow Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#26C6DA] opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0D47A1] opacity-30 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Partner With Us?
          </h2>

          <p className="mt-6 text-lg text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            The global IT automation and Infrastructure as Code (IaC) market 
            is projected to exceed
          </p>

          <div className="mt-6 text-5xl md:text-6xl font-extrabold text-[#26C6DA]">
            $25+ Billion by 2030
          </div>
        </div>

        {/* Target Segments */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Academic Institutions */}
          <div className="group backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-2xl shadow-xl hover:scale-105 transition duration-500">
            <div className="text-5xl mb-6">🎓</div>

            <h3 className="text-2xl font-semibold mb-4">
              Academic Research Institutions
            </h3>

            <p className="text-cyan-100 leading-relaxed">
              We provide specialized infrastructure tailored for high-level 
              research environments — enabling secure experimentation, 
              scalable compute, and seamless collaboration.
            </p>

            <div className="mt-6 h-1 w-16 bg-[#26C6DA] rounded-full group-hover:w-24 transition-all duration-500"></div>
          </div>

          {/* Mid-Market Enterprises */}
          <div className="group backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-2xl shadow-xl hover:scale-105 transition duration-500">
            <div className="text-5xl mb-6">🏢</div>

            <h3 className="text-2xl font-semibold mb-4">
              Mid-Market Enterprises
            </h3>

            <p className="text-cyan-100 leading-relaxed">
              We deliver enterprise-grade automation, observability, and 
              proactive infrastructure insights — without the traditional 
              enterprise-level cost and complexity.
            </p>

            <div className="mt-6 h-1 w-16 bg-[#26C6DA] rounded-full group-hover:w-24 transition-all duration-500"></div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Partner;
