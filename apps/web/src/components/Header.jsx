import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu } from 'lucide-react';
import { useDarkMode } from '../context/ThemeContext.jsx';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import ResumeDownload from './ResumeDownload.jsx';

const navLinks = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'experience', name: 'Experience' },
  { id: 'projects', name: 'Projects' },
  { id: 'skills', name: 'Skills' },
  { id: 'certifications', name: 'Certifications' },
  { id: 'contact', name: 'Contact' },
];

const Header = () => {
  const { isDark, toggleTheme } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md h-16 flex-shrink-0">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <button onClick={handleLogoClick} className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
          Navin<span className="text-primary">.</span>Jamule
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-medium transition-colors hover:text-primary relative py-1 ${
                activeSection === link.id && location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {link.name}
              {activeSection === link.id && location.pathname === '/' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-scale-in" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <ResumeDownload variant="outline" />
          </div>

          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-lg font-medium text-left transition-colors hover:text-primary ${
                      activeSection === link.id && location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
                <div className="mt-4">
                  <ResumeDownload className="w-full" />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;