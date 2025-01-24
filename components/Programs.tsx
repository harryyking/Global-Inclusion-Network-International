import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    title: "The Autism Conference",
    description: "Interactive workshop focusing on early childhood development strategies and support systems.",
    image: "https://utfs.io/f/cQKwx0ZpHag1thRUgz5iVBrlEPjFkzwSpOU2vfnJ8TdXoyea"
  },
  {
    title: "The Disability Conference",
    description: "An Educative Session focused on uncovering the myths, issues surrounding disabilities in children.",
    image: "https://utfs.io/f/cQKwx0ZpHag1ERlxmsDSsDmMR24pdXLOFicCunlJrU9ZvWzV"

  },
  {
    title: "Annual Free Health Screening",
    description: "Annual free screening and therapy for children with special needs in communities. This project aims to reduce the rate at which children with disabilities are hidden depriving them of the opportunities to have access to the right support.",
    image: "https://utfs.io/f/xQbdaz3ivwOM7lECNxPhtdKp4LJzmicGaMVXIBO692sgnvAq"
  },
  {
    title: "School Outreaches",
    description: "School outreaches to create more awareness on disabilities and scout for children who have any disabilities or difficulties to provide tailored support systems for them to thrive.",
    image: "https://images.pexels.com/photos/12448839/pexels-photo-12448839.jpeg?auto=compress&cs=tinysrgb&w=600"
  },

];

export default function EventsCarousel() {

  return (
    <section className="py-20 bg-base-100" id='#events'>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Events & Programs</h2>
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
                  <div className="card shadow-xl h-full lg:w-96">
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