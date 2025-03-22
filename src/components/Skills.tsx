
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Database, LineChart, Users, Lightbulb, Globe } from 'lucide-react';

const expertiseData = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI Strategy",
    description: "Developing comprehensive AI strategies aligned with business objectives and market opportunities."
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Architecture",
    description: "Designing robust data infrastructures to enable advanced machine learning operations."
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Analytics Solutions",
    description: "Creating actionable insights through advanced analytics and data science methodologies."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Team Leadership",
    description: "Leading cross-functional teams to deliver impactful AI products and solutions."
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovation Management",
    description: "Converting emerging technologies into practical business applications that drive ROI."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Implementation",
    description: "Implementing scalable AI solutions across diverse markets and business environments."
  }
];

const Skills = () => {
  return (
    <section id="expertise" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Areas of Expertise</h2>
          <p className="text-lg text-muted-foreground">
            Combining technical depth with business acumen to develop AI solutions 
            that create measurable business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((item, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
