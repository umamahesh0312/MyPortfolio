import { motion } from "framer-motion";
import { Mail, Phone, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-grid">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-2xl font-bold text-primary mb-4">
            {" Let's Connect"}
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-10">
            I'm always open to new opportunities, collaborations, or just a friendly chat about tech.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:yumamahesh0312@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm hover:box-glow transition-all duration-300"
          >
            <Mail size={16} /> yumamahesh0312@gmail.com
          </a>
          <a
            href="tel:+917794073941"
            className="flex items-center gap-2 px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-mono text-sm border border-border hover:border-glow transition-all duration-300"
          >
            <Phone size={16} /> +91 7794073941
          </a>
          <a
            href="https://github.com/umamahesh0312"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-mono text-sm border border-border hover:border-glow transition-all duration-300"
          >
            <Github size={16} /> GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
