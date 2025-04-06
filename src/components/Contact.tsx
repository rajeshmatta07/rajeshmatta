
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Google Sheets Web App URL (deployed as a web app)
    const googleSheetsWebAppUrl = "https://script.google.com/macros/s/AKfycbzII9csaEAoTI0C4vJ_ClzVngdM2UbRSkf0Okk7cXQmvr9cCrSJEqX0aghd30_fBpLWnw/exec";

    try {
      // Send data to Google Sheets
      const response = await fetch(googleSheetsWebAppUrl, {
        method: 'POST',
        mode: 'no-cors', // Important for cross-origin requests to Google Sheets
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        }),
      });

      // Show success message
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    <a href="mailto:rajeshmatta127@gmail.com" className="font-medium hover:text-primary">rajeshmatta127@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone size={18} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+919701844237" className="font-medium hover:text-primary">+91 9701844237</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin size={18} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Rajahmundry, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/rajesh-matta/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="https://x.com/Rajeshmatta36" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
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
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can I help you?" 
                    required 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message..." 
                    rows={5} 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
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
