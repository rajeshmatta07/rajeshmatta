
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-2">
              AI Product Management Expert
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Rajesh Matta
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              Bridging Technical Innovation with Business Value
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              I help organizations develop AI strategies and products that solve 
              real business problems through my unique combination of advanced 
              technical expertise and deep business acumen.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="gap-2 rounded-md">
                View My Work <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 rounded-md">
                Download CV <Download size={16} />
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative aspect-square max-w-md mx-auto lg:ml-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/30 blur-2xl"></div>
              <div className="absolute inset-0 rounded-2xl border border-primary/10 bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Rajesh Matta" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
