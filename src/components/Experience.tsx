
import React from 'react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Briefcase, School, Calendar, BookOpen, MapPin } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Experience = () => {
  const isMobile = useIsMobile();
  
  // Experiences ordered from newest to oldest
  const experiences = [
    {
      title: 'Working on real world problems',
      role: 'Professional Practice',
      year: '2025',
      type: 'work',
      description: 'Applying acquired knowledge to solve complex real-world challenges.',
      icon: <Briefcase size={20} className="text-primary" />
    },
    {
      title: 'Upskilling with AI and advanced technologies',
      role: 'Personal Development',
      year: '2024',
      type: 'learning',
      description: 'Expanding expertise in artificial intelligence and emerging technologies.',
      icon: <BookOpen size={20} className="text-blue-500" />
    },
    {
      title: 'Rajiv Gandhi University of Knowledge Technologies, Srikakulam',
      role: 'SGC Robotics Club General Secretary',
      year: '2023',
      type: 'education',
      description: 'Led the robotics club, organizing workshops and competitions.',
      icon: <School size={20} className="text-blue-500" />
    },
    {
      title: 'Nextgen Nexus',
      role: 'Research and Development Intern',
      year: '2023',
      type: 'work',
      description: 'Participated in research projects focusing on innovative solutions.',
      icon: <Briefcase size={20} className="text-primary" />
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My career progression and educational background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Image on the left side - Adjusted for better appearance */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="relative rounded-xl overflow-hidden border-2 border-primary/20 shadow-xl max-w-sm h-full transform transition-all hover:scale-105 duration-300">
              <img 
                src="/lovable-uploads/433f9027-91aa-4cde-af18-3ce5dd3c2c93.png" 
                alt="Rajesh Matta professional" 
                className="w-full h-full object-cover"
                style={{ maxHeight: isMobile ? '300px' : '100%', objectPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-xl font-semibold">Rajesh Matta</p>
                <p className="text-white/90 text-sm">AI Product Management</p>
              </div>
            </div>
          </div>

          {/* Timeline on the right side */}
          <div className="lg:col-span-8">
            <div className="max-w-3xl mx-auto">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-8">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="p-2 rounded-full bg-muted shadow-md">
                        {exp.icon}
                      </div>
                      {index < experiences.length - 1 && (
                        <div className="w-0.5 bg-primary/20 h-full mt-2"></div>
                      )}
                    </div>
                    
                    <Card className="w-full border-primary/10 hover:shadow-md transition-shadow duration-300">
                      <CardHeader className="pb-2">
                        <div className="flex flex-wrap justify-between items-center mb-1">
                          <CardTitle className="text-lg md:text-xl">{exp.role}</CardTitle>
                          <div className="flex items-center gap-1 text-muted-foreground text-sm">
                            <Calendar size={16} />
                            <span>{exp.year}</span>
                          </div>
                        </div>
                        <CardDescription className="flex items-center gap-1 flex-wrap">
                          <MapPin size={14} className="text-muted-foreground min-w-4" />
                          <span className="break-words">{exp.title}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {exp.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
