import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code, Layers, Smartphone } from "lucide-react";

const services = [
  {
    icon: Palette,
    number: "01",
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually stunning user interfaces that deliver exceptional user experiences. From wireframes to high-fidelity prototypes.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
  },
  {
    icon: Code,
    number: "02",
    title: "Frontend Development",
    description:
      "Building responsive, fast, and interactive web applications using modern technologies like React, Next.js, and TypeScript.",
    features: ["React/Next.js", "Responsive Design", "Performance", "Animations"],
  },
  {
    icon: Layers,
    number: "03",
    title: "Full-Stack Development",
    description:
      "End-to-end application development from database design to frontend implementation, ensuring seamless integration.",
    features: ["Node.js", "Database Design", "API Development", "Deployment"],
  },
  {
    icon: Smartphone,
    number: "04",
    title: "Web Applications",
    description:
      "Developing modern web applications that are fast, secure, and scalable to meet your business needs.",
    features: ["PWAs", "SaaS Products", "E-commerce", "Dashboards"],
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-secondary/30">
      {/* Background Blobs */}
      <div className="blob blob-cream w-[500px] h-[500px] top-1/4 left-0 opacity-30" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="heading-script text-2xl text-amber mb-2">What I Offer</p>
          <h2 className="heading-bold text-4xl md:text-5xl text-foreground">
            I Can Help You With
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="service-card group"
            >
              <div className="flex items-start gap-6">
                {/* Number */}
                <span className="heading-script text-5xl text-amber/30 group-hover:text-amber transition-colors">
                  {service.number}
                </span>

                <div className="flex-1">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                      <service.icon className="w-6 h-6 text-amber" />
                    </div>
                    <h3 className="heading-bold text-xl text-foreground">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
