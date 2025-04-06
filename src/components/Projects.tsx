
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Users, Zap, Globe, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: "crewai",
    title: "CrewAI & Role-Based Agents",
    description: "Developed an advanced multi-agent system using CrewAI that enables collaborative problem-solving through role-based AI agents working together.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    skills: ["Multi-Agent Systems", "LLM", "Cognitive Architecture"],
    icon: <Users className="text-blue-500" />,
  },
  {
    id: "content-automation",
    title: "AI Content Automation",
    description: "Built an end-to-end content generation pipeline that automates research, writing, and publishing for multiple platforms with minimal human intervention.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    skills: ["NLP", "Content Generation", "Workflow Automation"],
    icon: <Zap className="text-amber-500" />,
  },
  {
    id: "project-aura",
    title: "Project: Aura - Universal AI Assistant",
    description: "Created a versatile AI assistant that integrates with various services and tools to provide a unified interface for users seeking assistance across platforms.",
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    skills: ["AI Assistants", "API Integration", "User Experience"],
    icon: <Globe className="text-emerald-500" />,
  },
  {
    id: "remote-work-platform",
    title: "AI Platform for Remote Work",
    description: "Designed an AI-powered platform that enhances remote work productivity through intelligent task management, communication analysis, and workflow optimization.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    skills: ["Productivity Tools", "Collaboration", "Workplace Analytics"],
    icon: <BrainCircuit className="text-purple-500" />,
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects that demonstrate my expertise in creating AI solutions 
            that address complex challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50/90 dark:from-slate-900 dark:to-slate-800/90">
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-4 left-4 z-20 p-2 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-md">
                  {project.icon}
                </div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map(skill => (
                    <Badge key={skill} variant="outline" className="font-normal bg-primary/5 hover:bg-primary/10">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link to={`/project/${project.id}`} className="w-full">
                  <Button 
                    variant="outline" 
                    className="w-full gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    View Details <ExternalLink size={14} />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="default" 
            size="lg"
            asChild
          >
            <Link to="/projects" className="px-8">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
