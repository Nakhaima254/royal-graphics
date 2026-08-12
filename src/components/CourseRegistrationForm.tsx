import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";
import { Send } from "lucide-react";

const WHATSAPP_NUMBER = "254746388308";

const registrationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .nonempty({ message: "Please enter your full name" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .min(9, { message: "Enter a valid phone number" })
    .max(20, { message: "Phone number is too long" }),
  location: z
    .string()
    .trim()
    .max(100, { message: "Location must be less than 100 characters" })
    .optional(),
  mode: z.string().trim().nonempty({ message: "Select a learning mode" }),
  intake: z.string().trim().nonempty({ message: "Select an intake" }),
  experience: z.string().trim().nonempty({ message: "Select your skill level" }),
  message: z
    .string()
    .trim()
    .max(1000, { message: "Message must be less than 1000 characters" })
    .optional(),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof registrationSchema>, string>>;

const CourseRegistrationForm = () => {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    mode: "",
    intake: "9th Sep 2026",
    experience: "",
    message: "",
  });

  const update = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = registrationSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FieldErrors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      toast({
        title: "Please check your details",
        description: "Some fields need your attention before we can register you.",
        variant: "destructive",
      });
      return;
    }

    const d = result.data;
    const text = [
      "*Graphic Design Course Registration*",
      "",
      `Name: ${d.fullName}`,
      `Email: ${d.email}`,
      `Phone: ${d.phone}`,
      d.location ? `Location: ${d.location}` : null,
      `Learning mode: ${d.mode}`,
      `Intake: ${d.intake}`,
      `Skill level: ${d.experience}`,
      "Course: Graphic Design Course - 12 Weeks (3 Months)",
      "Fee: KES 13,500",
      d.message ? `Notes: ${d.message}` : null,
      "",
      "I would like to enroll and get certified.",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );

    toast({
      title: "Registration sent",
      description: "We've opened WhatsApp with your details. Our admissions team will confirm your slot.",
    });
  };

  return (
    <section id="register" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            Register for the Graphic Design Course
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            12 weeks of hands-on training in Photoshop, Illustrator, InDesign and Premiere Pro.
            Classes start 9th Sep 2026 — KES 13,500 for the full 3 months.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full name *</Label>
                <Input
                  id="fullName"
                  value={form.fullName}
                  maxLength={100}
                  onChange={(e) => update("fullName", e.target.value)}
                  placeholder="e.g. Brian Mwangi"
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  maxLength={255}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  maxLength={20}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+254 7XX XXX XXX"
                />
                {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Town / County</Label>
                <Input
                  id="location"
                  value={form.location}
                  maxLength={100}
                  onChange={(e) => update("location", e.target.value)}
                  placeholder="e.g. Nairobi"
                />
                {errors.location && (
                  <p className="text-sm text-destructive">{errors.location}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Learning mode *</Label>
                <Select value={form.mode} onValueChange={(v) => update("mode", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Physical (Classroom)">Physical (Classroom)</SelectItem>
                    <SelectItem value="Online (Live)">Online (Live)</SelectItem>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
                {errors.mode && <p className="text-sm text-destructive">{errors.mode}</p>}
              </div>

              <div className="space-y-2">
                <Label>Intake *</Label>
                <Select value={form.intake} onValueChange={(v) => update("intake", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select intake" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9th Sep 2026">9th Sep 2026</SelectItem>
                    <SelectItem value="Next available intake">Next available intake</SelectItem>
                  </SelectContent>
                </Select>
                {errors.intake && <p className="text-sm text-destructive">{errors.intake}</p>}
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label>Current skill level *</Label>
                <Select
                  value={form.experience}
                  onValueChange={(v) => update("experience", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Complete beginner">Complete beginner</SelectItem>
                    <SelectItem value="Some basics">Some basics</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                  </SelectContent>
                </Select>
                {errors.experience && (
                  <p className="text-sm text-destructive">{errors.experience}</p>
                )}
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">Anything else we should know?</Label>
                <Textarea
                  id="message"
                  rows={4}
                  maxLength={1000}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Preferred class time, questions about payment, etc."
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              </div>

              <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
                <Button type="submit" variant="accent" size="lg">
                  <Icon icon={Send} size="sm" className="mr-2 text-primary-foreground" />
                  Submit Registration
                </Button>
                <p className="text-sm text-muted-foreground">
                  A 60% deposit (KES 8,100) secures your slot, balance before week 6.
                </p>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseRegistrationForm;
