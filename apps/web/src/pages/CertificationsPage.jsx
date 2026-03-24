import React from 'react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import { CertificationCard } from '../components/Cards.jsx';

const certifications = [

  {
      name: 'AI Engineer Core Track',
      issuer: 'Udemy',
      date: '2026'
      },
  {
    name: 'Supervised Machine Learning',
    issuer: 'Coursera',
    date: '2025'
  },
  {
    name: '100 Days of Code Python Bootcamp',
    issuer: 'Udemy',
    date: '2025'
  },
  {
    name: 'Learn RAG',
    issuer: 'Scrimba',
    date: '2025'
  }
];

const CertificationsPage = () => {
  return (
    <section id="certifications" className="container mx-auto px-4 py-20 max-w-5xl">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Certifications</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <AnimatedSection key={cert.name} delay={index * 0.1}>
            <CertificationCard {...cert} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default CertificationsPage;