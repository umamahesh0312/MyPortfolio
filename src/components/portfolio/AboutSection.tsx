import { motion } from "framer-motion";
import { GraduationCap, Code2, BrainCircuit } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "B.Tech CS & AIML", value: "CGPA 9.13" },
  { icon: Code2, label: "Full Stack Dev", value: "React · Node · .NET" },
  { icon: BrainCircuit, label: "AI/ML Enthusiast", value: "Gemini · LLMs" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-grid">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-2xl font-bold text-primary mb-2">
            {"About Me"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Product-focused Computer Science & AIML undergraduate with strong skills in Python, 
            Data Structures, Full-Stack Development, and SQL. Experienced in building scalable 
            applications and collaborating across cross-functional teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-6 rounded-lg bg-card border border-border hover:border-glow hover:box-glow transition-all duration-300 group"
            >
              <item.icon className="text-primary mb-3 group-hover:text-glow transition-colors" size={28} />
              <h3 className="font-mono text-sm font-semibold text-foreground mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
