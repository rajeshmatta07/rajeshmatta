
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  delay: string;
}

const ProjectCard = ({ title, description, tags, image, delay }: ProjectCardProps) => (
  <Card className={`overflow-hidden border-border shadow-md hover:shadow-lg transition-all animate-fadeIn ${delay}`}>
    <div className="h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
      />
    </div>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base mb-4">
        {description}
      </CardDescription>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">{tag}</Badge>
        ))}
      </div>
    </CardContent>
    <CardFooter>
      <Button variant="outline" className="w-full">
        View Project <ExternalLink size={16} className="ml-2" />
      </Button>
    </CardFooter>
  </Card>
);

const Projects = () => {
  const projects = [
    {
      title: "Enterprise AI Assistant",
      description: "Led the development of an AI assistant that improved customer service efficiency by 35% for a Fortune 500 company.",
      tags: ["AI Strategy", "NLP", "Enterprise"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: "animation-delay-0"
    },
    {
      title: "Predictive Analytics Platform",
      description: "Designed and deployed a predictive analytics system that reduced operational costs by 28% through real-time decision support.",
      tags: ["Data Science", "Machine Learning", "Analytics"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: "animation-delay-200"
    },
    {
      title: "AI-Powered Market Research Tool",
      description: "Created an innovative market research tool that analyzes consumer behavior patterns using advanced ML algorithms.",
      tags: ["Market Analysis", "Data Visualization", "UX Design"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      delay: "animation-delay-400"
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore some of my notable projects that showcase the intersection of 
            technical innovation and business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              delay={project.delay}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
