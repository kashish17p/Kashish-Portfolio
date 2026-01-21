import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Medibook",
    description: "Doctor appointment booking application with seamless scheduling and user management.",
    role: "Full-Stack Development",
    tags: ["React", "Node.js", "MongoDB"],
    color: "from-amber/20 to-amber-light/10",
  },
  {
    title: "SehatSathi",
    description: "AI-powered symptom-based disease level detection with intelligent chatbot assistance.",
    role: "Frontend & AI Integration",
    tags: ["React", "AI/ML", "Healthcare"],
    color: "from-emerald-500/20 to-emerald-300/10",
  },
  {
    title: "GDG-BU Website",
    description: "Official website UI for Google Developer Group Bundelkhand University chapter.",
    role: "UI/UX Design & Development",
    tags: ["UI/UX", "React", "Design"],
    color: "from-blue-500/20 to-blue-300/10",
  },
  {
    title: "Evole App",
    description: "Career guidance platform helping students navigate their professional journey.",
    role: "Backend Development",
    tags: ["Node.js", "Express", "APIs"],
    color: "from-violet-500/20 to-violet-300/10",
  },
  {
    title: "Unixa",
    description: "Digital platform connecting students and alumni for mentorship and networking.",
    role: "Full-Stack Development",
    tags: ["React", "Node.js", "Community"],
    color: "from-rose-500/20 to-rose-300/10",
  },
  {
    title: "Tickter",
    description: "Event ticket booking application with real-time availability and secure payments.",
    role: "Full-Stack Development",
    tags: ["React", "Payments", "Events"],
    color: "from-orange-500/20 to-orange-300/10",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Blob */}
      <div className="blob blob-amber w-[400px] h-[400px] bottom-0 right-0 opacity-20" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="heading-script text-2xl text-amber mb-2">My Work</p>
          <h2 className="heading-bold text-4xl md:text-5xl text-foreground">
            Recent Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="project-card group cursor-pointer card-hover"
            >
              {/* Project Image/Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="heading-bold text-4xl text-foreground/10">
                    {project.title.charAt(0)}
                  </span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-background flex items-center justify-center hover:scale-110 transition-transform">
                    <Github className="w-5 h-5 text-foreground" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-background flex items-center justify-center hover:scale-110 transition-transform">
                    <ExternalLink className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="heading-bold text-xl text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <p className="text-xs text-amber font-medium mb-4">
                  {project.role}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
