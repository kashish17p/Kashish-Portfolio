import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight, Folder } from "lucide-react";
import medibookImg from "@/assets/project-medibook.jpg";
import sehatsathiImg from "@/assets/project-sehatsathi.jpg";
import gdgbuImg from "@/assets/project-gdgbu.jpg";
import evoleImg from "@/assets/project-evole.jpg";
import unixaImg from "@/assets/project-unixa.jpg";
import tickterImg from "@/assets/project-tickter.jpg";

const projects = [
  {
    title: "Medibook",
    description: "Doctor appointment booking application with seamless scheduling and user management.",
    role: "Full-Stack Development",
    tags: ["React", "Node.js", "MongoDB"],
    image: medibookImg,
  },
  {
    title: "SehatSathi",
    description: "AI-powered symptom-based disease level detection with intelligent chatbot assistance.",
    role: "Frontend & AI Integration",
    tags: ["React", "AI/ML", "Healthcare"],
    image: sehatsathiImg,
  },
  {
    title: "GDG-BU Website",
    description: "Official website UI for Google Developer Group Bundelkhand University chapter.",
    role: "UI/UX Design & Development",
    tags: ["UI/UX", "React", "Design"],
    image: gdgbuImg,
  },
  {
    title: "Evole App",
    description: "Career guidance platform helping students navigate their professional journey.",
    role: "Backend Development",
    tags: ["Node.js", "Express", "APIs"],
    image: evoleImg,
  },
  {
    title: "Unixa",
    description: "Digital platform connecting students and alumni for mentorship and networking.",
    role: "Full-Stack Development",
    tags: ["React", "Node.js", "Community"],
    image: unixaImg,
  },
  {
    title: "Tickter",
    description: "Event ticket booking application with real-time availability and secure payments.",
    role: "Full-Stack Development",
    tags: ["React", "Payments", "Events"],
    image: tickterImg,
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="blob blob-amber w-[500px] h-[500px] bottom-0 right-[-10%] opacity-20" />
      <div className="absolute top-40 left-20 w-32 h-32 border border-dashed border-amber/20 rounded-full" />
      
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
            <Folder className="w-4 h-4" />
            My Work
          </motion.div>
          <h2 className="heading-bold text-4xl md:text-5xl lg:text-6xl text-foreground">
            Featured <span className="text-amber">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for building digital solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative cursor-pointer"
            >
              {/* Card */}
              <div className="relative h-full overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-amber/30 transition-all duration-500">
                {/* Header gradient */}
                <div className="h-40 relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Hover Overlay with actions */}
                  <motion.div 
                    className="absolute inset-0 bg-foreground/90 flex items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-lg"
                    >
                      <Github className="w-5 h-5 text-foreground" />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full bg-amber flex items-center justify-center shadow-lg"
                    >
                      <ExternalLink className="w-5 h-5 text-foreground" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="heading-bold text-xl text-foreground group-hover:text-amber transition-colors">
                      {project.title}
                    </h3>
                    <motion.div
                      animate={hoveredIndex === index ? { x: 0, y: 0, opacity: 1 } : { x: -5, y: 5, opacity: 0.5 }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-amber" />
                    </motion.div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <p className="text-xs text-amber font-medium mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                    {project.role}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 text-secondary-foreground border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/kashish17p"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card border border-border hover:border-amber text-foreground font-medium transition-all duration-300 hover:shadow-lg hover:shadow-amber/10 group"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
