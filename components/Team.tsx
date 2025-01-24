import { Linkedin, Twitter, Mail } from 'lucide-react';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';

const teamMembers = [
  {
    name: "Belinda Tetteh",
    role: "Partnerships & Outreach Officer",
    image: "https://utfs.io/f/xQbdaz3ivwOMUhpokcpKbiWGs8DfV0BPONnky5mFe6az3Tvu",
    bio: "Belinda Tetteh is an Occupational Therapist from Ghana with a Bachelor's degree in occupational therapy from the University of Ghana, Legon. Belinda is passionate about disability inclusion because she believes in their potentials. As the founder of GINI, she aims to create an inclusive platform where children with disabilities not only thrive but are empowered to become valuable assets in our society.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "amanda@gini.org"
    }
  },
  {
    name: "Michael Obeng",
    role: "Chief Technology Officer",
    image: "https://utfs.io/f/xQbdaz3ivwOMf8pCNYAIAgoWdm8U1Cj9M2ew5LhcDQv3JR6Z",
    bio: "Michael Obeng is a dedicated entrepreneur, writer, and advocate who champions entreprenuership, youth leadership, and disability rights, driving positive change through his work.",
    social: {
      linkedin: "https://www.linkedin.com/in/michael-obeng-5624a7198",
      twitter: "https://twitter.com/Michael61439145?t=jkbmbmrK0x-0owN8BFhGqA&s=09",
      email: "michael@gini.org"
    }
  },
  
  {
    name: "Desmond Delali Yatsi ",
    role: "Partnerships and Outreach Officer",
    image: "https://utfs.io/f/cQKwx0ZpHag1ZVSFNuwKhqn5V46uL2fBkpgDYFNaMeCmEtQv",
    bio: "Desmond is an advocate for children with focus on those with disabilities. He is currently studying disability and rehabilitation at Knust specialising in Cognitive Rehabilitation and Mental Health.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "amanda@gini.org"
    }
  },
  {
    name: "Yvonne Enyonam Afare",
    role: "Entreprenuer, Marketer",
    image: "https://utfs.io/f/xQbdaz3ivwOMNaCPxOsBycHYld6ZkMKJPRzxwAsf17NQOGDT",
    bio: "She is an Entrepreneur, freelance marketer, content creator and a restaurant consultant whose primary goal is to teach people how to create marketing strategies and brand strategies to grow their business.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "amanda@gini.org"
    }
  },
  {
    name: "Daniella Korletey",
    role: "Chairperson",
    image: "https://utfs.io/f/xQbdaz3ivwOMpXyZL7BXOTVMPGslDYHQW5BLmJEcjnakUidN",
    bio: "Daniella Korletey is a dedicated and highly skilled community-based Occupational Therapist and founder of Shai Osu-Doku Community-Based Occupational Therapy Center, Dodowa, located in the Greater Accra.  Since 2018, she has played a pivotal role in establishing and managing the community occupational therapy unit, which has been instrumental in providing essential services to individuals with disabilities in her community",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "amanda@gini.org"
    }
  },
  {
    name: "David Korletey",
    role: "Education Specialist",
    image: "https://utfs.io/f/xQbdaz3ivwOMGQaHZfAoSPCBpyvnu9GUIkfscg3YEHa4F67w",
    bio: "Daniella Korletey is a dedicated and highly skilled community-based Occupational Therapist and founder of Shai Osu-Doku Community-Based Occupational Therapy Center, Dodowa, located in the Greater Accra.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "amanda@gini.org"
    }
  },
  {
    name: "Wilbert Boadzo",
    role: "Chief Technology Officer (CTO)",
    image: "https://utfs.io/f/xQbdaz3ivwOMcLMKFxHRepX2OvjPJZKwund0oC9tErGN1zi5",
    bio: "Daniella Korletey is a dedicated and highly skilled community-based Occupational Therapist and founder of Shai Osu-Doku Community-Based Occupational Therapy Center, Dodowa, located in the Greater Accra.  Since 2018, she has played a pivotal role in establishing and managing the community occupational therapy unit, which has been instrumental in providing essential services to individuals with disabilities in her community",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "amanda@gini.org"
    }
  },
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
            and foster inclusive communities.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="card bg-base-100 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Image Container */}
              <figure className="relative h-72 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-300/60 to-transparent"></div>
                
                {/* Social Links */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <a href={member.social.linkedin} className="btn btn-circle btn-sm btn-primary">
                    <IoLogoLinkedin className="w-4 h-4" />
                  </a>
                  <a href={member.social.twitter} className="btn btn-circle btn-sm btn-primary">
                    <IoLogoTwitter className="w-4 h-4" />
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}