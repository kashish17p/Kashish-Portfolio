import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 md:px-12 lg:px-20 border-t border-border/50 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <a href="#home" className="heading-script text-3xl text-foreground mb-6 hover:text-amber transition-colors">
            Kashish.
          </a>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {["About", "Skills", "Projects", "Services", "Contact"].map((link) => (
              <motion.a 
                key={link}
                href={`#${link.toLowerCase()}`} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mb-8">
            {[
              { icon: Github, href: "https://github.com/kashish17p" },
              { icon: Linkedin, href: "https://linkedin.com/in/kashish-pandey" },
              { icon: Mail, href: "mailto:kasp13115@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-secondary/50 border border-border/50 hover:border-amber hover:bg-amber/10 flex items-center justify-center text-muted-foreground hover:text-amber transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-2 text-center">
            © {currentYear} Kashish Pandey. Crafted with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-amber fill-amber" />
            </motion.span>{" "}
            in India
          </p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 w-12 h-12 rounded-full bg-amber/10 border border-amber/30 flex items-center justify-center text-amber hover:bg-amber hover:text-foreground transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};
