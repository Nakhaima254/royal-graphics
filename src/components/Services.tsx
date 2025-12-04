import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Share2, PenTool, Video, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "From logos to complete brand identities, we create stunning visuals that capture your brand essence and leave lasting impressions.",
    link: "/services/graphic-design",
    features: [
      "Logo Design & Brand Identity",
      "Print & Digital Graphics",
      "Social Media Visuals",
      "Packaging & Display Design",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build genuine community engagement with strategic social media management across all major platforms, creating content that resonates.",
    link: "/services/social-media-marketing",
    features: [
      "Content Creation & Curation",
      "Community Management",
      "Social Advertising Campaigns",
      "Performance Analytics",
    ],
  },
  {
    icon: PenTool,
    title: "Copywriting",
    description: "Compelling copy that sells. From website content to ad campaigns, we craft words that connect and convert.",
    link: "/services/copywriting",
    features: [
      "Website Copy & Landing Pages",
      "Blog Posts & Articles",
      "Email Marketing Campaigns",
      "Ad Copy & Headlines",
    ],
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing that tells your story. Transform raw footage into polished content that captivates your audience.",
    link: "/services/video-editing",
    features: [
      "Promotional Videos",
      "Social Media Content",
      "Motion Graphics",
      "Color Grading & Sound",
    ],
  },
  {
    icon: GraduationCap,
    title: "Online Classes",
    description: "Learn digital marketing skills from industry experts. Master design, marketing, and video editing at your own pace.",
    link: "/services/online-classes",
    features: [
      "Graphic Design Courses",
      "Social Media Mastery",
      "Video Editing Training",
      "1-on-1 Mentorship",
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
                {/* Icon Header */}
                <div className="p-6 pb-0">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-premium mb-4">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-2">
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

                  <Link to={service.link}>
                    <Button variant="ghost" className="w-full group/btn">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-smooth" />
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Banner */}
        <Card className="bg-primary p-8 text-center shadow-premium">
          <h3 className="text-2xl font-bold text-primary-foreground mb-3">
            Ready to Transform Your Brand?
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Get in touch to discuss your project and discover how we can help you achieve your goals.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg">
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </Card>
      </div>
    </section>
  );
};

export default Services;
