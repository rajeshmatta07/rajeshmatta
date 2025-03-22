
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-2 animate-fadeIn">
              AI Product Management Expert
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight hero-text-gradient animate-fadeIn animation-delay-200">
              Rajesh Matta
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light animate-fadeIn animation-delay-400">
              Bridging Technical Innovation with Business Value
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl animate-fadeIn animation-delay-600">
              I help organizations develop AI strategies and products that solve 
              real business problems through my unique combination of advanced 
              technical expertise and deep business acumen.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-fadeIn animation-delay-600">
              <Button 
                size="lg" 
                className="gap-2 rounded-md transition-all hover:translate-y-[-2px]"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work <ArrowRight size={16} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 rounded-md transition-all hover:translate-y-[-2px]"
                asChild
              >
                <a href="/resume.pdf" download="Rajesh_Matta_Resume.pdf">
                  Download CV <Download size={16} />
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4 animate-fadeIn animation-delay-600">
              <div className="text-sm text-muted-foreground">Connect with me:</div>
              <div className="flex gap-3">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                      <Github size={20} />
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto">
                    <p className="text-sm">Follow me on GitHub</p>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                      <Linkedin size={20} />
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto">
                    <p className="text-sm">Connect on LinkedIn</p>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                      <Twitter size={20} />
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto">
                    <p className="text-sm">Follow me on Twitter</p>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative aspect-square max-w-md mx-auto lg:ml-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/30 blur-2xl animate-pulse"></div>
              <div className="absolute inset-0 rounded-2xl border border-primary/10 bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Rajesh Matta" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse animation-delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
