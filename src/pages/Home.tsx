import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Palette, TrendingUp, Share2, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your brand
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
              <p className="text-muted-foreground">Professional designs that capture your brand essence</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">SEO Services</h3>
              <p className="text-muted-foreground">Data-driven strategies for measurable results</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <p className="text-muted-foreground">Build genuine community and engagement</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Get started with a free consultation and discover how we can help your business grow
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
