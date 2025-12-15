import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Building, Briefcase, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Received!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", company: "", service: "", budget: "", timeline: "", message: "" });
  };

  const services = [
    "Graphic Design",
    "Social Media Marketing",
    "Copywriting",
    "Video Editing",
    "Email Marketing",
    "SMS Marketing",
    "Online Classes",
    "Multiple Services",
  ];

  const budgets = [
    "Under KSh 10,000",
    "KSh 10,000 - 50,000",
    "KSh 50,000 - 100,000",
    "KSh 100,000 - 500,000",
    "Above KSh 500,000",
  ];

  const timelines = [
    "ASAP",
    "Within 1 week",
    "Within 2 weeks",
    "Within 1 month",
    "Flexible",
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get Started
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground">
            Tell us about your project and we'll craft a tailored solution to help you achieve your digital goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="p-6 border-border hover:shadow-card transition-smooth">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Phone</h3>
              <a href="tel:+254746388308" className="text-muted-foreground hover:text-primary transition-colors">+254 746 388 308</a>
              <p className="text-sm text-muted-foreground mt-1">Mon-Fri 9am-6pm EAT</p>
            </Card>

            <Card className="p-6 border-border hover:shadow-card transition-smooth">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Email</h3>
              <a href="mailto:info@royalgraphics.co.ke" className="text-muted-foreground hover:text-primary transition-colors">info@royalgraphics.co.ke</a>
              <p className="text-sm text-muted-foreground mt-1">24/7 response time</p>
            </Card>

            <Card className="p-6 border-border hover:shadow-card transition-smooth">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">Nairobi, Kenya</p>
              <p className="text-sm text-muted-foreground mt-1">East Africa</p>
            </Card>
          </div>

          {/* Expanded Contact Form */}
          <Card className="lg:col-span-2 p-8 border-border shadow-card">
            <h3 className="text-xl font-bold text-card-foreground mb-6">Tell Us About Your Project</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
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

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+254 712 345 678"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-card-foreground mb-2">
                    Company / Business Name
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company name"
                      className="w-full pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-card-foreground mb-2">
                    Service Needed *
                  </label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger className="w-full">
                      <Briefcase className="w-4 h-4 mr-2 text-muted-foreground" />
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-card-foreground mb-2">
                    Budget Range
                  </label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgets.map((budget) => (
                        <SelectItem key={budget} value={budget}>
                          {budget}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-card-foreground mb-2">
                    Timeline
                  </label>
                  <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                    <SelectTrigger className="w-full">
                      <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelines.map((timeline) => (
                        <SelectItem key={timeline} value={timeline}>
                          {timeline}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project goals, target audience, and any specific requirements..."
                  rows={5}
                  className="w-full resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-2">
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24 hours
                </p>
                <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                  Get Started
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
