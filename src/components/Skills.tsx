import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Server, Zap } from "lucide-react";

const frontendSkills = [
  { name: "HTML", level: 95, icon: "🌐" },
  { name: "CSS", level: 90, icon: "🎨" },
  { name: "JavaScript", level: 85, icon: "⚡" },
  { name: "React", level: 85, icon: "⚛️" },
  { name: "Next.js", level: 75, icon: "▲" },
  { name: "TypeScript", level: 70, icon: "📘" },
];

const designSkills = [
  { name: "UI/UX Design", level: 90, icon: "✨" },
  { name: "Figma", level: 85, icon: "🎭" },
  { name: "Canva", level: 90, icon: "🖼️" },
  { name: "Responsive Design", level: 85, icon: "📱" },
];

const backendSkills = [
  { name: "Node.js", level: 75, icon: "🟢" },
  { name: "Express.js", level: 70, icon: "🚂" },
  { name: "MongoDB", level: 65, icon: "🍃" },
  { name: "REST APIs", level: 80, icon: "🔌" },
];

const SkillCard = ({ 
  skill, 
  delay, 
  isInView 
}: { 
  skill: { name: string; level: number; icon: string }; 
  delay: number;
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-lg">{skill.icon}</span>
        <span className="text-foreground font-medium flex-1">{skill.name}</span>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.3 }}
          className="text-sm text-amber font-semibold"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="relative h-2 bg-secondary/50 rounded-full overflow-hidden backdrop-blur-sm">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber via-amber-light to-amber rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, x: "0%" }}
          animate={isInView ? { opacity: [0, 1, 0], x: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay }}
          className="absolute inset-y-0 w-4 bg-gradient-to-r from-transparent via-white/50 to-transparent"
        />
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ 
  title, 
  icon: Icon, 
  skills, 
  delay, 
  isInView,
  gradient
}: { 
  title: string;
  icon: React.ElementType;
  skills: typeof frontendSkills;
  delay: number;
  isInView: boolean;
  gradient: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl opacity-50 blur-xl group-hover:opacity-70 transition-opacity`} />
      <div className="relative p-8 rounded-3xl bg-card/80 backdrop-blur-xl border border-border/50 hover:border-amber/30 transition-all duration-500">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber/20 to-amber-light/10 flex items-center justify-center shadow-lg">
            <Icon className="w-6 h-6 text-amber" />
          </div>
          <div>
            <h3 className="heading-bold text-xl text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{skills.length} skills</p>
          </div>
        </div>
        <div className="space-y-5">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              delay={delay + 0.1 + index * 0.08}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techStack = [
    "React", "Next.js", "Node.js", "TypeScript", "JavaScript",
    "Tailwind CSS", "Figma", "MongoDB", "Git", "REST APIs"
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20">
      {/* Background Elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-40 h-40 border border-dashed border-amber/10 rounded-full"
      />
      <div className="blob blob-amber w-[400px] h-[400px] top-40 right-[-10%] opacity-20" />
      <div className="blob blob-cream w-[500px] h-[500px] bottom-0 left-[-10%] opacity-30" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber/10 border border-amber/20 text-amber text-sm mb-4"
          >
            <Zap className="w-4 h-4" />
            My Expertise
          </motion.div>
          <h2 className="heading-bold text-4xl md:text-5xl lg:text-6xl text-foreground">
            Skills & <span className="text-amber">Experience</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on projects and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory
            title="Frontend Development"
            icon={Code2}
            skills={frontendSkills}
            delay={0.2}
            isInView={isInView}
            gradient="from-blue-500/10 to-cyan-500/10"
          />
          <SkillCategory
            title="Design & UI/UX"
            icon={Palette}
            skills={designSkills}
            delay={0.3}
            isInView={isInView}
            gradient="from-violet-500/10 to-purple-500/10"
          />
          <SkillCategory
            title="Backend Development"
            icon={Server}
            skills={backendSkills}
            delay={0.4}
            isInView={isInView}
            gradient="from-emerald-500/10 to-green-500/10"
          />
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <p className="text-center text-muted-foreground mb-6">Technologies I work with</p>
          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-4 whitespace-nowrap"
            >
              {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                <span 
                  key={`${tech}-${index}`} 
                  className="px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-foreground font-medium hover:border-amber/50 hover:bg-amber/5 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
