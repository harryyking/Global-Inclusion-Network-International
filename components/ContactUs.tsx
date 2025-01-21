"use client"
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export default function ContactUs() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//   };

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Have questions about our programs or want to get involved? We'd love to hear from you. 
            Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Contact Cards */}
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="text-xl font-bold text-primary mb-4">Contact Info</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold label-text">Call Us</p>
                      <p className="text-base-content/70">+233 (053) 456-4725</p>
                      <p className="text-base-content/70">+233 (020) 174-3342</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold label-text">Email Us</p>
                      <p className="text-base-content/70">globalinclusionnetwork@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold label-text">Visit Us</p>
                      <p className="text-base-content/70">
                        Head Office<br />
                        <br />
                        Greater Accra
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="text-xl font-bold text-primary mb-6">Send Us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Full Name</span>
                      </label>
                      <input 
                        type="text" 
                        className="input input-bordered w-full" 
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input 
                        type="email" 
                        className="input input-bordered w-full" 
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Subject</span>
                    </label>
                    <select className="select select-bordered w-full">
                      <option>General Inquiry</option>
                      <option>Program Information</option>
                      <option>Volunteer Opportunities</option>
                      <option>Donation Questions</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Message</span>
                    </label>
                    <textarea 
                      className="textarea textarea-bordered h-32" 
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>

                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input type="checkbox" className="checkbox checkbox-primary" required />
                      <span className="label-text ml-2">
                        I agree to receive communications from GINI
                      </span>
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 card bg-base-200 shadow-lg overflow-hidden">
          <div className="card-body p-0">
            <iframe
              src="https://maps.app.goo.gl/nhpyycVZiMhsBe13A"
              className="w-full h-96"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}