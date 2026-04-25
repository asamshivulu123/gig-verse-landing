import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, Send, Building2 } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/constants";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Phone is too short")
    .max(20, "Phone is too long")
    .regex(/^[+\d\s\-()]+$/, "Invalid phone number"),
  requirement: z.string().trim().min(10, "Please describe your requirement").max(1000),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  requirement: "",
};

const BusinessContactForm = () => {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      result.error.issues.forEach((iss) => {
        const key = iss.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = iss.message;
      });
      setErrors(fieldErrors);
      toast({ title: "Please fix the errors", description: "Some fields need your attention." });
      return;
    }

    const { name, company, email, phone, requirement } = result.data;
    const subject = `New business enquiry — ${company}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "Requirement:",
      requirement,
      "",
      "— Sent from Gig Verse website",
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    toast({
      title: "Opening your email app",
      description: `We've prepared an email to ${CONTACT_EMAIL}. Just hit send.`,
    });
  };

  const inputClass =
    "w-full bg-background/60 border border-border/60 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition";

  return (
    <section id="business-contact" className="py-20 sm:py-28 relative">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            <Building2 className="w-3.5 h-3.5" /> Business Enquiry
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3">
            Tell us what you <span className="text-gradient">need</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Share your requirement and our team will get back to you. Submissions are sent directly to{" "}
            <span className="text-foreground font-medium">{CONTACT_EMAIL}</span>.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={onSubmit}
          className="glass-card rounded-3xl p-6 sm:p-10 space-y-5"
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="bcf-name">Your name</label>
              <input
                id="bcf-name"
                type="text"
                value={values.name}
                onChange={update("name")}
                placeholder="Jane Doe"
                maxLength={100}
                className={inputClass}
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="text-xs text-destructive mt-1.5">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="bcf-company">Company</label>
              <input
                id="bcf-company"
                type="text"
                value={values.company}
                onChange={update("company")}
                placeholder="Acme Inc."
                maxLength={120}
                className={inputClass}
                aria-invalid={!!errors.company}
              />
              {errors.company && <p className="text-xs text-destructive mt-1.5">{errors.company}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="bcf-email">Email</label>
              <input
                id="bcf-email"
                type="email"
                value={values.email}
                onChange={update("email")}
                placeholder="you@company.com"
                maxLength={255}
                className={inputClass}
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="text-xs text-destructive mt-1.5">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="bcf-phone">Phone</label>
              <input
                id="bcf-phone"
                type="tel"
                value={values.phone}
                onChange={update("phone")}
                placeholder="+91 90000 00000"
                maxLength={20}
                className={inputClass}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && <p className="text-xs text-destructive mt-1.5">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="bcf-req">Your requirement</label>
            <textarea
              id="bcf-req"
              value={values.requirement}
              onChange={update("requirement")}
              placeholder="Tell us about the gig — type of work, number of people, location, dates, budget…"
              rows={5}
              maxLength={1000}
              className={`${inputClass} resize-y min-h-[120px]`}
              aria-invalid={!!errors.requirement}
            />
            <div className="flex justify-between mt-1.5">
              {errors.requirement ? (
                <p className="text-xs text-destructive">{errors.requirement}</p>
              ) : (
                <span className="text-xs text-muted-foreground">Min 10 characters</span>
              )}
              <span className="text-xs text-muted-foreground">{values.requirement.length}/1000</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
            <p className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> Opens your email app with the details prefilled.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-gradient-cta text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-glow hover:shadow-elegant hover:scale-105 transition-all"
            >
              <Send className="w-4 h-4" />
              Send enquiry
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default BusinessContactForm;