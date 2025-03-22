
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Interested in working together? I'm available for consultations, advisory roles,
            and speaking engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail size={18} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">contact@rajeshmatta.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone size={18} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
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
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.27 20.45H3.65V8.98h3.62v11.47zM5.47 7.53a2.09 2.09 0 1 1-.05-4.19 2.09 2.09 0 0 1 .05 4.19zm15 12.92h-3.62v-5.66c0-1.35-.49-2.27-1.7-2.27-.93 0-1.48.62-1.73 1.22-.1.21-.11.5-.11.8v5.91H9.7V8.98h3.62v1.55c.47-.73 1.33-1.77 3.24-1.77 2.36 0 4.13 1.54 4.13 4.85v6.84h-.22z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.982 4.982 0 002.227-2.775 10.04 10.04 0 01-3.127 1.195 4.99 4.99 0 00-8.49 4.547A14.1 14.1 0 012.46 3.12a4.99 4.99 0 001.54 6.655 4.95 4.95 0 01-2.262-.635 4.99 4.99 0 004.002 4.999 5.02 5.02 0 01-2.25.085 4.99 4.99 0 004.651 3.477A10.05 10.05 0 011 20.13a14.12 14.12 0 007.548 2.213c9.142 0 14.307-7.72 13.995-14.646A10.08 10.08 0 0024 4.59z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm8.149 8.623h-2.104c.222.689.291 1.438.291 2.189 0 4.062-3.316 7.359-7.402 7.359-4.087 0-7.403-3.297-7.403-7.359 0-.752.068-1.501.29-2.189h-2.1V19.2c0 .552.447 1 1 1h16.427c.553 0 1-.448 1-1V8.623h.001zm-4.838 2.19c0 1.820-1.479 3.299-3.299 3.299s-3.3-1.479-3.3-3.299 1.48-3.299 3.3-3.299 3.299 1.479 3.299 3.299zM20.15 6.375c0 .501-.406.906-.906.906h-1.872a.908.908 0 01-.908-.906V4.501c0-.501.407-.906.908-.906h1.872c.5 0 .906.405.906.906v1.874z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.82 7.821c.043.41.075.83.094 1.253-1.453-.576-2.94-.743-4.471-.506-1.48.23-2.854.892-4.115 1.983l-.879-1.226C10.471 7.916 13.314 7.402 17.82 7.82zM11.093 19.794c-3.61-.177-6.478-2.318-7.81-5.36C6.09 15.76 9.116 15.748 12 14.451c2.884-1.293 5.34-3.58 7.329-6.85.484 1.047.761 2.214.761 3.441 0 4.204-3.16 7.687-7.237 8.17v-2.19c0-.015 0-.054-.016-.054a.1.1 0 00-.075.024c-.26.246-.558.455-.877.62a2.04 2.04 0 01-.789.192c-.335 0-.654-.085-.929-.243v2.243h-.074z"/></svg>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can I help you?" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message..." rows={5} />
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
