import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Received!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Start Your Digital Transformation
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to elevate your brand? Let's discuss how we can help you achieve your digital goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="p-6 border-border hover:shadow-card transition-smooth">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-sm text-muted-foreground mt-1">Mon-Fri 9am-6pm EST</p>
            </Card>

            <Card className="p-6 border-border hover:shadow-card transition-smooth">
              <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">hello@royalgraphics.com</p>
              <p className="text-sm text-muted-foreground mt-1">24/7 response time</p>
            </Card>

            <Card className="p-6 border-border hover:shadow-card transition-smooth">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">123 Business Street</p>
              <p className="text-sm text-muted-foreground mt-1">New York, NY 10001</p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8 border-border shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project and how we can help..."
                  rows={6}
                  className="w-full resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
