
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

const Experience = () => {
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

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="p-2 rounded-full bg-muted">
                    {exp.icon}
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 bg-muted h-full mt-2"></div>
                  )}
                </div>
                
                <Card className="w-full border-primary/10">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-1">
                      <CardTitle className="text-lg md:text-xl">{exp.role}</CardTitle>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Calendar size={16} />
                        <span>{exp.year}</span>
                      </div>
                    </div>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin size={14} className="text-muted-foreground" />
                      {exp.title}
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
    </section>
  );
};

export default Experience;
