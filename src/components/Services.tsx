import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Palette, Code, Layers, Smartphone, ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    icon: Palette,
    number: "01",
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually stunning user interfaces that deliver exceptional user experiences. From wireframes to high-fidelity prototypes.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    iconBg: "from-violet-500 to-purple-500",
  },
  {
    icon: Code,
    number: "02",
    title: "Frontend Development",
    description:
      "Building responsive, fast, and interactive web applications using modern technologies like React, Next.js, and TypeScript.",
    features: ["React/Next.js", "Responsive Design", "Performance", "Animations"],
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    iconBg: "from-blue-500 to-cyan-500",
  },
  {
    icon: Layers,
    number: "03",
    title: "Full-Stack Development",
    description:
      "End-to-end application development from database design to frontend implementation, ensuring seamless integration.",
    features: ["Node.js", "Database Design", "API Development", "Deployment"],
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    iconBg: "from-emerald-500 to-green-500",
  },
  {
    icon: Smartphone,
    number: "04",
    title: "Web Applications",
    description:
      "Developing modern web applications that are fast, secure, and scalable to meet your business needs.",
    features: ["PWAs", "SaaS Products", "E-commerce", "Dashboards"],
    gradient: "from-amber/20 via-orange-500/10 to-transparent",
    iconBg: "from-amber to-orange-500",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20">
      {/* Background Elements */}
      <div className="blob blob-cream w-[600px] h-[600px] top-1/4 left-[-15%] opacity-30" />
      <motion.div 
        className="absolute bottom-20 right-20 w-32 h-32 border border-amber/20 rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

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
            <Sparkles className="w-4 h-4" />
            What I Offer
          </motion.div>
          <h2 className="heading-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            I Can Help You <span className="text-amber">With</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative p-8 rounded-3xl bg-card/80 backdrop-blur-xl border border-border/50 overflow-hidden transition-all duration-500 ${hoveredIndex === index ? 'border-amber/50 shadow-xl shadow-amber/5' : ''}`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Number watermark */}
                <span className="absolute top-6 right-8 heading-script text-8xl text-muted/20 group-hover:text-amber/20 transition-colors duration-500">
                  {service.number}
                </span>

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start gap-5 mb-6">
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="heading-bold text-2xl text-foreground mb-2 group-hover:text-amber transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.span
                        key={feature}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + featureIndex * 0.05 }}
                        className="text-sm px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground border border-border/50 backdrop-blur-sm"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    className="flex items-center gap-2 text-amber font-medium"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-amber/10 via-amber/5 to-amber/10 border border-amber/20">
            <h3 className="heading-bold text-2xl md:text-3xl text-foreground mb-4">
              Have a project in mind?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Let's collaborate and create something amazing together
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform shadow-lg"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
