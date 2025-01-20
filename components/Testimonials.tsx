
import { QuoteIcon } from "lucide-react"

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
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-700">What People Say About Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card bg-white border-orange-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="card card-bodyp-6">
                <QuoteIcon className="w-8 h-8 text-orange-400 mb-4" />
                <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
                <p className="text-green-600 font-semibold">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

