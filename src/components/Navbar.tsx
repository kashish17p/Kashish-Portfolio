import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-foreground/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="heading-script text-2xl text-foreground relative group"
            whileHover={{ scale: 1.05 }}
          >
            Kashish.
            <motion.span
              className="absolute -right-2 -top-1 text-amber"
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-3 h-3" />
            </motion.span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                  activeSection === link.href.slice(1)
                    ? "text-amber"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 bg-amber/10 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Resume Download */}
            <motion.a 
              href="/resume.pdf"
              download="Kashish_Pandey_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber/30 text-amber hover:bg-amber/10 text-sm font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.a>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Contact Button */}
            <motion.a 
              href="#contact" 
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-lg hover:shadow-amber/20 transition-all duration-300 group overflow-hidden relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber to-amber-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Contact</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-secondary/50 text-foreground"
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-border/50">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        activeSection === link.href.slice(1)
                          ? "bg-amber/10 text-amber"
                          : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  <motion.a
                    href="/resume.pdf"
                    download="Kashish_Pandey_Resume.pdf"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                    className="mt-2 px-4 py-3 rounded-xl border border-amber/30 text-amber text-center font-medium flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </motion.a>
                  <motion.a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (navLinks.length + 1) * 0.05 }}
                    className="px-4 py-3 rounded-xl bg-primary text-primary-foreground text-center font-medium"
                  >
                    Contact
                  </motion.a>
                  <div className="flex justify-center pt-2">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
