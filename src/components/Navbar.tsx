
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on the home page, navigate to home and then to the section
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm dark:bg-background/90' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-primary">
          Rajesh Matta
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['about', 'expertise', 'experience', 'projects', 'contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer capitalize"
            >
              {item === 'expertise' ? 'Skills' : item}
            </button>
          ))}
          <Button 
            variant="default" 
            size="sm" 
            className="ml-2"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-40 flex flex-col p-6 animate-fadeIn">
          {['about', 'expertise', 'experience', 'projects', 'contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item)}
              className="text-lg font-medium py-3 border-b border-border text-foreground hover:text-primary transition-colors bg-transparent text-left w-full capitalize"
            >
              {item === 'expertise' ? 'Skills' : item}
            </button>
          ))}
          <Button 
            className="mt-6" 
            size="lg"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
