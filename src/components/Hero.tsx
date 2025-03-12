
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative pt-20">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 animate-fadeIn">
            <p className="text-primary font-medium mb-3">Hello, I am</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              AI Product Manager
              <span className="hero-text-gradient"> with Technical Expertise</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              I bring advanced technical skills and deep business knowledge to create 
              innovative AI products that drive real-world value and transform businesses.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                View My Work
              </Button>
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-2 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-tl from-blue-600/30 to-primary/30 rounded-full animate-pulse animation-delay-400"></div>
              <div className="absolute inset-8 bg-white/90 rounded-full shadow-lg flex items-center justify-center p-4">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Tech Illustration" 
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>
          <ArrowDown size={24} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
