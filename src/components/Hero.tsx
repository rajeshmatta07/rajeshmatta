
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Send, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const isMobile = useIsMobile();
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="min-h-[90vh] flex flex-col justify-center pt-16 pb-10 md:py-24 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">
              <span className="block">Hi, I'm</span> 
              <span className="hero-text-gradient text-[4rem] sm:text-[4.5rem] md:text-[5.5rem] leading-none">
                Rajesh
              </span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-xl leading-relaxed">
                AI Product Management professional with a unique blend of technical expertise and business acumen. 
                I specialize in building intelligent systems that solve real-world problems.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button size="lg" className="gap-2 rounded-full" onClick={scrollToContact}>
                <Send size={16} /> Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="gap-2 rounded-full">
                <FileText size={16} /> Download CV
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="hidden md:flex items-center gap-2 text-muted-foreground"
            >
              <span>Scroll down to explore</span>
              <ChevronRight size={16} className="animate-bounce" />
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 relative mx-auto max-w-sm lg:max-w-none order-1 lg:order-2"
          >
            <div className="relative mx-auto">
              {/* Background decoration elements */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/40 via-primary/20 to-primary-foreground/10 blur-xl animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-primary-foreground/20 animate-pulse"></div>
              
              {/* Main profile image with enhanced styling */}
              <div className="relative aspect-square max-w-[300px] md:max-w-[350px] lg:max-w-[380px] mx-auto">
                <Avatar className="w-full h-full border-4 border-background shadow-xl">
                  <AvatarImage 
                    src="/lovable-uploads/93b44e2d-f4be-467c-8c5d-d249c5249606.png" 
                    alt="Rajesh Matta"
                    className="object-cover"
                  />
                  <AvatarFallback>RM</AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            {/* Mobile scroll indicator */}
            <div className="lg:hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-20 mt-4">
              <Button variant="secondary" size="sm" className="animate-bounce gap-2 shadow-lg rounded-full" onClick={scrollToAbout}>
                <ArrowDown size={14} />
                <span>More</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Desktop scroll indicator */}
      <div className="hidden lg:block absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Button variant="secondary" size="sm" className="animate-bounce gap-2 shadow-lg rounded-full px-6" onClick={scrollToAbout}>
          <ArrowDown size={14} />
          <span>Scroll to learn more</span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
