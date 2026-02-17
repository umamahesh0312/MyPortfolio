import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C++", "C#", "TypeScript", "JavaScript"],
  },
  {
    title: "Frameworks",
    skills: ["React.js", "Node.js", "Express.js", "ASP.NET Core", "Next.js"],
  },
  {
    title: "Data & AI",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Power BI"],
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB", "Firebase", "SQL Server"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Swagger", "Jupyter"],
  },
  {
    title: "Core Concepts",
    skills: ["DSA", "OOP", "System Design", "Agile", "REST APIs"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-2xl font-bold text-primary mb-12"
        >
          {"Skills & Tech"}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-lg bg-card border border-border"
            >
              <h3 className="font-mono text-sm font-semibold text-accent mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground border border-border hover:border-glow hover:text-primary transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
