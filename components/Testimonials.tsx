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
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">What People Say About Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="chat chat-start">
                  <div className="chat-bubble chat-bubble-primary">{testimonial.quote}</div>
                </div>
                <p className="text-right font-semibold text-secondary mt-4">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

