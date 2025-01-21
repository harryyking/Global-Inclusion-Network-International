"use client"
import { useState } from 'react';

export default function MissionVision() {
  const [isHovered, setIsHovered] = useState(false);

  const coreValues = [
    "Inclusivity",
    "Empowerment",
    "Innovation",
    "Compassion",
    "Excellence"
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Mission & Vision */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Vision Card */}
            <div className="card bg-white border shadow-secondary shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="card-body">
                <h2 className="card-title text-3xl font-bold text-secondary flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Our Vision
                </h2>
                <p className="text-lg leading-relaxed">
                  To dismantle societal myths surrounding disability and establish an inclusive platform where every child
                  with a disability not only thrives but also emerges as a valuable contributor to society.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="card bg-white border shadow-primary shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="card-body">
                <h2 className="card-title text-3xl font-bold text-primary flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Our Mission
                </h2>
                <p className="text-lg leading-relaxed">
                  To increase public awareness and understanding of disabilities while providing tailored support systems
                  to empower each child to integrate fully into society and achieve their potential.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Image */}
          <div 
            className="relative group rounded-2xl overflow-hidden shadow-2xl transition-all duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="https://images.pexels.com/photos/9968379/pexels-photo-9968379.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Children together"
              className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay with Core Values */}
            <div className={`absolute inset-0 bg-gradient-to-t from-base-300/90 to-transparent
              flex items-end justify-center p-8 transition-opacity duration-500
              ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-primary">Our Core Values</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {coreValues.map((value, index) => (
                    <span
                      key={value}
                      className="badge badge-primary badge-lg font-medium p-4 transition-all duration-300"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
                        opacity: isHovered ? 1 : 0,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}