import React from "react";
import {
  Users,
  Lightbulb,
  ShieldCheck,
  BookOpen,
  Handshake,
  Scale,
  Layers,
} from "lucide-react";

const CoreValues = () => {
  const coreValues = [
    { name: "Inclusivity", icon: Users },
    { name: "Empowerment", icon: Lightbulb },
    { name: "Advocacy", icon: ShieldCheck },
    { name: "Education", icon: BookOpen },
    { name: "Collaboration", icon: Handshake },
    { name: "Equity", icon: Scale },
    { name: "Diversity", icon: Layers },
  ];

  return (
    <section className="bg-base-100">

    <div className="max-w-4xl mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold mb-8 text-primary">Our Core Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
          >
            <value.icon className="text-orange-500 w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-black">{value.name}</h3>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default CoreValues;
