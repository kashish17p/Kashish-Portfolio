import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Users, Trophy, Briefcase, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.Tech ECE, Bundelkhand University (2024–2028)",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Users,
    title: "GDG Facilitator",
    description: "UI/UX Facilitator at Google Developer Group BU",
    gradient: "from-amber/20 to-orange-500/20",
  },
  {
    icon: Trophy,
    title: "Hackathons",
    description: "Participant in 'Hack with UP' powered by BlackboxAI",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: Briefcase,
    title: "Ambassador",
    description: "Campus Ambassador at MyJobGrow & EdXcellence",
    gradient: "from-emerald-500/20 to-green-500/20",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="blob blob-cream w-[500px] h-[500px] top-0 left-[-10%] opacity-40" />
      <div className="absolute top-20 right-20 w-20 h-20 border border-amber/20 rounded-full" />
      <div className="absolute bottom-40 right-40 w-10 h-10 bg-amber/10 rounded-full blur-sm" />

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
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            About Me
          </motion.div>
          <h2 className="heading-bold text-4xl md:text-5xl lg:text-6xl text-foreground">
            Turning Vision Into{" "}
            <span className="relative">
              Reality
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <motion.path
                  d="M2 10C50 4 150 4 198 10"
                  stroke="hsl(var(--amber))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </svg>
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Quote mark */}
              <span className="absolute -left-4 -top-8 text-8xl text-amber/10 heading-script">"</span>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
                I am <span className="text-foreground font-semibold bg-amber/10 px-2 py-0.5 rounded">Kashish Pandey</span>, 
                a passionate full-stack web developer and UI/UX designer.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Currently a 2nd-year B.Tech (ECE) student at Bundelkhand University, I enjoy creating 
                innovative digital experiences and developing projects that combine 
                design with functionality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                My journey in tech has led me to explore various domains from frontend 
                development to backend systems, while maintaining a strong focus on 
                creating intuitive user experiences.
              </p>
            </div>

            {/* Tech stack */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-foreground uppercase tracking-wider">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "UI/UX", "Figma", "Next.js", "TypeScript"].map((skill, index) => (
                  <motion.span 
                    key={skill} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-secondary to-secondary/50 text-secondary-foreground text-sm font-medium border border-border/50 hover:border-amber/50 hover:shadow-lg hover:shadow-amber/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="inline-flex items-center gap-2 mt-8 text-amber hover:text-amber-light transition-colors group"
            >
              <span className="font-medium">Let's work together</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${item.gradient} border border-border/50 backdrop-blur-sm overflow-hidden cursor-default`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber/0 to-amber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-card/80 backdrop-blur flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-6 h-6 text-amber" />
                  </motion.div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
