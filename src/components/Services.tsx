import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, TrendingUp, Share2, ArrowRight } from "lucide-react";
import designImg from "@/assets/service-design.jpg";
import seoImg from "@/assets/service-seo.jpg";
import socialImg from "@/assets/service-social.jpg";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "From logos to complete brand identities, we create stunning visuals that capture your brand essence and leave lasting impressions.",
    image: designImg,
    features: [
      "Logo Design & Brand Identity",
      "Print & Digital Graphics",
      "Social Media Visuals",
      "Packaging & Display Design",
    ],
  },
  {
    icon: TrendingUp,
    title: "SEO Services",
    description: "Data-driven SEO strategies that boost your search rankings, drive organic traffic, and deliver measurable results for your business.",
    image: seoImg,
    features: [
      "On-Page SEO Optimization",
      "Technical SEO Audits",
      "Keyword Research & Strategy",
      "Monthly Analytics Reports",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Build genuine community engagement with strategic social media management across all major platforms, creating content that resonates.",
    image: socialImg,
    features: [
      "Content Creation & Curation",
      "Community Management",
      "Social Advertising Campaigns",
      "Performance Analytics",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Expert services designed to elevate your brand and drive real business results
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="overflow-hidden border-border hover:shadow-premium transition-smooth bg-card group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 gradient-primary rounded-lg flex items-center justify-center shadow-premium">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="ghost" className="w-full group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-smooth" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Services Banner */}
        <Card className="gradient-primary p-8 text-center shadow-premium">
          <h3 className="text-2xl font-bold text-primary-foreground mb-3">
            And Many More Services...
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            From content writing and email marketing to PPC advertising and brand strategy, 
            we offer comprehensive digital marketing solutions tailored to your needs.
          </p>
          <Button variant="accent" size="lg">
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Services;
