import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  { title: "Data Analysis", issuer: "Deloitte" },
  { title: "GenAI", issuer: "Simplilearn" },
  { title: "Python", issuer: "TechAugsta" },
  { title: "Java", issuer: "Udemy" },
  { title: "DSA", issuer: "Tutedude" },
  { title: "C++", issuer: "Udemy" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-2xl font-bold text-primary mb-12"
        >
          {"Certifications"}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title + cert.issuer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-lg bg-card border border-border hover:border-glow hover:box-glow transition-all duration-300 group"
            >
              <div className="shrink-0 w-10 h-10 rounded-md bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Award size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-mono text-sm font-semibold text-foreground">{cert.title}</h3>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
