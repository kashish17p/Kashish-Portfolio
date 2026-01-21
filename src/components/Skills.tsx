import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const frontendSkills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 75 },
  { name: "TypeScript", level: 70 },
];

const designSkills = [
  { name: "UI/UX Design", level: 90 },
  { name: "Figma", level: 85 },
  { name: "Canva", level: 90 },
  { name: "Responsive Design", level: 85 },
];

const backendSkills = [
  { name: "Node.js", level: 75 },
  { name: "Express.js", level: 70 },
  { name: "MongoDB", level: 65 },
  { name: "REST APIs", level: 80 },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-amber to-amber-light"
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-secondary/30">
      {/* Background Blobs */}
      <div className="blob blob-amber w-[300px] h-[300px] top-20 right-0 opacity-20" />
      <div className="blob blob-cream w-[400px] h-[400px] bottom-0 left-1/4 opacity-30" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="heading-script text-2xl text-amber mb-2">My Expertise</p>
          <h2 className="heading-bold text-4xl md:text-5xl text-foreground">
            Experience & Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <h3 className="heading-bold text-xl text-foreground mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber" />
              Frontend Development
            </h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={0.3 + index * 0.1}
              />
            ))}
          </motion.div>

          {/* Design Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <h3 className="heading-bold text-xl text-foreground mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber" />
              Design & UI/UX
            </h3>
            {designSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={0.4 + index * 0.1}
              />
            ))}
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 rounded-2xl bg-card border border-border md:col-span-2 lg:col-span-1"
          >
            <h3 className="heading-bold text-xl text-foreground mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber" />
              Backend Development
            </h3>
            {backendSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={0.5 + index * 0.1}
              />
            ))}
          </motion.div>
        </div>

        {/* Tech Stack Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Technologies I work with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React", "Next.js", "Node.js", "TypeScript", "JavaScript",
              "Tailwind CSS", "Figma", "MongoDB", "Git", "REST APIs"
            ].map((tech) => (
              <span key={tech} className="skill-tag">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
