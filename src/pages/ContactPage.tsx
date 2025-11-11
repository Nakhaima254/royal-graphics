import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="pt-16">
      <div className="bg-primary-dark py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto">
            Ready to elevate your digital presence? Let's discuss how we can help your business grow
          </p>
        </div>
      </div>
      
      <Contact />
    </div>
  );
};

export default ContactPage;
