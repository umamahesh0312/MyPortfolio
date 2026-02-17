import { motion } from "framer-motion";
import { Github, Mail, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-widest uppercase">
            Hello
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 font-mono">
            <span className="text-foreground">I'm </span>
            <span className="gradient-text">UmaMaheshwar Reddy</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-2 font-mono">
            Full Stack Developer & AI/ML Enthusiast
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-8">
            B.Tech CS & AIML @ MREC Hyderabad • Building scalable applications that make an impact
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/umamahesh0312"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-secondary text-secondary-foreground font-mono text-sm border border-border hover:border-glow hover:box-glow transition-all duration-300"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-mono text-sm hover:box-glow transition-all duration-300"
          >
            <Mail size={16} /> Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about">
            <ChevronDown size={24} className="text-primary animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
