import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Users, Trophy, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.Tech ECE, Bundelkhand University (2024–2028)",
  },
  {
    icon: Users,
    title: "GDG Facilitator",
    description: "UI/UX Facilitator at Google Developer Group BU",
  },
  {
    icon: Trophy,
    title: "Hackathons",
    description: "Participant in 'Hack with UP' powered by BlackboxAI",
  },
  {
    icon: Briefcase,
    title: "Ambassador",
    description: "Campus Ambassador at MyJobGrow & EdXcellence",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Blob */}
      <div className="blob blob-cream w-[400px] h-[400px] top-0 left-0 opacity-30" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="heading-script text-2xl text-amber mb-2">About Me</p>
          <h2 className="heading-bold text-4xl md:text-5xl text-foreground">
            Turning Vision Into Reality
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am <span className="text-foreground font-semibold">Kashish Pandey</span>, 
              a passionate full-stack web developer and UI/UX designer. Currently a 
              2nd-year B.Tech (ECE) student at Bundelkhand University, I enjoy creating 
              innovative digital experiences and developing projects that combine 
              design with functionality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My journey in tech has led me to explore various domains from frontend 
              development to backend systems, while maintaining a strong focus on 
              creating intuitive user experiences. I believe in building solutions 
              that not only work flawlessly but also look beautiful.
            </p>

            <div className="flex flex-wrap gap-3">
              {["React", "Node.js", "UI/UX", "Figma", "Next.js"].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
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
                className="p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-amber" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
