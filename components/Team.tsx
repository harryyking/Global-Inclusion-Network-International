import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Founder & Executive Director",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bio: "With over 15 years of experience in special education, Dr. Johnson founded GINI with a vision to create inclusive spaces for children of all abilities. Her work has been recognized internationally.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@gini.org"
    }
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bio: "Leading GINI's technological initiatives, Michael brings 10+ years of experience in developing accessible digital solutions and adaptive technologies for special needs education.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@gini.org"
    }
  },
  {
    name: "Amanda Martinez",
    role: "Partnerships & Outreach Officer",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bio: "Amanda specializes in building meaningful partnerships and community engagement. Her work has helped GINI establish collaborations with over 50 organizations worldwide.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "amanda@gini.org"
    }
  }
];

export default function TeamShowcase() {

    
  return (

    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Leadership</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Our dedicated team of professionals works tirelessly to create positive change
            and foster inclusive communities worldwide.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="card bg-base-200 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Image Container */}
              <figure className="relative h-72 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-300/80 to-transparent"></div>
                
                {/* Social Links */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <a href={member.social.linkedin} className="btn btn-circle btn-sm btn-primary">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.social.twitter} className="btn btn-circle btn-sm btn-primary">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="btn btn-circle btn-sm btn-primary">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </figure>

              <div className="card-body">
                {/* Name and Role */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
                  <div className="badge badge-secondary mt-2">{member.role}</div>
                </div>

                {/* Bio */}
                <p className="text-base-content/80">
                  {member.bio}
                </p>

                {/* Achievement Stats */}
                <div className="stats stats-vertical md:stats-horizontal shadow mt-4 bg-base-300/30">
                  <div className="stat">
                    <div className="stat-title">Years</div>
                    <div className="stat-value text-primary text-2xl">15+</div>
                    <div className="stat-desc">Experience</div>
                  </div>
                  
                  <div className="stat">
                    <div className="stat-title">Projects</div>
                    <div className="stat-value text-primary text-2xl">50+</div>
                    <div className="stat-desc">Completed</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join the Team CTA */}
        <div className="mt-16 text-center">
          <div className="card bg-primary text-primary-content max-w-2xl mx-auto">
            <div className="card-body">
              <h3 className="card-title text-2xl justify-center mb-2">Join Our Team</h3>
              <p>We're always looking for passionate individuals to join our mission.</p>
              <div className="card-actions justify-center mt-4">
                <button className="btn btn-outline btn-wide text-primary-content hover:bg-primary-content hover:text-primary">
                  View Open Positions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}