import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Building, Briefcase, Clock, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import confetti from "canvas-confetti";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [searchParams] = useSearchParams();

  const fireConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
    },
  });

  // Auto-populate from calculator params
  useEffect(() => {
    const services = searchParams.get("services");
    const total = searchParams.get("total");
    const category = searchParams.get("category");
    const discount = searchParams.get("discount");

    if (services && total) {
      const serviceList = services.split(",");
      const formattedTotal = parseInt(total).toLocaleString();
      
      // Set service based on category
      if (category) {
        const categoryMap: Record<string, string> = {
          "Graphic Design": "Graphic Design",
          "Video Editing": "Video Editing",
          "Social Media Marketing": "Social Media Marketing",
          "Copywriting": "Copywriting",
          "Email Marketing": "Email Marketing",
          "SMS Marketing": "SMS Marketing",
          "Online Classes": "Online Classes",
        };
        form.setValue("service", categoryMap[category] || "Multiple Services");
      }

      // Build the message with selected services and pricing
      const discountText = discount && parseInt(discount) > 0 
        ? ` (${discount}% bundle discount applied)` 
        : "";
      const message = `I'm interested in the following services:\n\n${serviceList.map(s => `• ${s}`).join("\n")}\n\nCalculated Total: KES ${formattedTotal}${discountText}\n\nPlease provide a detailed quote.`;
      
      form.setValue("message", message);
    }
  }, [searchParams, form]);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    
    // Show success state and fire confetti
    setShowSuccess(true);
    fireConfetti();
    
    toast({
      title: "Message Received!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    form.reset();
    setIsSubmitting(false);
    
    // Hide success state after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
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
          <Card className="lg:col-span-2 p-8 border-border shadow-card relative overflow-hidden">
            <AnimatePresence mode="wait">
              {showSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-card z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                  >
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-12 h-12 text-primary" />
                    </div>
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold text-card-foreground mb-2"
                  >
                    Message Sent!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-muted-foreground text-center max-w-sm"
                  >
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </motion.p>
                </motion.div>
              ) : null}
            </AnimatePresence>
            
            <h3 className="text-xl font-bold text-card-foreground mb-6">Tell Us About Your Project</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Info */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+254 712 345 678" type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company / Business Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input placeholder="Your company name" className="pl-10" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Project Details */}
                <div className="grid sm:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Needed *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <Briefcase className="w-4 h-4 mr-2 text-muted-foreground" />
                              <SelectValue placeholder="Select service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Budget Range</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select budget" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {budgets.map((budget) => (
                              <SelectItem key={budget} value={budget}>
                                {budget}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="timeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Timeline</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timelines.map((timeline) => (
                              <SelectItem key={timeline} value={timeline}>
                                {timeline}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Details *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project goals, target audience, and any specific requirements..."
                          rows={5}
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-2">
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24 hours
                  </p>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full sm:w-auto transition-all duration-300 hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Get Started
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
