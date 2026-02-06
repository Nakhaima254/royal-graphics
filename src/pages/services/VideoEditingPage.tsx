import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Video, CheckCircle, ArrowLeft, Play, Film, Volume2, Clock } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import Icon from "@/components/ui/icon";
import ServiceTestimonials, { Testimonial } from "@/components/ServiceTestimonials";
import ServiceFAQ from "@/components/ServiceFAQ";

const VideoEditingPage = () => {
  const features = [
    "Promotional & Commercial Videos",
    "Social Media Video Content",
    "YouTube Video Editing",
    "Motion Graphics & Animation",
    "Video Thumbnails & Intros",
    "Color Grading & Sound Design"
  ];

  const benefits = [
    {
      icon: Play,
      title: "Engaging Content",
      description: "Capture and hold your audience's attention with professionally edited videos that tell compelling stories."
    },
    {
      icon: Film,
      title: "Professional Quality",
      description: "Industry-standard editing techniques, color grading, and effects that make your content stand out."
    },
    {
      icon: Volume2,
      title: "Perfect Audio",
      description: "Crystal clear sound design, music selection, and audio mixing for an immersive viewing experience."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality, keeping your content calendar on track."
    }
  ];

  const videoTypes = [
    { name: "YouTube Videos", description: "Engaging content optimized for the platform" },
    { name: "TikTok/Reels", description: "Short-form vertical content that goes viral" },
    { name: "Commercials", description: "High-impact promotional videos" },
    { name: "Corporate Videos", description: "Professional business presentations" },
    { name: "Documentaries", description: "Compelling storytelling narratives" },
    { name: "Music Videos", description: "Creative visual experiences" }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Brian Kipchoge",
      role: "Content Creator",
      company: "Safari Vlogs",
      content: "My YouTube videos have never looked better! The editing quality, color grading, and pacing are all top-notch. My watch time has increased by 40% since working with them.",
      rating: 5
    },
    {
      name: "Lilian Wangari",
      role: "Brand Director",
      company: "Luxe Fashion Nairobi",
      content: "They created stunning promotional videos for our new collection. The attention to detail and cinematic quality exceeded our expectations. True professionals!",
      rating: 5
    },
    {
      name: "Chris Munyasi",
      role: "Founder",
      company: "Startup Academy Kenya",
      content: "Quick turnaround, excellent communication, and the final videos are always perfect. They've edited over 100 videos for us and quality never drops.",
      rating: 5
    },
    {
      name: "Nancy Wambui",
      role: "CEO",
      company: "Wambui Events",
      content: "Our wedding highlight reels are now the talk of the town! Clients share them everywhere and we've doubled our bookings from referrals alone.",
      rating: 5
    },
    {
      name: "Samuel Kariuki",
      role: "Marketing Manager",
      company: "Kariuki Real Estate",
      content: "Property tour videos they create for us sell homes faster. The drone shots and professional editing make every listing look premium.",
      rating: 5
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

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
      <div className="bg-accent py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services">
            <Button variant="ghost" className="text-accent-foreground hover:text-accent-foreground/80 mb-4">
              <Icon icon={ArrowLeft} size="sm" className="mr-2 text-accent-foreground" />
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
              <Icon icon={Video} size="xl" className="w-10 h-10 text-accent-foreground" />
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

      {/* Features Section */}
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
              <p className="text-muted-foreground mb-6">
                Our team of expert editors uses industry-leading software and techniques to create videos that not only look amazing but also achieve your marketing goals.
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
                    <Icon icon={CheckCircle} variant="accent" size="md" className="flex-shrink-0 text-accent" />
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
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center cursor-pointer shadow-lg">
                  <Icon icon={Play} size="xl" className="w-8 h-8 text-accent-foreground ml-1" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Video Editing?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with creative vision to deliver videos that exceed expectations.
            </p>
          </motion.div>
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 h-full hover:shadow-card transition-all duration-300 hover:-translate-y-2 group">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Video Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Videos We Create</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From short social clips to full-length productions, we handle it all.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTypes.map((type, index) => (
              <motion.div
                key={index}
                className="p-6 border border-border rounded-xl hover:border-accent hover:shadow-accent transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-lg mb-2">{type.name}</h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-accent-foreground mb-2">
                <AnimatedCounter value={1000} suffix="+" />
              </div>
              <div className="text-accent-foreground/80">Videos Edited</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-accent-foreground mb-2">
                <AnimatedCounter value={50} suffix="M+" />
              </div>
              <div className="text-accent-foreground/80">Video Views</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-accent-foreground mb-2">
                <AnimatedCounter value={24} suffix="hr" />
              </div>
              <div className="text-accent-foreground/80">Rush Delivery</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-accent-foreground mb-2">
                <AnimatedCounter value={100} suffix="%" />
              </div>
              <div className="text-accent-foreground/80">Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <ServiceTestimonials testimonials={testimonials} accentColor="accent" />

      {/* FAQ Section */}
      <ServiceFAQ 
        faqs={[
          { question: "What video formats do you work with?", answer: "We work with all major video formats including MP4, MOV, AVI, and RAW files from any camera. We deliver in your preferred format optimized for your platform." },
          { question: "How long is the typical turnaround time?", answer: "Standard turnaround is 3-5 business days for most projects. Rush delivery within 24-48 hours is available for an additional fee." },
          { question: "Do you provide music and sound effects?", answer: "Yes! We have access to extensive royalty-free music and sound effect libraries. We can also work with licensed tracks you provide." },
          { question: "Can you add subtitles and captions?", answer: "Absolutely! We offer professional subtitling and caption services in multiple languages. Captions are essential for social media accessibility." },
          { question: "How many revisions are included?", answer: "Our packages include 2-3 rounds of revisions. We work with you until you're completely satisfied with the final product." }
        ]}
      />

      {/* CTA */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Create Amazing Videos?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's turn your footage into professional content that engages and converts your audience.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button variant="accent" size="lg">Get Started</Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg">View Pricing</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VideoEditingPage;