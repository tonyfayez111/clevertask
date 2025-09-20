import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="max-w-7xl container">
        <div className="text-center">
          <h1 className="hero-title">
            Smarter Workflows with{" "}
            <span className="hero-gradient-text">
              AI-Powered Integrations
            </span>
          </h1>
          <p className="hero-subtitle">
            Transform your business processes with intelligent automation and seamless AI integrations. 
            CleverTask delivers cutting-edge solutions that boost efficiency and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Get Started <ArrowRight className="ml-2 h-5" />
            </button>
            <button className="btn-secondary">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
