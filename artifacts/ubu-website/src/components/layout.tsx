import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programmes", href: "/programmes" },
    {
      label: "Schools",
      items: [
        { label: "Creative Arts & Modeling", href: "/schools/creative-arts" },
      ]
    },
    {
      label: "Departments",
      items: [
        { label: "Modeling", href: "/departments/modeling" },
        { label: "Music", href: "/departments/music" },
        { label: "Dance", href: "/departments/dance" },
        { label: "Film & Theatre", href: "/departments/film-theatre" },
      ]
    },
    { label: "Faculty", href: "/faculty" },
    { label: "Library", href: "/library" },
    { label: "Students", href: "/students" },
    { label: "Partners", href: "/partners" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top Utility Bar */}
      <div className="bg-primary text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2"><MapPin className="w-3 h-3 text-secondary" /> 533 College Rd, Selden, NY 11784 USA</span>
            <span className="flex items-center gap-2"><Mail className="w-3 h-3 text-secondary" /> info@unibeuni.com</span>
          </div>
          <div className="flex space-x-4">
            <Link href="/contact" className="hover:text-secondary transition-colors">Request Info</Link>
            <Link href="/contact" className="hover:text-secondary transition-colors text-secondary font-bold">Apply Now</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 group">
              <img src="/logo.png" alt="Universal Broadcasting University" className="h-12 w-auto group-hover:scale-105 transition-transform duration-300" />
              <div className="ml-3 hidden sm:block">
                <span className="block font-display font-bold text-xl text-primary leading-none">Universal Broadcasting</span>
                <span className="block font-sans text-xs tracking-widest text-secondary font-bold uppercase mt-1">University</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div 
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.items ? (
                    <button className={`px-4 py-2 rounded-md font-medium text-sm transition-colors flex items-center gap-1 ${activeDropdown === link.label ? 'text-secondary bg-primary/5' : 'text-primary hover:text-secondary hover:bg-primary/5'}`}>
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link 
                      href={link.href} 
                      className={`px-4 py-2 rounded-md font-medium text-sm transition-colors block ${location === link.href ? 'text-secondary bg-primary/5' : 'text-primary hover:text-secondary hover:bg-primary/5'}`}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {link.items && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg border border-border/50 overflow-hidden py-2"
                        >
                          {link.items.map((item) => (
                            <Link 
                              key={item.href} 
                              href={item.href}
                              className="block px-4 py-2.5 text-sm text-primary hover:bg-primary/5 hover:text-secondary transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-primary hover:bg-primary/5 rounded-md"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t border-border overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.items ? (
                      <div className="space-y-2">
                        <div className="font-bold text-primary text-sm uppercase tracking-wider">{link.label}</div>
                        <div className="pl-4 border-l-2 border-primary/10 flex flex-col space-y-3">
                          {link.items.map((item) => (
                            <Link 
                              key={item.href} 
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-muted-foreground hover:text-secondary text-sm"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link 
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-bold text-primary text-sm uppercase tracking-wider block"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-border flex flex-col gap-3">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white text-center py-3 rounded-md font-bold text-sm hover:bg-primary/90">
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/" className="inline-block mb-6">
                <img src="/logo.png" alt="UBU Logo" className="h-16 w-auto brightness-0 invert" />
              </Link>
              <p className="text-white/70 text-sm leading-relaxed mb-6 text-balance">
                Building globally relevant creative leaders who transcend boundaries and redefine excellence in arts, business, and innovation.
              </p>
              <div className="flex space-x-4">
                {/* Social icons would go here, using generic circles for now */}
                {[1,2,3,4].map(i => (
                  <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                    <span className="sr-only">Social Link {i}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg mb-6 text-secondary">Quick Links</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link href="/about" className="hover:text-secondary transition-colors">About UBU</Link></li>
                <li><Link href="/schools/creative-arts" className="hover:text-secondary transition-colors">Academics</Link></li>
                <li><Link href="/faculty" className="hover:text-secondary transition-colors">Our Faculty</Link></li>
                <li><Link href="/library" className="hover:text-secondary transition-colors">Library & Resources</Link></li>
                <li><Link href="/students" className="hover:text-secondary transition-colors">Student Life</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg mb-6 text-secondary">Departments</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link href="/departments/modeling" className="hover:text-secondary transition-colors">Modeling</Link></li>
                <li><Link href="/departments/music" className="hover:text-secondary transition-colors">Music</Link></li>
                <li><Link href="/departments/dance" className="hover:text-secondary transition-colors">Dance</Link></li>
                <li><Link href="/departments/film-theatre" className="hover:text-secondary transition-colors">Film & Theatre</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg mb-6 text-secondary">Contact Us</h3>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>533 College Rd,<br />Selden, NY 11784<br />USA</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary shrink-0" />
                  <a href="mailto:info@unibeuni.com" className="hover:text-secondary transition-colors">info@unibeuni.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary shrink-0" />
                  <span>1-416-725-2961</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <p>&copy; {new Date().getFullYear()} Universal Broadcasting University. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
