
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Enterprise AI Assistant Platform",
    description: "Led the development of an enterprise-grade AI assistant platform that improved customer service efficiency by 40% and reduced operational costs by $2.5M annually.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    skills: ["AI Strategy", "NLP", "Process Optimization"],
    link: "https://example.com/project1",
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "Architected a predictive analytics solution for a Fortune 500 company that increased forecast accuracy by 35% and enabled data-driven decision making across the organization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    skills: ["Machine Learning", "Data Visualization", "Business Intelligence"],
    link: "https://example.com/project2",
  },
  {
    title: "AI-Powered Market Analysis Tool",
    description: "Developed an AI-driven market analysis tool that identifies emerging trends and competitive insights, helping clients achieve 28% faster market response time.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    skills: ["Market Intelligence", "NLP", "Data Engineering"],
    link: "https://example.com/project3",
  },
  {
    title: "Customer Segmentation Engine",
    description: "Built a sophisticated customer segmentation engine using machine learning that improved marketing campaign ROI by 45% through more targeted messaging.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    skills: ["Customer Analytics", "Clustering", "Marketing Tech"],
    link: "https://example.com/project4",
  },
  {
    title: "Supply Chain Optimization System",
    description: "Designed and implemented an AI-driven supply chain optimization system that reduced inventory costs by 22% while maintaining service levels.",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    skills: ["Operations Research", "Optimization", "Supply Chain"],
    link: "https://example.com/project5",
  },
  {
    title: "Healthcare Prediction Platform",
    description: "Created a healthcare prediction platform that uses patient data to forecast potential health issues, resulting in 15% earlier interventions.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    skills: ["Healthcare Tech", "Predictive Models", "HIPAA Compliance"],
    link: "https://example.com/project6",
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
            that address complex business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  variant="outline" 
                  className="w-full gap-2"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Details <ExternalLink size={14} />
                  </a>
                </Button>
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
            <a href="https://example.com/all-projects" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
