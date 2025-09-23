import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="header">
      <div className="max-w-7xl container">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="nav-link">About Us</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#contact" className="nav-link">Contact Us</a>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="btn-header">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
