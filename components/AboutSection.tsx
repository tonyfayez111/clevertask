import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Pioneering the Future of Business Automation
            </h2>
            <p className="text-lg mb-6 text-secondary">
              At CleverTask, we believe that every business deserves access to intelligent automation. 
              Our team of AI specialists and workflow experts work tirelessly to create solutions that 
              not only streamline operations but also unlock new possibilities for growth.
            </p>
            <p className="text-lg mb-8 text-secondary">
              Founded on the principles of reliability, innovation, and efficiency, we&apos;ve helped hundreds 
              of businesses transform their operations through smart AI integrations and automated workflows.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 mr-2 icon-teal" />
                <span className="text-secondary">AI-Driven Efficiency</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 mr-2 icon-teal" />
                <span className="text-secondary">Proven Reliability</span>
              </div>
            </div>
          </div>
          <div className="stats-card">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                  <div className="text-3xl font-bold stats-number stats-number-blue">500+</div>
                  <div className="stats-label">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold stats-number stats-number-teal">98%</div>
                  <div className="stats-label">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold stats-number stats-number-blue">50+</div>
                  <div className="stats-label">AI Integrations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold stats-number stats-number-teal">24/7</div>
                  <div className="stats-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
