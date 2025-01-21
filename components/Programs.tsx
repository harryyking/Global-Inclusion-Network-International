import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    title: "The Autism Conference",
    description: "Interactive workshop focusing on early childhood development strategies and support systems.",
    image: "https://utfs.io/f/cQKwx0ZpHag1thRUgz5iVBrlEPjFkzwSpOU2vfnJ8TdXoyea"
  },
  {
    title: "Annual Free Health Screening",
    
    description: "A day of adaptive sports and activities promoting physical fitness and teamwork.",
    image: "https://media.istockphoto.com/id/1129628379/photo/doctor-meet-african-child.jpg?b=1&s=612x612&w=0&k=20&c=mjYnj42AZOx4-dhpzQG8l7vZq4uyWYrOk1jWJY23hxk="
  },
  {
    title: "School Outreaches",
    description: "Monthly meeting for parents to share experiences and receive professional guidance.",
    image: "https://images.pexels.com/photos/12448839/pexels-photo-12448839.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                className="px-4 grid grid-cols-1 lg:grid-cols-3 gap-4"
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
        
      </div>
    </section>
  );
}