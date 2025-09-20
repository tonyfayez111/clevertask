export default function CaseStudiesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Success Stories</h2>
          <p className="text-xl max-w-3xl mx-auto text-secondary">
            See how we&apos;ve helped businesses transform their operations with AI
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="service-card">
            <div className="mb-6">
              <div className="text-2xl font-bold mb-2 case-study-metric case-study-metric-1">75% Efficiency Gain</div>
              <h3 className="text-xl font-semibold text-primary">E-commerce Automation</h3>
            </div>
            <p className="mb-6 text-secondary">
              Implemented AI-powered inventory management and customer service automation for a leading e-commerce platform.
            </p>
            <div className="text-sm text-secondary">Manufacturing Industry</div>
          </div>
          <div className="service-card">
            <div className="mb-6">
              <div className="text-2xl font-bold mb-2 case-study-metric case-study-metric-2">60% Cost Reduction</div>
              <h3 className="text-xl font-semibold text-primary">Financial Processing</h3>
            </div>
            <p className="mb-6 text-secondary">
              Automated financial document processing and compliance checking for a major financial services firm.
            </p>
            <div className="text-sm text-secondary">Financial Services</div>
          </div>
          <div className="service-card">
            <div className="mb-6">
              <div className="text-2xl font-bold mb-2 case-study-metric case-study-metric-3">90% Accuracy</div>
              <h3 className="text-xl font-semibold text-primary">Healthcare AI</h3>
            </div>
            <p className="mb-6 text-secondary">
              Developed AI-powered diagnostic assistance tools that improved accuracy and reduced processing time.
            </p>
            <div className="text-sm text-secondary">Healthcare</div>
          </div>
        </div>
      </div>
    </section>
  );
}
