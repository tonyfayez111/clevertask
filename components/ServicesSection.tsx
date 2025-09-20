import { Zap, Target, Users, TrendingUp } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Our Services</h2>
          <p className="text-xl max-w-3xl mx-auto text-secondary">
            Comprehensive AI and automation solutions tailored to your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="service-card">
            <div className="service-icon">
              <Zap className="service-card-icon service-icon-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">AI Integration</h3>
            <p className="text-secondary">
              Seamlessly integrate AI capabilities into your existing systems and workflows for enhanced productivity.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <Target className="service-card-icon service-icon-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Automation Setup</h3>
            <p className="text-secondary">
              Design and implement automated workflows that reduce manual tasks and eliminate bottlenecks.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <Users className="service-card-icon service-icon-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Custom AI Solutions</h3>
            <p className="text-secondary">
              Develop bespoke AI solutions tailored to your specific business requirements and challenges.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <TrendingUp className="service-card-icon service-icon-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Consulting</h3>
            <p className="text-secondary">
              Strategic guidance on AI adoption and digital transformation to maximize your business potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
