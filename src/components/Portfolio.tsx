import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "E-Commerce Brand Redesign",
    category: "Graphic Design",
    description: "Complete brand identity refresh for a growing online retailer",
    color: "from-accent to-accent-dark",
  },
  {
    title: "Local SEO Campaign",
    category: "SEO Services",
    description: "300% increase in local search visibility for multi-location business",
    color: "from-primary to-primary-dark",
  },
  {
    title: "Social Media Growth",
    category: "Social Media",
    description: "Built 50K+ engaged followers across Instagram and TikTok",
    color: "from-accent-light to-accent",
  },
  {
    title: "Tech Startup Branding",
    category: "Graphic Design",
    description: "Modern brand identity and website design for SaaS platform",
    color: "from-primary-light to-primary",
  },
  {
    title: "Content Marketing Success",
    category: "SEO Services",
    description: "Achieved first-page rankings for 20+ competitive keywords",
    color: "from-accent to-primary",
  },
  {
    title: "Restaurant Social Campaign",
    category: "Social Media",
    description: "Viral social media campaign driving 200% increase in foot traffic",
    color: "from-primary to-accent",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results for real businesses. See how we've helped our clients achieve their digital goals.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-border hover:shadow-premium transition-smooth group cursor-pointer"
            >
              {/* Gradient Background */}
              <div className={`h-48 bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ExternalLink className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-smooth transform group-hover:scale-110" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wide">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-smooth">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
