import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    quote: "GINI has transformed my child's life. Their support and programs have been invaluable to our family.",
    author: "Sarah M., Parent",
  },
  {
    quote: "The inclusive environment GINI creates is truly remarkable. It's a place where every child feels valued.",
    author: "John D., Community Partner",
  },
  {
    quote: "As an educator, I've seen firsthand the positive impact GINI has on children with disabilities.",
    author: "Emily R., Special Education Teacher",
  },
  {
    quote: "GINI's advocacy work is changing perceptions and creating a more inclusive society for all.",
    author: "Michael T., Disability Rights Advocate",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 via-orange-100/70 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-800 mb-4">
            What People Say About Us
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
          <p className="text-orange-700">
            Hear from parents, educators, and partners about their experiences with GINI
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-500 
                             border border-orange-100 overflow-hidden
                             hover:-translate-y-1">
                <div className="card-body p-8 relative">
                  {/* Background Quote Icon */}
                  <div className="absolute right-4 top-4 opacity-5 transform scale-150">
                    <QuoteIcon className="w-16 h-16 text-orange-300" />
                  </div>
                  
                  {/* Front Quote Icon */}
                  <div className="relative">
                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-6
                                  group-hover:bg-orange-200 transition-colors duration-300">
                      <QuoteIcon className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>

                  {/* Quote Text */}
                  <p className="text-lg text-gray-700 mb-6 relative z-10 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center mt-auto">
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