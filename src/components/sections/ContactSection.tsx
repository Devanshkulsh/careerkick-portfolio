import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section ref={ref} id="contact" className="py-32 relative noise-overlay">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 space-y-4"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Start Your <span className="text-primary text-glow">Growth</span> Story
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass rounded-2xl p-8 space-y-6"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Send className="w-7 h-7 text-primary" />
                </div>
                <p className="text-xl font-semibold">Thank you!</p>
                <p className="text-muted-foreground text-sm">We'll get back to you shortly.</p>
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
                    <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-sm tracking-wide hover:neon-glow-strong transition-shadow duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8 flex flex-col justify-center"
          >
            {[
              { icon: MapPin, label: "Visit Us", value: "Lucknow, Uttar Pradesh, India" },
              { icon: Phone, label: "Call Us", value: "+91 99XX XXX XXX" },
              { icon: Mail, label: "Email Us", value: "hello@careerkick.in" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="glass rounded-2xl p-6 mt-8">
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                "If your college isn't growing, it's falling behind. 
                Let's change that — together."
              </p>
              <p className="text-primary text-sm font-semibold mt-3">— CareerKick Services</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
