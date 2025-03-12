
import React from 'react';
import { Laptop, Code, Database, Globe, Users, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const SkillCard = ({ title, description, icon, delay }: SkillCardProps) => (
  <Card className={`shadow-md hover:shadow-lg transition-all animate-fadeIn ${delay}`}>
    <CardHeader className="pb-2">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base text-muted-foreground">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

const Skills = () => {
  const skills = [
    {
      title: "AI Strategy Development",
      description: "Creating comprehensive AI strategies aligned with business objectives and market opportunities.",
      icon: <Laptop size={24} />,
      delay: "animation-delay-0"
    },
    {
      title: "Technical Leadership",
      description: "Leading technical teams and managing AI product development from concept to deployment.",
      icon: <Code size={24} />,
      delay: "animation-delay-200"
    },
    {
      title: "Data Architecture",
      description: "Designing robust data infrastructures to support AI models and machine learning operations.",
      icon: <Database size={24} />,
      delay: "animation-delay-400"
    },
    {
      title: "Global Market Analysis",
      description: "Analyzing international markets to identify opportunities and position AI products effectively.",
      icon: <Globe size={24} />,
      delay: "animation-delay-0"
    },
    {
      title: "Cross-functional Collaboration",
      description: "Bridging gaps between technical, business, and design teams to create cohesive products.",
      icon: <Users size={24} />,
      delay: "animation-delay-200"
    },
    {
      title: "Product Lifecycle Management",
      description: "Managing the complete lifecycle of AI products from innovation to retirement.",
      icon: <Briefcase size={24} />,
      delay: "animation-delay-400"
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Competencies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Combining advanced technical skills with deep business knowledge to create 
            AI products that deliver exceptional value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
              delay={skill.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
