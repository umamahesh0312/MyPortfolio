import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Associate Software Engineer Intern",
    company: "CrugenIQ Technologies",
    period: "Sept 2025 – Present",
    points: [
      "Contributing to Cynterview, an interview assessment platform with structured interviews and coding rounds.",
      "Built backend services using .NET and Node.js for interview management and candidate data handling.",
      "Developed frontend features with React, TypeScript, and Fluent UI for seamless user interactions.",
      "Implemented search, filtering, and optimized MySQL queries for managing interviews and submissions.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Aetherpro Healthcare Pvt Ltd",
    period: "July 2025",
    points: [
      "Developed scalable front-end (React.js) and back-end (Node.js/Express) components for a healthcare product.",
      "Designed secure APIs and SQL Server database schemas for real-time data operations.",
      "Collaborated in Agile environment, delivering well-documented code aligned with product milestones.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-grid">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-2xl font-bold text-primary mb-12"
        >
          {"Experience"}
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="md:pl-12 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary box-glow hidden md:block" />

                <div className="p-6 rounded-lg bg-card border border-border hover:border-glow transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Briefcase size={16} className="text-primary" />
                    <h3 className="font-mono text-sm font-bold text-foreground">{exp.title}</h3>
                  </div>
                  <p className="font-mono text-xs text-primary mb-1">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
