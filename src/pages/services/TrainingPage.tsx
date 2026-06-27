import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, ArrowLeft, FileDown } from "lucide-react";
import SEO from "@/components/SEO";

const TrainingPage = () => {
  const courses = [
    {
      title: "Adobe Photoshop",
      description: "Master photo editing, digital art, and graphic design fundamentals with industry-leading software.",
      level: "Beginner to Advanced"
    },
    {
      title: "Adobe Illustrator",
      description: "Create vector graphics, logos, icons, and illustrations with professional design workflows.",
      level: "Beginner to Advanced"
    },
    {
      title: "Adobe InDesign",
      description: "Learn professional desktop publishing for magazines, brochures, and marketing materials.",
      level: "Beginner to Intermediate"
    },
    {
      title: "Adobe Premiere Pro",
      description: "Video editing mastery for YouTube, social media, and professional productions.",
      level: "Beginner to Advanced"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-[5.5rem]">
      <SEO title="Training" description="Professional design and tech training courses - Adobe Photoshop, Illustrator, InDesign, Premiere Pro. Download course outlines and start learning today." image="/images/og-training.jpg" url="/services/training" />
      <div className="bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services">
            <Button variant="ghost" className="text-primary-foreground hover:text-primary-foreground/80 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2 text-primary-foreground" />
              Back to Services
            </Button>
          </Link>
          <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-20 h-20 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Professional Training</h1>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg">Master industry tools with expert-led courses and downloadable materials</p>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Training Programs</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Comprehensive courses in Adobe Creative Suite and video editing tools used by professionals worldwide.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {courses.map((course, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="p-6 h-full hover:shadow-card transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">{course.level}</span>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Download Course Outlines</h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">Get detailed syllabus for all our training programs and start learning today.</p>
          <a href="/GRAPHIC%20DESIGN%20COURSE%20OUTLINE.pdf" download>
            <Button variant="accent" size="lg">
              <FileDown className="w-5 h-5 mr-2" />
              Download Course Outline (PDF)
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;