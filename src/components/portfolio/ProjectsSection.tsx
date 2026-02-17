import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "MockMate AI",
    subtitle: "AI-Powered Mock Interview Platform",
    description:
      "Built with React & Next.js, integrating Gemini AI API for generating interview questions with real-time feedback. Features speech-to-text input, role-specific interview flows, instant scoring, and performance dashboards.",
    tags: ["React", "Next.js", "Gemini AI", "Speech-to-Text"],
    highlight: "Helped 50+ users improve interview performance",
  },
  {
    title: "Cynterview",
    subtitle: "Interview Assessment Platform",
    description:
      "An enterprise interview platform conducting structured interviews followed by coding rounds, aligned with real technical hiring workflows. Built with React, TypeScript, Fluent UI, .NET and Node.js.",
    tags: ["React", "TypeScript", ".NET", "Node.js", "MySQL","Open AI","Javascript"],
    highlight: "Real-world production platform",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-2xl font-bold text-primary mb-12"
        >
          {"Projects"}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-6 rounded-lg bg-card border border-border hover:border-glow hover:box-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-mono text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-accent font-mono">{project.subtitle}</p>
                </div>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors mt-1" />
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center gap-2 mb-4 text-xs text-primary font-mono">
                <Sparkles size={12} />
                {project.highlight}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground border border-border"
                  >
                    {tag}
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

export default ProjectsSection;
