import React from 'react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import { ExperienceCard } from '../components/Cards.jsx';

const ExperiencePage = () => {
  return (
    <section id="experience" className="container mx-auto px-4 py-20 max-w-4xl">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Professional Experience</h2>
      </AnimatedSection>

      <div className="relative border-l-2 border-muted ml-4 md:ml-0 md:border-none">
        {/* Desktop Center Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-muted -translate-x-1/2"></div>

        <AnimatedSection delay={0.1} className="relative pl-8 md:pl-0 mb-12">
          {/* Timeline Dot */}
          <div className="absolute left-[-9px] md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary ring-4 ring-background md:-translate-x-1/2 z-10"></div>

          <div className="md:w-1/2 md:pr-12 ml-auto md:ml-0">
            <ExperienceCard
              role="Project Intern"
              company="MRSAC, Nagpur"
              duration="Jan 2025 – Apr 2025"
              location="Nagpur, India"
              achievements={[
                  "Developed an geospatial data analysis pipeline using satellite imagery and remote sensing datasets for environmental monitoring.",
                "Performed feature extraction on satellite images and trained Random Forest and SVM models for land-use classification and water-body detection.",
                "achieved an accuracy of 86.63%, enabling reliable data-driven environmental analysis and planning insights.",
              ]}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExperiencePage;