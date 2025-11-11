import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="pt-16">
      <div className="bg-primary-dark py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About Royal Graphics
          </h1>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto">
            Your royal treatment in digital marketing
          </p>
        </div>
      </div>
      
      <About />
      <Testimonials />
      
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch with our team today
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
