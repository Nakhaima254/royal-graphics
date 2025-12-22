import { motion } from "framer-motion";
import { Scale, FileCheck, AlertCircle, CreditCard, Clock, XCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfServicePage = () => {
  const sections = [
    {
      icon: FileCheck,
      title: "Acceptance of Terms",
      content: [
        "By accessing or using Royal Graphics Solutions services, you agree to be bound by these Terms of Service.",
        "If you do not agree to these terms, please do not use our services.",
        "We reserve the right to update these terms at any time with notice provided on our website.",
        "Continued use of our services after changes constitutes acceptance of the updated terms."
      ]
    },
    {
      icon: Scale,
      title: "Services Provided",
      content: [
        "Royal Graphics Solutions offers digital marketing services including graphic design, social media marketing, copywriting, video editing, and email marketing.",
        "Service deliverables, timelines, and specifications will be outlined in individual project agreements.",
        "We reserve the right to refuse service to anyone for any reason at any time.",
        "Quality and scope of services are subject to the terms agreed upon for each specific project."
      ]
    },
    {
      icon: CreditCard,
      title: "Payment Terms",
      content: [
        "Payment terms will be specified in your project agreement or invoice.",
        "A deposit may be required before project commencement.",
        "Late payments may incur additional fees and/or service suspension.",
        "All prices are subject to change with prior notice for future projects."
      ]
    },
    {
      icon: AlertCircle,
      title: "Client Responsibilities",
      content: [
        "Provide accurate and complete information required for project completion.",
        "Respond to communications and provide feedback in a timely manner.",
        "Ensure you have the right to use any materials you provide to us.",
        "Review and approve deliverables within the specified timeframes."
      ]
    },
    {
      icon: Clock,
      title: "Intellectual Property",
      content: [
        "Upon full payment, clients receive ownership rights to final deliverables as specified in the project agreement.",
        "Royal Graphics Solutions retains the right to showcase completed work in our portfolio unless otherwise agreed.",
        "Source files and working documents may be provided for an additional fee.",
        "Third-party assets (stock images, fonts, etc.) are subject to their respective licenses."
      ]
    },
    {
      icon: XCircle,
      title: "Limitation of Liability",
      content: [
        "Our liability is limited to the amount paid for the specific service in question.",
        "We are not liable for any indirect, incidental, or consequential damages.",
        "We do not guarantee specific results or outcomes from our marketing services.",
        "Force majeure events may affect our ability to deliver services on schedule."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using Royal Graphics Solutions services. 
              By using our services, you agree to these terms.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground mb-4">
                      {section.title}
                    </h2>
                    <ul className="space-y-3">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-primary/5 rounded-2xl p-6 md:p-8 text-center"
            >
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Questions About Our Terms?
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions or need clarification about our terms of service, 
                we're here to help.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
