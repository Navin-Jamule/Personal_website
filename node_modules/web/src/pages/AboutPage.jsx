import React from 'react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import { EducationCard } from '../components/Cards.jsx';
import ResumeDownload from '../components/ResumeDownload.jsx';

const AboutPage = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-20 max-w-5xl">

      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>
      </AnimatedSection>

      {/* ✅ FIX: Keep BOTH sections inside same grid */}
      <div className="grid md:grid-cols-3 gap-12">

        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-6">

          <AnimatedSection delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Data Science and AI/ML Engineer currently pursuing my M.Tech in Data Science & Engineering at NIT Jamshedpur. My core stack includes Python, PyTorch, FastAPI, RAG, and LLM fine-tuning, along with techniques like multi-agent systems, Scikit-learn, and ensemble learning.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I focus on building end-to-end ML systems that go beyond traditional approaches, especially in areas where understanding context and reasoning is important. Through projects like DealPilot, Shopinion AI, and CareerForge AI, I’ve gained hands-on experience designing and deploying practical AI solutions.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am looking for opportunities in Data Science, AI/ML and GenAI where I can build practical systems and contribute from day one.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="pt-4">
              <ResumeDownload size="lg" />
            </div>
          </AnimatedSection>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">
          <AnimatedSection delay={0.2}>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>

            <div className="space-y-6">
              <EducationCard
                degree="M.Tech in Data Science"
                institution="NIT Jamshedpur"
                duration="2025 - 2027"
                cgpa="8.00"
              />
              <EducationCard
                degree="B.Tech in AI/ML"
                institution="Nagpur University"
                duration="2021 - 2025"
                cgpa="8.76"
              />
              <EducationCard
                degree="B.Com"
                institution="YCMOU"
                duration="2021 - 2024"
                cgpa="6.50"
              />
            </div>

          </AnimatedSection>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;