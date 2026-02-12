import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Users, Bell, Cookie, Settings } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const PrivacyPolicyPage = () => {
  const { toast } = useToast();
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const savedPreferences = localStorage.getItem("cookie-preferences");
    const consent = localStorage.getItem("cookie-consent");
    
    if (savedPreferences) {
      setCookiePreferences(JSON.parse(savedPreferences));
    } else if (consent === "accepted") {
      setCookiePreferences({
        essential: true,
        analytics: true,
        marketing: true,
        functional: true,
      });
    }
  }, []);

  const handlePreferenceChange = (key: keyof CookiePreferences) => {
    if (key === "essential") return; // Essential cookies cannot be disabled
    setCookiePreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const savePreferences = () => {
    localStorage.setItem("cookie-preferences", JSON.stringify(cookiePreferences));
    localStorage.setItem("cookie-consent", "customized");
    toast({
      title: "Preferences Saved",
      description: "Your cookie preferences have been updated successfully.",
    });
  };

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem("cookie-preferences", JSON.stringify(allAccepted));
    localStorage.setItem("cookie-consent", "accepted");
    toast({
      title: "All Cookies Accepted",
      description: "You have accepted all cookies.",
    });
  };

  const rejectNonEssential = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setCookiePreferences(essentialOnly);
    localStorage.setItem("cookie-preferences", JSON.stringify(essentialOnly));
    localStorage.setItem("cookie-consent", "declined");
    toast({
      title: "Non-Essential Cookies Rejected",
      description: "Only essential cookies will be used.",
    });
  };

  const cookieTypes = [
    {
      key: "essential" as const,
      name: "Essential Cookies",
      description: "Required for the website to function properly. Cannot be disabled.",
      locked: true,
    },
    {
      key: "analytics" as const,
      name: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website.",
      locked: false,
    },
    {
      key: "marketing" as const,
      name: "Marketing Cookies",
      description: "Used to deliver personalized advertisements.",
      locked: false,
    },
    {
      key: "functional" as const,
      name: "Functional Cookies",
      description: "Enable enhanced functionality and personalization.",
      locked: false,
    },
  ];

  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Personal information you provide when contacting us (name, email, phone number, company name)",
        "Project details and requirements you share with us",
        "Communication records between you and our team",
        "Website usage data through cookies and analytics tools"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To provide and improve our digital marketing services",
        "To communicate with you about your projects and inquiries",
        "To send you relevant updates and marketing communications (with your consent)",
        "To analyze website usage and improve user experience"
      ]
    },
    {
      icon: Lock,
      title: "Data Protection",
      content: [
        "We implement industry-standard security measures to protect your data",
        "Your information is stored on secure servers with restricted access",
        "We do not sell or rent your personal information to third parties",
        "Data is encrypted during transmission and at rest"
      ]
    },
    {
      icon: Users,
      title: "Third-Party Sharing",
      content: [
        "We may share information with trusted service providers who assist in our operations",
        "Third parties are contractually obligated to maintain confidentiality",
        "We may disclose information if required by law or legal process",
        "Analytics data may be shared in aggregated, anonymized form"
      ]
    },
    {
      icon: Bell,
      title: "Your Rights",
      content: [
        "Access, correct, or delete your personal information",
        "Opt-out of marketing communications at any time",
        "Request a copy of your data in a portable format",
        "Lodge a complaint with relevant data protection authorities"
      ]
    },
    {
      icon: Shield,
      title: "Cookie Policy",
      content: [
        "We use essential cookies to ensure website functionality",
        "Analytics cookies help us understand how visitors use our site",
        "You can control cookie preferences through your browser settings",
        "Disabling cookies may affect some website features"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Privacy Policy" description="Royal Graphics Solutions privacy policy - how we collect, use, and protect your data." image="/images/og-default.png" url="/privacy-policy" />
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
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how Royal Graphics Solutions 
              collects, uses, and protects your personal information.
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

            {/* Cookie Preferences Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    Manage Cookie Preferences
                  </h2>
                  <p className="text-muted-foreground">
                    Customize which cookies you allow us to use. Your preferences are saved locally.
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {cookieTypes.map((cookie) => (
                  <div
                    key={cookie.key}
                    className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border"
                  >
                    <div className="flex items-center gap-3">
                      <Cookie className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">{cookie.name}</p>
                        <p className="text-sm text-muted-foreground">{cookie.description}</p>
                      </div>
                    </div>
                    <Switch
                      checked={cookiePreferences[cookie.key]}
                      onCheckedChange={() => handlePreferenceChange(cookie.key)}
                      disabled={cookie.locked}
                      className={cookie.locked ? "opacity-50 cursor-not-allowed" : ""}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={savePreferences} className="flex-1">
                  Save Preferences
                </Button>
                <Button onClick={acceptAll} variant="outline" className="flex-1">
                  Accept All
                </Button>
                <Button onClick={rejectNonEssential} variant="outline" className="flex-1">
                  Reject Non-Essential
                </Button>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-primary/5 rounded-2xl p-6 md:p-8 text-center"
            >
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Questions About Our Privacy Policy?
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions or concerns about how we handle your data, 
                please don't hesitate to reach out to us.
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

export default PrivacyPolicyPage;
