export default function Hero() {
  return (
    <section 
      className="hero min-h-screen relative"
      style={{
        backgroundImage: "url(https://images.pexels.com/photos/9968379/pexels-photo-9968379.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="hero-overlay bg-gradient-to-r from-base-300/80 to-base-300/60"></div>
      
      <div className="hero-content text-neutral-content container mx-auto px-4">
        <div className="max-w-6xl">
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-block">
              <span className="badge badge-primary badge-lg font-medium">Making a Difference</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Empowering Every Child,
              <br className="hidden md:block" /> 
              <span className="text-primary">Regardless of Ability</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl max-w-2xl text-neutral-200">
              Global Inclusion Network International is dedicated to creating
              inclusive communities and unlocking the potential of children with disabilities.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn btn-primary btn-lg">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="btn btn-outline btn-lg text-neutral-content hover:text-base-300">
                Learn More
              </button>
            </div>

            {/* Stats Section */}
            <div className="stats stats-vertical md:stats-horizontal shadow bg-base-200/30 backdrop-blur-sm mt-8">
              <div className="stat">
                <div className="stat-title text-neutral-200">Children Helped</div>
                <div className="stat-value text-primary">25K+</div>
              </div>
              <div className="stat">
                <div className="stat-title text-neutral-200">Communities</div>
                <div className="stat-value text-primary">120</div>
              </div>
              <div className="stat">
                <div className="stat-title text-neutral-200">Success Rate</div>
                <div className="stat-value text-primary">92%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}