import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-7xl container">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo size="sm" />
            </div>
            <p className="text-secondary">
              Transforming businesses through intelligent AI integrations and workflow automation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Services</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="footer-link">Documentation</a></li>
              <li><a href="#" className="footer-link">Case Studies</a></li>
              <li><a href="#" className="footer-link">Support</a></li>
              <li><a href="#" className="footer-link">API</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
              <li><a href="#" className="footer-link">Cookie Policy</a></li>
              <li><a href="#" className="footer-link">GDPR</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2025 CleverTask. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
