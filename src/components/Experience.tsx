
import React from 'react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Briefcase, School, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Nextgen Nexus',
      role: 'Research and Development Intern',
      year: '2023',
      type: 'work',
    },
    {
      title: 'Rajiv Gandhi University of Knowledge Technologies, Srikakulam',
      role: 'SGC Robotics Club General Secretary',
      year: '2023',
      type: 'education',
    },
    {
      title: 'Upskilling with AI and advanced technologies',
      role: 'Personal Development',
      year: '2024',
      type: 'learning',
    },
    {
      title: 'Working on real world problems',
      role: 'Professional Practice',
      year: '2025',
      type: 'work',
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <Card className="border-primary/10">
          <CardHeader>
            <CardTitle>Timeline</CardTitle>
            <CardDescription>My career progression and educational milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Year</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead className="hidden md:table-cell">Organization</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {experiences.map((exp, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium flex items-center gap-2">
                      <Calendar size={16} className="text-muted-foreground" />
                      {exp.year}
                    </TableCell>
                    <TableCell className="font-medium">
                      {exp.type === 'work' ? (
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} className="text-primary" />
                          {exp.role}
                        </div>
                      ) : exp.type === 'education' ? (
                        <div className="flex items-center gap-2">
                          <School size={16} className="text-blue-500" />
                          {exp.role}
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} className="text-green-500" />
                          {exp.role}
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{exp.title}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
