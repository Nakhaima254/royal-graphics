import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, CheckCircle, ArrowLeft, BookOpen, Video, Users, Award } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const OnlineClassesPage = () => {
  const features = [
    "Graphic Design Fundamentals",
    "Social Media Marketing Mastery",
    "SEO & Digital Marketing",
    "Video Editing Techniques",
    "Canva & Adobe Creative Suite",
    "1-on-1 Mentorship Sessions"
  ];

  const benefits = [
    {
      icon: Video,
      title: "Live & Recorded",
      description: "Access live sessions for interaction and recorded content for flexible learning."
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention with limited class sizes for better learning outcomes."
    },
    {
      icon: BookOpen,
      title: "Practical Projects",
      description: "Learn by doing with real-world projects and hands-on assignments."
    },
    {
      icon: Award,
      title: "Certification",
      description: "Receive a certificate of completion to showcase your new skills."
    }
  ];

  const courses = [
    { title: "Design Fundamentals", description: "Master the basics of visual design and typography", duration: "8 weeks" },
    { title: "Social Media Pro", description: "Learn to manage and grow social media accounts", duration: "6 weeks" },
    { title: "SEO Mastery", description: "Understand search engine optimization strategies", duration: "4 weeks" },
    { title: "Video Editing", description: "Create professional videos with industry tools", duration: "6 weeks" },
    { title: "Canva for Business", description: "Design stunning graphics without experience", duration: "4 weeks" },
    { title: "1-on-1 Mentorship", description: "Personalized guidance for your specific goals", duration: "Flexible" }
  ];

  const process = [
    { step: "01", title: "Enroll", description: "Choose your course and sign up" },
    { step: "02", title: "Learn", description: "Access lessons and materials" },
    { step: "03", title: "Practice", description: "Complete hands-on projects" },
    { step: "04", title: "Get Feedback", description: "Receive personalized guidance" },
    { step: "05", title: "Certify", description: "Earn your certificate" }
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
      <div className="bg-primary py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/services">
            <Button variant="ghost" className="text-primary-foreground hover:text-primary-foreground/80 mb-4">
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
            <div className="w-20 h-20 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary-foreground/20">
              <GraduationCap className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Online Classes
            </h1>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg">
              Learn digital marketing skills from industry experts at your own pace
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
              <h2 className="text-3xl font-bold mb-6">Master Digital Skills</h2>
              <p className="text-muted-foreground mb-6">
                Whether you want to learn design, marketing, or video editing, our online classes provide hands-on training with real-world projects. Learn from Isaac N. and start your creative journey today.
              </p>
              <p className="text-muted-foreground mb-6">
                Our courses are designed for beginners and professionals alike, with flexible scheduling and lifetime access to course materials.
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
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
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
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80"
                alt="Online Classes"
                className="rounded-2xl shadow-card"
              />
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
            <h2 className="text-3xl font-bold mb-4">Why Learn With Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our teaching methodology focuses on practical skills you can apply immediately.
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
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
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

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Available Courses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our selection of comprehensive digital skills courses.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="p-6 border border-border rounded-xl hover:border-primary hover:shadow-card transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                <p className="text-muted-foreground mb-3">{course.description}</p>
                <span className="text-sm text-primary font-medium">{course.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                <AnimatedCounter value={500} suffix="+" />
              </div>
              <div className="text-primary-foreground/80">Students Trained</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                <AnimatedCounter value={6} suffix="+" />
              </div>
              <div className="text-primary-foreground/80">Courses Available</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                <AnimatedCounter value={95} suffix="%" />
              </div>
              <div className="text-primary-foreground/80">Completion Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                <AnimatedCounter value={4.9} suffix="/5" />
              </div>
              <div className="text-primary-foreground/80">Average Rating</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start learning in five simple steps.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-5 gap-4">
            {process.map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary/30 mb-2">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Enroll now and unlock your creative potential with expert guidance
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button variant="accent" size="lg">Enroll Now</Button>
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

export default OnlineClassesPage;
