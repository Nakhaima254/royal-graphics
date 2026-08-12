import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, ArrowLeft, FileDown, CalendarDays, Clock, Wallet, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import CourseRegistrationForm from "@/components/CourseRegistrationForm";

const TrainingPage = () => {
  const courses = [
    {
      title: "Adobe Photoshop",
      description: "Interface walkthrough and tool-by-tool study.",
      level: "Beginner to Advanced",
      projects: "Posters, business cards, mockups, letterheads, brochures, photo blending & more"
    },
    {
      title: "Adobe Illustrator",
      description: "Interface walkthrough and tool-by-tool study.",
      level: "Beginner to Advanced",
      projects: "Logos, illustrations, infographics, company profiles, portfolios, catalogs & more"
    },
    {
      title: "Adobe InDesign",
      description: "Interface walkthrough and tool-by-tool study.",
      level: "Beginner to Intermediate",
      projects: "Company profiles, portfolios, simple magazine/newspaper layouts & more"
    },
    {
      title: "Adobe Premiere Pro",
      description: "Interface, timeline and sequence, effects and resources.",
      level: "Beginner to Advanced",
      projects: "Social media ad videos, YouTube videos & more"
    }
  ];

  const highlights = [
    { icon: CalendarDays, label: "Classes Start", value: "9th Sep 2026" },
    { icon: Clock, label: "Duration", value: "12 Weeks (3 Months)" },
    { icon: Wallet, label: "Course Fee", value: "KES 13,500" },
    { icon: CheckCircle, label: "Certification", value: "Certificate on completion" }
  ];

  const addOns = ["Free software", "Social media marketing training"];


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
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg">Join our Graphic Design Course and get certified in just 12 weeks</p>
            <div className="mt-8 flex justify-center">
              <a href="#register">
                <Button variant="accent" size="lg">Register for Graphic Design Class</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {highlights.map((item, index) => {
              const HighlightIcon = item.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                  <Card className="p-6 h-full text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <HighlightIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    <div className="font-bold text-foreground">{item.value}</div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">What You'll Learn</h2>
            <p className="text-white/80 max-w-2xl mx-auto">A tool-by-tool study of the Adobe Creative Suite, taught through real client-style projects.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {courses.map((course, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="p-6 h-full hover:shadow-card transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{course.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-semibold text-foreground">Projects: </span>
                    {course.projects}
                  </p>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">{course.level}</span>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto mt-8">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Add-ons Included</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {addOns.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <CourseRegistrationForm />

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