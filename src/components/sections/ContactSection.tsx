import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

const contactItems = [
  { icon: MapPin, label: "Visit Us", value: "Lucknow, Uttar Pradesh, India" },
  { icon: Phone, label: "Call Us", value: "+91 99XX XXX XXX" },
  { icon: Mail, label: "Email Us", value: "hello@careerkick.in" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section ref={ref} id="contact" className="section-shell noise-overlay">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-heading"
        >
          <span className="section-kicker">Let's Connect</span>
          <h2 className="section-title">
            Start Your <span className="text-primary text-glow">Growth</span> Story
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 rounded-2xl p-5 glass sm:p-8"
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center space-y-4 py-10 sm:py-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 sm:h-16 sm:w-16">
                  <Send className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
                </div>
                <p className="text-xl font-semibold">Thank you!</p>
                <p className="text-center text-sm text-muted-foreground">
                  We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                {[
                  { name: "name", label: "Your Name", type: "text" },
                  { name: "college", label: "College / Institution", type: "text" },
                  { name: "email", label: "Email Address", type: "email" },
                  { name: "phone", label: "Phone Number", type: "tel" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                ))}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full resize-none rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-shadow duration-300 hover:neon-glow-strong"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col justify-center space-y-6 sm:space-y-8"
          >
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:h-12 sm:w-12">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="break-words font-medium text-foreground">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="mt-2 rounded-2xl p-5 glass sm:mt-4 sm:p-6">
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                "If your college isn't growing, it's falling behind. Let's change that together."
              </p>
              <p className="mt-3 text-sm font-semibold text-primary">- CareerKick Services</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
