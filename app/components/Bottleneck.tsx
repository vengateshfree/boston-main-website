import React from "react";

function Bottleneck() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-[#0D47A1] via-[#1565C0] to-[#00ACC1]">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#26C6DA] opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0D47A1] opacity-30 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            The Innovation Bottleneck
          </h2>
          <p className="mt-6 text-lg text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Modern R&D and software development are frequently slowed by 
            complex, fragmented infrastructure. Teams waste valuable time on 
            repetitive manual tasks instead of focusing on innovation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-500">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Slow Setup
            </h3>
            <p className="text-cyan-100 leading-relaxed">
              Provisioning servers, desktops, and software stacks can take days 
              or even weeks, delaying innovation and productivity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-500">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Tool Sprawl
            </h3>
            <p className="text-cyan-100 leading-relaxed">
              Organizations juggle dozens of tools for provisioning, monitoring, 
              and security — creating inefficiency and confusion.
            </p>
          </div>

          {/* Card 3 */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-500">
            <h3 className="text-2xl font-semibold text-white mb-4">
              No Visibility
            </h3>
            <p className="text-cyan-100 leading-relaxed">
              A lack of centralized insight leads to wasted resources, 
              operational blind spots, and hidden security risks.
            </p>
          </div>

          {/* Card 4 */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-500">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Compliance Headaches
            </h3>
            <p className="text-cyan-100 leading-relaxed">
              Manual audit preparation is stressful and error-prone, 
              increasing compliance risks and operational pressure.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Bottleneck;
