
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, handle form submission here
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-background dark:to-background/90">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Interested in working together? I'm available for consultations, advisory roles,
            and speaking engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail size={18} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:contact@rajeshmatta.com" className="font-medium hover:text-primary">contact@rajeshmatta.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone size={18} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+15551234567" className="font-medium hover:text-primary">+1 (555) 123-4567</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin size={18} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">San Francisco, California</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can I help you?" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message..." rows={5} required />
                </div>
                
                <Button type="submit" className="w-full gap-2">
                  Send Message <Send size={16} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
