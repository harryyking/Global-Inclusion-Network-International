import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    quote: "First time learning about autism. Thank you very much OT Danielle and Jennifer for the education",
    author: "Gallery Edmond, Community Member"
  },
  {
    quote: "Thank you for the answer! I appreciate it and i will love your email to discuss further. Cheers to the team and facilitators for an amazing session. I enjoyed this and learnt immensely.",
    author: "Ann Sena Fordie, Community Member"
  },
  {
    quote: "Thanks so much for adding me.",
    author: "Narteh Patience Tsako, Community Member"
  },
  {
    quote: "Woow!, thank you so much for sharing",
    author: "Beauty Elikem, Community Member"
  },
  {
    quote: "Working with GINI has opened my eyes to the incredible potential in every child.",
    author: "Juliet, Volunteer"
  },
  {
    quote: "The community GINI has built is supportive, understanding, and truly empowering.",
    author: "Nii Ayitey Aryee, Community Member"
  },
  {
    quote: "Loved every bits about mums supporting each other and adaptive education.",
    author: "Kristina Gray, Community Member"
  },
  {
    quote: "As an educator, I've seen firsthand the postive impact GINI has on children with disabilities",
    author: "Nuer Comfort, Special Education Teacher"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 via-orange-100/70 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-800 mb-4">
            Voices of Our Community
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
          <p className="text-orange-700 text-lg">
            Stories from parents, educators, and partners who have experienced the impact of GINI's work
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-500 
                             border border-orange-100 overflow-hidden
                             hover:-translate-y-1 h-full">
                <div className="card-body p-6 lg:p-8 relative h-full flex flex-col">
                  {/* Background Quote Icon */}
                  <div className="absolute right-4 top-4 opacity-5 transform scale-150">
                    <QuoteIcon className="w-16 h-16 text-orange-300" />
                  </div>
                  
                  {/* Front Quote Icon */}
                  <div className="relative">
                    <div className="bg-orange-100 w-10 h-10 rounded-full flex items-center justify-center mb-4
                                  group-hover:bg-orange-200 transition-colors duration-300">
                      <QuoteIcon className="w-5 h-5 text-orange-600" />
                    </div>
                  </div>

                  {/* Quote Text */}
                  <p className="text-base lg:text-lg text-gray-700 mb-6 relative z-10 leading-relaxed flex-grow">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center mt-auto pt-4 border-t border-orange-100">
                    <div className="w-1 h-8 bg-orange-400 mr-4"></div>
                    <p className="font-semibold text-orange-800">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}