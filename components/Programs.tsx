"use client"
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    title: "The Autism Conference",
    date: "March 15, 2024",
    time: "9:00 AM - 12:00 PM",
    location: "GINI Community Center",
    description: "Interactive workshop focusing on early childhood development strategies and support systems.",
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Annual Free Health Screening",
    date: "April 2, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "City Sports Complex",
    description: "A day of adaptive sports and activities promoting physical fitness and teamwork.",
    image: "https://images.pexels.com/photos/8612900/pexels-photo-8612900.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "School Outreaches",
    date: "March 20, 2024",
    time: "6:30 PM - 8:00 PM",
    location: "Virtual Meeting",
    description: "Monthly meeting for parents to share experiences and receive professional guidance.",
    image: "https://images.pexels.com/photos/8613335/pexels-photo-8613335.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },

];

export default function EventsCarousel() {

  return (
    <section className="py-20 bg-base-100" id='#events'>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Upcoming Events & Programs</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-base-content/80">Join us in making a difference through our various programs and events</p>
        </div>

       

          {/* Cards Container */}
          <div
            className="overflow-hidden px-4 grid grid-cols-1 lg:grid-cols-3 "
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
            >
              {events.map((event, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="card bg-base-100 shadow-xl h-full lg:w-96">
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </div>
    </section>
  );
}