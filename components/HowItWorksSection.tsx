export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">How It Works</h2>
          <p className="text-xl max-w-3xl mx-auto text-secondary">
            Our proven process ensures successful AI integration and automation implementation
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="step-circle step-1">
              <span className="step-number">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Discovery</h3>
            <p className="text-secondary">
              We analyze your current processes and identify opportunities for AI integration and automation.
            </p>
          </div>
          <div className="text-center">
            <div className="step-circle step-2">
              <span className="step-number">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Integration</h3>
            <p className="text-secondary">
              Our experts design and implement AI solutions that seamlessly integrate with your existing systems.
            </p>
          </div>
          <div className="text-center">
            <div className="step-circle step-3">
              <span className="step-number">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Automation</h3>
            <p className="text-secondary">
              We deploy intelligent automation that streamlines workflows and reduces manual intervention.
            </p>
          </div>
          <div className="text-center">
            <div className="step-circle step-4">
              <span className="step-number">4</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Growth</h3>
            <p className="text-secondary">
              Monitor performance and continuously optimize your AI-powered workflows for maximum efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
