import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Palette, TrendingUp, Share2, ArrowRight, Users, Award, Target, CheckCircle, Star, MessageSquare, Lightbulb, Rocket } from "lucide-react";

const Home = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: Target },
    { number: "150+", label: "Happy Clients", icon: Users },
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Star },
  ];

  const process = [
    { step: "01", title: "Discovery", description: "We learn about your business, goals, and target audience", icon: MessageSquare },
    { step: "02", title: "Strategy", description: "Develop a tailored plan to achieve your objectives", icon: Lightbulb },
    { step: "03", title: "Execution", description: "Implement solutions with precision and creativity", icon: Target },
    { step: "04", title: "Growth", description: "Monitor, optimize, and scale for continued success", icon: Rocket },
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "CEO, TechStart", content: "Royal Graphics transformed our online presence. Our traffic increased by 300% in just 6 months!", rating: 5 },
    { name: "Michael Chen", role: "Founder, GreenLeaf", content: "The team's creativity and professionalism exceeded our expectations. Highly recommended!", rating: 5 },
    { name: "Emily Davis", role: "Marketing Director", content: "Best investment we made for our brand. The ROI has been incredible.", rating: 5 },
  ];

  const portfolio = [
    { title: "E-commerce Rebrand", category: "Graphic Design", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" },
    { title: "SaaS SEO Campaign", category: "SEO Services", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" },
    { title: "Restaurant Social", category: "Social Media", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop" },
    { title: "Startup Branding", category: "Graphic Design", image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=300&fit=crop" },
  ];

  return (
    <div>
      <Hero />
      
      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-accent-foreground/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-accent-foreground mb-1">{stat.number}</div>
                <div className="text-accent-foreground/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your brand and drive measurable results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Graphic Design</h3>
              <p className="text-muted-foreground mb-4">Professional designs that capture your brand essence and leave lasting impressions.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Logo & Brand Identity</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Marketing Materials</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> UI/UX Design</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO Services</h3>
              <p className="text-muted-foreground mb-4">Data-driven strategies that boost your visibility and drive organic traffic.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Keyword Research</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> On-Page Optimization</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Link Building</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Share2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Media</h3>
              <p className="text-muted-foreground mb-4">Build genuine community engagement and grow your social presence.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Content Creation</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Community Management</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Paid Advertising</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/services">
              <Button variant="accent" size="lg">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Proven Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to deliver results that exceed expectations
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="absolute top-0 right-1/2 translate-x-12 -translate-y-2 text-5xl font-bold text-primary/20">{item.step}</span>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse of our recent work and the results we've achieved for our clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {portfolio.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-primary-foreground p-4">
                  <span className="text-sm font-medium mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold text-center">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Get started with a free consultation and discover how we can help your business grow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
