
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Send } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="min-h-[90vh] flex flex-col justify-center pt-20 pb-10 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-8">
                <span className="block">Hi, I'm</span> 
                <span className="hero-text-gradient text-[4rem] sm:text-[4.5rem] md:text-[5.5rem] leading-none">Rajesh</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                AI Product Management professional with a unique blend of technical expertise and business acumen. 
                I specialize in building intelligent systems that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2" onClick={scrollToContact}>
                  <Send size={16} /> Get in Touch
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <FileText size={16} /> Download CV
                </Button>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto max-w-md lg:max-w-none"
          >
            <div className="relative aspect-square max-w-[400px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary-foreground/20 animate-pulse"></div>
              <img 
                src="/lovable-uploads/6b116c04-006b-4806-8604-9d71b378886a.png"
                alt="Rajesh Matta" 
                className="relative z-10 w-full h-full object-cover rounded-full p-3"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-20">
              <Button variant="secondary" size="sm" className="animate-bounce gap-2 shadow-lg" onClick={scrollToAbout}>
                <ArrowDown size={14} />
                <span className="hidden sm:inline">Scroll to learn more</span>
                <span className="inline sm:hidden">More</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
