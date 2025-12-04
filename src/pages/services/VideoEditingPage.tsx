import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Video, CheckCircle, ArrowLeft } from "lucide-react";

const VideoEditingPage = () => {
  const features = [
    "Promotional & Commercial Videos",
    "Social Media Video Content",
    "YouTube Video Editing",
    "Motion Graphics & Animation",
    "Video Thumbnails & Intros",
    "Color Grading & Sound Design"
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-16">
      <div className="bg-accent py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services">
            <Button variant="ghost" className="text-accent-foreground hover:text-accent-foreground/80 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-accent-foreground/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Video className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-4">
              Video Editing
            </h1>
            <p className="text-accent-foreground/90 max-w-2xl mx-auto text-lg">
              Professional video editing that tells your story and captivates your audience
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Bring Your Vision to Life</h2>
              <p className="text-muted-foreground mb-6">
                Video is the most engaging content format. We transform raw footage into polished, professional videos that capture attention and deliver your message effectively.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80"
                alt="Video Editing Services"
                className="rounded-2xl shadow-accent"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Amazing Videos?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's turn your footage into professional content that engages
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button variant="accent" size="lg">Get Started</Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg">View Pricing</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoEditingPage;