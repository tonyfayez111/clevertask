import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl container">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-primary">Get in Touch</h2>
            <p className="text-lg mb-8 text-secondary">
              Ready to start your AI transformation journey? Contact us today to discuss your specific needs and learn how CleverTask can help your business thrive.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="contact-icon" />
                <span className="text-secondary">hello@clevertask.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="contact-icon" />
                <span className="text-secondary">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="contact-icon" />
                <span className="text-secondary">San Francisco, CA</span>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form className="space-y-6">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your company"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  rows={4}
                  className="form-textarea"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-form"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
