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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Contact Cards */}
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="text-xl font-bold text-primary mb-4">Contact Info</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Call Us</p>
                      <p className="text-base-content/70">+1 (555) 123-4567</p>
                      <p className="text-base-content/70">+1 (555) 765-4321</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-base-content/70">info@gini.org</p>
                      <p className="text-base-content/70">support@gini.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Visit Us</p>
                      <p className="text-base-content/70">
                        123 Community Center Drive,<br />
                        Suite 200,<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Office Hours</p>
                      <p className="text-base-content/70">Monday - Friday: 9AM - 6PM</p>
                      <p className="text-base-content/70">Saturday: 10AM - 2PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="card bg-error text-error-content">
              <div className="card-body">
                <h3 className="card-title">Emergency Support</h3>
                <p>For immediate assistance, call our 24/7 helpline:</p>
                <p className="text-xl font-bold">1-800-GINI-HELP</p>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763931855!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1695921191955!5m2!1sen!2s"
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