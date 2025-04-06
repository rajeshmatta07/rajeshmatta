
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };
  
  return (
    <footer className="py-12 border-t border-border bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Rajesh Matta</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              AI Product Management professional with a unique blend of technical expertise and business acumen.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['about', 'expertise', 'experience', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors bg-transparent border-0 p-0 cursor-pointer capitalize text-left"
                  >
                    {item === 'expertise' ? 'Skills' : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={14} />
                <a href="mailto:rajeshmatta127@gmail.com" className="hover:text-primary transition-colors">rajeshmatta127@gmail.com</a>
              </li>
              <li className="text-sm text-muted-foreground">
                Rajahmundry, India
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rajesh-matta/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/Rajeshmatta36" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Rajesh Matta. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <button className="text-xs text-muted-foreground hover:text-primary transition-colors bg-transparent border-0 p-0 cursor-pointer">
                Privacy Policy
              </button>
              <button className="text-xs text-muted-foreground hover:text-primary transition-colors bg-transparent border-0 p-0 cursor-pointer">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
