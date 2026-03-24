import React from 'react';
import { Github, Linkedin, Code2, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-md py-4 z-50 relative flex-shrink-0">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-muted-foreground">
            &copy; {new Date().getFullYear()} Navin Jamule. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Navin-Jamule" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/navin-jamule-a860a0223/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://leetcode.com/u/Navin_Jamule/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LeetCode">
            <Code2 className="w-5 h-5" />
          </a>
          <a href="mailto:navinjwork@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;