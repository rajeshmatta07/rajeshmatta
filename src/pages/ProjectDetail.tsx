
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Tag, Bot, Zap, Globe, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const projectsData = {
  "crewai": {
    title: "CrewAI & Role-Based Agents",
    description: "Developed an advanced multi-agent system using CrewAI that enables collaborative problem-solving through role-based AI agents working together.",
    longDescription: "CrewAI is a groundbreaking framework for orchestrating role-based autonomous AI agents. This project involves designing and implementing a system where multiple specialized AI agents work together to solve complex problems. Each agent has a specific role, expertise, and responsibility within the crew, mimicking human team structures. The agents communicate, delegate tasks, and combine their specialized knowledge to achieve goals that would be challenging for a single agent to accomplish.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    skills: ["Multi-Agent Systems", "LLM", "Cognitive Architecture", "Prompt Engineering", "Role-Based Design"],
    features: [
      "Dynamic task delegation between agents based on specialized roles",
      "Memory system allowing agents to reference past actions and decisions",
      "Custom toolkits for each agent role to interact with external systems",
      "Inter-agent communication and collaboration mechanisms",
      "Human-in-the-loop capability for oversight and guidance"
    ],
    challenges: [
      "Designing effective interaction protocols between agents",
      "Balancing autonomy with coordination in multi-agent systems",
      "Creating specialized roles with distinct but complementary capabilities",
      "Optimizing for both efficiency and quality of results"
    ],
    outcomes: [
      "40% improvement in complex task completion compared to single agent approaches",
      "Successfully deployed in research, content generation, and customer support scenarios",
      "Reduced human intervention needed in complex workflows by 65%",
      "Created reusable framework for quickly assembling specialized AI teams"
    ],
    year: "2024",
    team: "Solo project with community contributions",
    demoLink: "https://example.com/crewai-demo",
    repoLink: "https://github.com/example/crewai",
    icon: <Users className="text-blue-500" />,
  },
  "content-automation": {
    title: "AI Content Automation",
    description: "Built an end-to-end content generation pipeline that automates research, writing, and publishing for multiple platforms with minimal human intervention.",
    longDescription: "This project addresses the growing demand for high-quality content across multiple platforms by creating an intelligent automation pipeline. It starts with automated research that gathers relevant information from diverse sources, processes and synthesizes that information, then generates polished content tailored to specific audiences and platforms. The system includes safeguards for factual accuracy, plagiarism detection, and brand voice consistency throughout the content creation process.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    skills: ["NLP", "Content Generation", "Workflow Automation", "Multi-platform Publishing", "RAG"],
    features: [
      "Automated research from diverse sources including web, academic papers, and databases",
      "Content outline generation with topic modeling and clustering",
      "Multi-style content writing optimized for different platforms (blogs, social media, emails)",
      "SEO optimization integrated into content generation",
      "Automated publishing workflow with scheduling capabilities"
    ],
    challenges: [
      "Ensuring factual accuracy in automated content",
      "Maintaining consistent brand voice across different content types",
      "Optimizing content for different platforms and audience segments",
      "Balancing automation with creative quality"
    ],
    outcomes: [
      "80% reduction in content creation time from research to publishing",
      "Consistent content publication schedule across 7 different platforms",
      "25% improvement in engagement metrics compared to manually created content",
      "Scalable solution handling content creation for multiple clients simultaneously"
    ],
    year: "2023",
    team: "2-person team with additional advisors",
    demoLink: "https://example.com/content-automation-demo",
    repoLink: "https://github.com/example/content-automation",
    icon: <Zap className="text-amber-500" />,
  },
  "project-aura": {
    title: "Project: Aura - Universal AI Assistant",
    description: "Created a versatile AI assistant that integrates with various services and tools to provide a unified interface for users seeking assistance across platforms.",
    longDescription: "Aura is an ambitious project to create a truly universal AI assistant that breaks free from the limitations of closed ecosystems. It provides a seamless interface that connects to multiple services, tools, and platforms, allowing users to accomplish complex tasks through natural language interactions. Aura can handle everything from scheduling and information retrieval to creative tasks and complex calculations, all through a consistent interface regardless of which underlying systems or APIs are needed to complete the task.",
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    skills: ["AI Assistants", "API Integration", "User Experience", "Voice UI", "Cross-platform Development"],
    features: [
      "Natural language understanding for complex, multi-step requests",
      "Integration with 20+ popular services and apps via APIs",
      "Context-aware responses that maintain conversation history",
      "Voice and text interfaces with consistent experience",
      "Personalization engine that learns user preferences over time"
    ],
    challenges: [
      "Creating a unified experience across varied underlying systems",
      "Maintaining context across different service integrations",
      "Designing intuitive interactions for complex tasks",
      "Ensuring data privacy while providing personalized assistance"
    ],
    outcomes: [
      "Reduced context switching between apps by 60% for common workflows",
      "Achieved 92% task completion rate across integrated services",
      "Positive user feedback with NPS score of 72",
      "Successfully handled 15,000+ daily user interactions in beta phase"
    ],
    year: "2024",
    team: "Led 5-person cross-functional team",
    demoLink: "https://example.com/aura-demo",
    repoLink: "https://github.com/example/aura-assistant",
    icon: <Globe className="text-emerald-500" />,
  },
  "remote-work-platform": {
    title: "AI Platform for Remote Work",
    description: "Designed an AI-powered platform that enhances remote work productivity through intelligent task management, communication analysis, and workflow optimization.",
    longDescription: "This platform reimagines how remote teams collaborate by embedding AI throughout the work experience. It combines intelligent task management, automated meeting summaries and action items, asynchronous communication optimization, and workflow analytics to help remote teams work more effectively. The platform identifies patterns in how teams collaborate and provides insights and recommendations to reduce friction points and enhance productivity.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    skills: ["Productivity Tools", "Collaboration", "Workplace Analytics", "AI-Assisted Workflows", "Remote Team Management"],
    features: [
      "AI-powered task prioritization and time management",
      "Automated meeting notes, summaries, and action item tracking",
      "Communication analysis to identify potential misalignments and gaps",
      "Work pattern recognition for optimizing individual productivity",
      "Team alignment dashboard to ensure cohesive goals and priorities"
    ],
    challenges: [
      "Balancing productivity insights with privacy considerations",
      "Creating effective AI recommendations without being intrusive",
      "Adapting to different remote work styles and preferences",
      "Integrating with existing team workflows and tools"
    ],
    outcomes: [
      "28% increase in team productivity after 3 months of implementation",
      "Reduced meeting time by 35% through better asynchronous collaboration",
      "Improved team alignment scores by 42% in quarterly surveys",
      "Successfully deployed to 12 remote teams with 95% retention rate"
    ],
    year: "2023",
    team: "3-person core team with external contributors",
    demoLink: "https://example.com/remote-platform-demo",
    repoLink: "https://github.com/example/remote-work-platform",
    icon: <BrainCircuit className="text-purple-500" />,
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectId ? projectsData[projectId as keyof typeof projectsData] : null;
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center pt-20">
          <div className="text-center px-4">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist or has been moved.</p>
            <Button asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="relative pt-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-600/90 z-0"></div>
          <div className="relative h-72 md:h-96 flex items-center justify-center z-10">
            <div className="container px-4 text-white">
              <Link to="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft size={16} />
                Back to All Projects
              </Link>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  {project.icon}
                </div>
                <h1 className="text-2xl md:text-4xl font-bold">{project.title}</h1>
              </div>
              <p className="text-base md:text-xl max-w-3xl text-white/90">{project.description}</p>
            </div>
          </div>
        </section>

        {/* Project details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main content */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-6">Overview</h2>
                  <p className="text-muted-foreground">{project.longDescription}</p>
                  
                  <div className="my-8">
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="mt-1 text-primary">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="my-8">
                    <h3 className="text-xl font-semibold mb-4">Challenges</h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="mt-1 text-primary">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="my-8">
                    <h3 className="text-xl font-semibold mb-4">Outcomes & Impact</h3>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="mt-1 text-primary">•</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="order-1 lg:order-2">
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                          <Calendar size={16} /> 
                          <span>Year</span>
                        </div>
                        <p>{project.year}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                          <Users size={16} /> 
                          <span>Team</span>
                        </div>
                        <p>{project.team}</p>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div>
                        <div className="flex items-center gap-2 text-muted-foreground mb-3">
                          <Tag size={16} /> 
                          <span>Skills & Technologies</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map(skill => (
                            <Badge key={skill} variant="secondary" className="font-normal">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="space-y-3">
                        <Button className="w-full gap-2" asChild>
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <Bot size={16} /> 
                            <span>Live Demo</span>
                          </a>
                        </Button>
                        
                        <Button variant="outline" className="w-full gap-2" asChild>
                          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                            <Github size={16} /> 
                            <span>GitHub Repository</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Related Projects</h3>
                  <div className="space-y-4">
                    {Object.entries(projectsData)
                      .filter(([id]) => id !== projectId)
                      .slice(0, 2)
                      .map(([id, relatedProject]) => (
                        <Link key={id} to={`/project/${id}`} className="block">
                          <Card className="hover:shadow-md transition-shadow">
                            <div className="flex gap-4 p-4">
                              <div className="p-2 rounded-full bg-primary/10">
                                {relatedProject.icon}
                              </div>
                              <div>
                                <h4 className="font-medium">{relatedProject.title}</h4>
                                <p className="text-sm text-muted-foreground line-clamp-2">{relatedProject.description}</p>
                              </div>
                            </div>
                          </Card>
                        </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
