import { Card } from "@/components/ui/card";
import { Award, Users, Target, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every project, delivering nothing but the highest quality work.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our success. We build lasting partnerships based on trust and results.",
  },
  {
    icon: Target,
    title: "Strategic Approach",
    description: "Data-driven strategies that align with your business goals and deliver measurable ROI.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Staying ahead of digital trends to keep your brand competitive and relevant.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            About Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Trusted Digital Partner
          </h2>
          <p className="text-lg text-muted-foreground">
            With over a decade of experience, we've helped hundreds of businesses transform their digital presence 
            and achieve remarkable growth.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 border-border shadow-card">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2014, Royal Graphics Solutions was born from a simple vision: to provide businesses with 
                premium digital marketing services that deliver real, measurable results. What started as a small 
                graphic design studio has evolved into a full-service digital marketing agency.
              </p>
              <p>
                Today, we're proud to serve clients across diverse industries, from innovative startups to established 
                enterprises. Our team of creative designers, SEO specialists, and social media experts work together 
                to craft comprehensive digital strategies that drive growth and build lasting brand value.
              </p>
              <p>
                We believe in the power of combining creativity with data-driven insights. Every project we undertake 
                is backed by research, strategy, and a commitment to excellence that has earned us a 95% client 
                satisfaction rate.
              </p>
            </div>
          </Card>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 border-border hover:shadow-card transition-smooth text-center"
                >
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-card">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-primary rounded-2xl p-8 sm:p-12 text-center shadow-premium">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-8">
            By The Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="text-3xl sm:text-5xl font-bold text-accent mb-2">10+</div>
              <div className="text-sm sm:text-base text-primary-foreground/90">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm sm:text-base text-primary-foreground/90">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-bold text-accent mb-2">1000+</div>
              <div className="text-sm sm:text-base text-primary-foreground/90">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-bold text-accent mb-2">25+</div>
              <div className="text-sm sm:text-base text-primary-foreground/90">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
