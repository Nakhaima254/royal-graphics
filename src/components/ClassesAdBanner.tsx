import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Wallet, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClassesAdBanner = () => {
  const facts = [
    { icon: CalendarDays, text: "Classes start 9th Sep 2026" },
    { icon: Clock, text: "12 weeks (3 months)" },
    { icon: Wallet, text: "KES 13,500 full course" },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-primary p-8 md:p-10"
        >
          <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-primary-foreground/10" />
          <div className="absolute -left-10 -bottom-20 w-48 h-48 rounded-full bg-primary-foreground/10" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full mb-4">
                Now Enrolling
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-3">
                Graphic Design Course
              </h2>
              <p className="text-primary-foreground/90 max-w-xl mb-6">
                Learn Photoshop, Illustrator, InDesign and Premiere Pro hands-on and get
                certified in 12 weeks. Free software and social media marketing training included.
              </p>

              <motion.ul
                className="flex flex-wrap gap-x-6 gap-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              >
                {facts.map((fact, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2 text-primary-foreground text-sm font-medium"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <fact.icon className="w-4 h-4 text-primary-foreground" />
                    {fact.text}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:w-56">
              <Link to="/services/training#register" className="w-full">
                <Button variant="accent" size="lg" className="w-full">
                  Register Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/services/training" className="w-full">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  Course Details
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClassesAdBanner;
