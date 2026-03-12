import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Download } from "lucide-react";

const profileImage = "https://i.postimg.cc/C1SSwPcV/My-Photo.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      {/* Animated Background Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="blob blob-amber w-[600px] h-[600px] top-10 right-[-10%] opacity-50" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, -20, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="blob blob-cream w-[700px] h-[700px] bottom-[-20%] left-1/4 opacity-60" 
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-amber/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border/50 text-sm mb-6 shadow-lg"
            >
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-500"
              />
              <span className="text-muted-foreground">Available for new opportunities</span>
              <Sparkles className="w-4 h-4 text-amber" />
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
              <span className="relative">
                I AM
                <motion.span
                  className="absolute -right-4 -top-4 text-amber"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✦
                </motion.span>
              </span>
              <br />
              <span className="bg-gradient-to-r from-foreground via-amber to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                KASHISH
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber/20 to-amber-light/20 rounded-lg blur-sm" />
                <p className="relative text-xl md:text-2xl font-heading font-bold text-foreground bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                  FULL-STACK
                  <br />
                  DEVELOPER
                </p>
              </div>
              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent" />
              <p className="text-muted-foreground max-w-xs leading-relaxed">
                Specialized in Web Development, UI/UX Design, React, and
                Full-Stack Development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a href="#projects" className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <span className="absolute inset-0 bg-gradient-to-r from-amber to-amber-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">View Projects</span>
              </a>
              <a 
                href="/resume.pdf" 
                download="Kashish_Pandey_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Kashish_Pandey_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="group relative inline-flex items-center gap-2 border-2 border-amber/50 hover:border-amber bg-amber/5 hover:bg-amber/10 text-amber px-8 py-4 rounded-full font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Resume
              </a>
              <a href="#contact" className="group relative inline-flex items-center gap-2 border-2 border-primary/20 hover:border-amber text-foreground px-8 py-4 rounded-full font-medium backdrop-blur-sm transition-all duration-300 hover:bg-amber/10">
                Get in Touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
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
              {/* Decorative rings */}
              <motion.div 
                className="absolute -inset-4 rounded-3xl border-2 border-dashed border-amber/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute -inset-8 rounded-3xl border border-amber/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Main image container */}
              <div className="relative">
                {/* Gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber/40 via-amber-light/20 to-transparent rounded-3xl blur-2xl transform scale-110" />
                
                {/* Image frame */}
                <div className="relative bg-gradient-to-br from-amber/20 to-amber-light/10 p-1 rounded-3xl">
                  <img
                    src={profileImage}
                    alt="Kashish Pandey"
                    className="relative w-full rounded-3xl shadow-2xl object-cover aspect-[3/4]"
                  />
                </div>
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -right-4 md:-right-8 top-1/4 bg-card/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center">
                    <span className="text-amber text-lg">🚀</span>
                  </div>
                  <div>
                    <p className="heading-bold text-2xl text-foreground">6+</p>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -left-4 md:-left-8 bottom-1/4 bg-card/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center">
                    <span className="text-amber text-lg">🎓</span>
                  </div>
                  <div>
                    <p className="heading-bold text-2xl text-foreground">2nd</p>
                    <p className="text-xs text-muted-foreground">Year B.Tech</p>
                  </div>
                </div>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber text-amber-foreground px-6 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                UI/UX Facilitator @ GDG
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-amber" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
