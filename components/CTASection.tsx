export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="max-w-7xl container text-center">
        <h2 className="cta-title-text">
          Ready to Transform Your Business?
        </h2>
        <p className="cta-subtitle-text">
          Join hundreds of businesses that have already revolutionized their operations with CleverTask&apos;s AI solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-cta-primary">
            Book a Demo
          </button>
          <button className="btn-cta-secondary">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
