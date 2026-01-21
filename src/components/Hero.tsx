import { motion } from "framer-motion";
import profileImage from "@/assets/profile-kashish.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      {/* Background Blobs */}
      <div className="blob blob-amber w-[500px] h-[500px] top-20 right-0 opacity-40" />
      <div className="blob blob-cream w-[600px] h-[600px] bottom-0 left-1/4 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="available-badge mb-6"
            >
              Available for new opportunities
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-script text-4xl md:text-5xl text-muted-foreground mb-2"
            >
              Hey, there
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="heading-bold text-5xl md:text-7xl lg:text-8xl text-foreground mb-6"
            >
              I AM
              <br />
              KASHISH
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
            >
              <p className="text-xl md:text-2xl font-heading font-bold text-foreground">
                FULL-STACK
                <br />
                DEVELOPER
              </p>
              <div className="hidden md:block w-px h-16 bg-border" />
              <p className="text-muted-foreground max-w-xs">
                Specialized in Web Development, UI/UX Design, React, and
                Full-Stack Development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 mt-8"
            >
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-outline">
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative gradient behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-light/30 to-cream-dark rounded-3xl transform rotate-3 scale-105" />
              
              <img
                src={profileImage}
                alt="Kashish Pandey"
                className="relative w-full rounded-3xl shadow-2xl object-cover aspect-[3/4]"
              />

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -right-4 md:-right-8 top-1/4 bg-card p-4 rounded-xl shadow-lg border border-border"
              >
                <p className="heading-bold text-3xl text-foreground">6+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -left-4 md:-left-8 bottom-1/4 bg-card p-4 rounded-xl shadow-lg border border-border"
              >
                <p className="heading-bold text-3xl text-foreground">2nd</p>
                <p className="text-sm text-muted-foreground">Year B.Tech</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
