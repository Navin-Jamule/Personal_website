import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SlideIndicator from './SlideIndicator';
import SlideNavigation from './SlideNavigation';

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const SlideCarousel = ({ slides, currentSlide, direction, paginate, goToSlide }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') paginate(1);
      else if (e.key === 'ArrowLeft') paginate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  return (
    <div className="slide-container bg-background">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="slide-content"
        >
          <div className="min-h-full w-full pb-24 pt-8">
            {React.isValidElement(slides[currentSlide].component)
              ? React.cloneElement(slides[currentSlide].component, { goToSlide })
              : slides[currentSlide].component}
          </div>
        </motion.div>
      </AnimatePresence>

      <SlideNavigation onPrev={() => paginate(-1)} onNext={() => paginate(1)} />
      <SlideIndicator total={slides.length} current={currentSlide} onChange={goToSlide} />
    </div>
  );
};

export default SlideCarousel;