import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const SlideNavigation = ({ onPrev, onNext }) => {
  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full w-12 h-12 bg-background/50 backdrop-blur-md border-border/50 shadow-lg hover:bg-background/80 hover:scale-105 transition-all hidden md:flex"
        onClick={onPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full w-12 h-12 bg-background/50 backdrop-blur-md border-border/50 shadow-lg hover:bg-background/80 hover:scale-105 transition-all hidden md:flex"
        onClick={onNext}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>
    </>
  );
};

export default SlideNavigation;