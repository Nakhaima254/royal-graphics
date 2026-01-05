import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Palette } from "lucide-react";
import Icon from "@/components/ui/icon";

interface PortfolioCategory {
  id: string;
  title: string;
  description: string;
  items: {
    title: string;
    image: string;
  }[];
}

const GraphicDesignPortfolioPage = () => {
  const categories: PortfolioCategory[] = [
    {
      id: "logos",
      title: "Logos",
      description: "Brand identities that make lasting impressions",
      items: []
    },
    {
      id: "posters",
      title: "Posters",
      description: "Eye-catching posters for events and promotions",
      items: []
    },
    {
      id: "flyers",
      title: "Flyers",
      description: "Promotional flyers that get noticed",
      items: []
    },
    {
      id: "letterheads",
      title: "Letterheads",
      description: "Professional stationery for your business",
      items: []
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-primary py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/services/graphic-design">
            <Button variant="ghost" className="text-primary-foreground hover:text-primary-foreground/80 mb-4">
              <Icon icon={ArrowLeft} size="sm" className="mr-2 text-primary-foreground" />
              Back to Graphic Design
            </Button>
          </Link>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary-foreground/20">
              <Icon icon={Palette} size="xl" className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Design Portfolio
            </h1>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg">
              Browse our collection of logos, posters, flyers, letterheads and more
            </p>
          </motion.div>
        </div>
      </div>

      {/* Portfolio Categories */}
      {categories.map((category, categoryIndex) => (
        <section 
          key={category.id} 
          id={category.id}
          className={`py-16 ${categoryIndex % 2 === 1 ? 'bg-secondary/30' : ''}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </motion.div>
            
            {category.items.length > 0 ? (
              <motion.div 
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.items.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative overflow-hidden rounded-xl bg-card border shadow-sm hover:shadow-card transition-all duration-300"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12 bg-card rounded-xl border border-dashed">
                <p className="text-muted-foreground">Portfolio items coming soon</p>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Like What You See?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's create something amazing for your brand
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button variant="secondary" size="lg">Get a Quote</Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesignPortfolioPage;