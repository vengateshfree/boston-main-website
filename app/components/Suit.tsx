import React from "react";

function Suit() {
  const pillars = [
    {
      icon: "🚀",
      title: "One-Touch Provisioning",
      capability:
        "Automate OS, application, and Kubernetes/OpenShift deployments on any hardware or VM.",
      benefit:
        "Accelerate Time-to-Value: Go from idea to a functional environment in minutes.",
    },
    {
      icon: "📊",
      title: "One-Dashboard Monitoring",
      capability:
        "Get real-time, unified visibility into system health and utilization across all labs and servers.",
      benefit:
        "Optimize Resources: Eliminate waste and forecast infrastructure needs.",
    },
    {
      icon: "🔐",
      title: "Access Level Control",
      capability:
        "Implement granular, role-based access control (RBAC) to enforce security policies effortlessly.",
      benefit:
        "Minimize Risk: Ensure the right people have the right access at the right time.",
    },
    {
      icon: "🛡️",
      title: "Compliance Automation",
      capability:
        "Automate continuous monitoring and auditing for PCI, SOC 2, and HIPAA standards.",
      benefit:
        "Effortless Governance: Turn stressful audit prep into an automated background process.",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-[#0D47A1] via-[#1565C0] to-[#00ACC1] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#26C6DA] opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#0D47A1] opacity-30 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Flagship Product
          </h2>
          <h3 className="mt-4 text-3xl font-semibold text-[#26C6DA]">
            Catalyst Suite
          </h3>
          <p className="mt-6 max-w-3xl mx-auto text-cyan-100 text-lg leading-relaxed">
            An advanced observability platform and integrated suite that transforms
            complex infrastructure management into a seamless, one-touch experience.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition duration-500"
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h4 className="text-2xl font-semibold text-white mb-4">
                {item.title}
              </h4>

              <div className="mb-4">
                <p className="text-sm uppercase tracking-wider text-[#26C6DA] font-semibold">
                  Capability
                </p>
                <p className="text-cyan-100 mt-2 leading-relaxed">
                  {item.capability}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-[#26C6DA] font-semibold">
                  Key Benefit
                </p>
                <p className="text-white mt-2 font-medium leading-relaxed">
                  {item.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Suit;
