import React from 'react';

const SlideIndicator = ({ total, current, onChange }) => {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50 bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border shadow-sm">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          className={`h-2.5 rounded-full transition-all duration-300 ${
            i === current
              ? 'bg-primary w-8 shadow-[0_0_8px_rgba(0,102,255,0.6)]'
              : 'bg-primary/30 w-2.5 hover:bg-primary/60'
          }`}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === current ? 'true' : 'false'}
        />
      ))}
    </div>
  );
};

export default SlideIndicator;