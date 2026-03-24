import React from 'react';
import { ArrowRight, Github, Linkedin, Code2, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import TypingAnimation from '../components/TypingAnimation.jsx';
import AnimatedSection from '../components/AnimatedSection.jsx';

const HomePage = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1687042277317-7f0738d801bd?q=80&w=2070&auto=format&fit=crop"
          alt="Abstract Tech Background"
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <AnimatedSection animation="fade-up">
          <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">Hello, I'm Navin Jamule</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 min-h-[120px] md:min-h-[100px]">
            <TypingAnimation />
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
building impactful AI solutions, scalable pipelines, and intelligent systems using Applied AI, NLP, and LLMs.          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="w-full sm:w-auto text-base h-12 px-8 transition-all hover:scale-105"
            >
              Hire Me
            </Button>
            <Button
              onClick={() => scrollToSection('projects')}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base h-12 px-8 transition-all hover:scale-105 group"
            >
              View Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a href="https://github.com/Navin-Jamule" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/navin-jamule-a860a0223/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://leetcode.com/u/Navin_Jamule/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Code2 className="w-6 h-6" />
              <span className="sr-only">LeetCode</span>
            </a>
          </div>
        </AnimatedSection>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground cursor-pointer hover:text-primary transition-colors"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default HomePage;