"use client"
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    title: "Early Intervention Workshop",
    date: "March 15, 2024",
    time: "9:00 AM - 12:00 PM",
    location: "GINI Community Center",
    description: "Interactive workshop focusing on early childhood development strategies and support systems.",
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Inclusive Sports Day",
    date: "April 2, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "City Sports Complex",
    description: "A day of adaptive sports and activities promoting physical fitness and teamwork.",
    image: "https://images.pexels.com/photos/8612900/pexels-photo-8612900.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Parent Support Group",
    date: "March 20, 2024",
    time: "6:30 PM - 8:00 PM",
    location: "Virtual Meeting",
    description: "Monthly meeting for parents to share experiences and receive professional guidance.",
    image: "https://images.pexels.com/photos/8613335/pexels-photo-8613335.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Art Therapy Sessions",
    date: "March 25, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "GINI Art Studio",
    description: "Creative expression sessions helping children develop motor skills and emotional awareness.",
    image: "https://images.pexels.com/photos/8612797/pexels-photo-8612797.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Skills Development Program",
    date: "April 10, 2024",
    time: "1:00 PM - 3:00 PM",
    location: "Learning Center",
    description: "Specialized program focusing on life skills and vocational training for teenagers.",
    image: "https://images.pexels.com/photos/8613165/pexels-photo-8613165.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

export default function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  const handlePrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? events.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === events.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Upcoming Events & Programs</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-base-content/80">Join us in making a difference through our various programs and events</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrevious}
            className="btn btn-circle btn-primary absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={handleNext}
            className="btn btn-circle btn-primary absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div 
            ref={containerRef}
            className="overflow-hidden px-4"
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
              onTransitionEnd={() => setIsAnimating(false)}
            >
              {events.map((event, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="card bg-base-100 shadow-xl h-full">
                    <figure className="relative h-64">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                    <div className="card-body">
                      <h3 className="card-title text-2xl font-bold text-primary">
                        {event.title}
                      </h3>
                      <p className="text-base-content/80 mb-4">{event.description}</p>
                      <div className="space-y-2 text-base-content/70">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div className="card-actions justify-end mt-4">
                        <button className="btn btn-primary">Register Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-primary' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}