import { motion } from "framer-motion";
import { Mail, Phone, Github, Copy, Check } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const email = "yumamahesh0312@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

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
          {/* Email - Copy to clipboard */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm hover:box-glow transition-all duration-300"
          >
            <Mail size={16} />
            {email}
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>

          {/* Phone */}
          <a
            href="tel:+917794073941"
            className="flex items-center gap-2 px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-mono text-sm border border-border hover:border-glow transition-all duration-300"
          >
            <Phone size={16} /> +91 7794073941
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/umamahesh0312"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-mono text-sm border border-border hover:border-glow transition-all duration-300"
          >
            <Github size={16} /> GitHub
          </a>
        </motion.div>

        {/* Copied message */}
        {copied && (
          <p className="mt-4 text-sm text-muted-foreground font-mono">
            Email copied to clipboard ✅
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactSection;