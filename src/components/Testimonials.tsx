import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Icon from "@/components/ui/icon";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "James Kamau",
    role: "Owner, Kamau Electronics",
    content: "We were struggling to get customers from Google. After working with Royal Graphics for 8 months, we now rank on page 1 for 'electronics store Nairobi' and get 40+ calls a week from the website.",
    rating: 5,
  },
  {
    name: "Grace Onyango",
    role: "Director, Onyango Textiles Ltd",
    content: "They redesigned our entire catalog and product photography. Our wholesale inquiries doubled within 3 months. Very professional team that understood our traditional business.",
    rating: 5,
  },
  {
    name: "Peter Wambua",
    role: "Manager, Wambua Sweets & Bakery",
    content: "Started with just Facebook posts and now we have 28K followers. Festival season orders increased significantly. They know how to reach local customers.",
    rating: 5,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Testimonials
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <Card className="p-6 border-border hover:shadow-card transition-shadow duration-300 bg-card h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 + 0.2, type: "spring", stiffness: 300 }}
                    >
                      <Icon icon={Star} variant="accent" size="md" className="fill-accent text-accent" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-card-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
