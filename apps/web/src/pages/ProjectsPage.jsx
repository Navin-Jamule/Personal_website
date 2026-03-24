import React from 'react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import { ProjectCard } from '../components/Cards.jsx';

const projects = [

   {
    id: 'dealpilot',
    title: 'DealPilot – Autonomous Deal Discovery System',
    description: 'Autonomous multi-agent system that discovers, evaluates, and ranks online deals using Scanner, Ensemble, and Messaging agents in a fully orchestrated pipeline.',
    techStack: ['Python', 'OpenAI API', 'ChromaDB', 'PyTorch', 'Scikit-learn', 'Gradio', 'Selenium', 'RAG', 'QLoRA'],
    metrics: 'Reduced error to 29.9 MSE (from 101.6 Linear Regression, 72.3 XGBoost), 33% better than frontier models, 70% over baseline, real-time dashboard with deal tracking.',
    github: 'https://github.com/Navin-Jamule/DealPilot'

  },
  {
    id: 'shopinion-ai',
    title: 'Shopinion AI',
    description: 'Full-stack application for Aspect-Based Sentiment Analysis, providing deep insights into customer feedback.',
    techStack: ['FastAPI', 'React', 'RoBERTa', 'DeBERTa', 'Selenium'],
    metrics: '91.03% accuracy, real-time web scraping, interactive dashboard visualization.',
    github: 'https://github.com/Navin-Jamule/shopinion-ai'
  },
  {
    id: 'careerforge-ai',
    title: 'CareerForge AI',
    description: 'Multi-agent career guidance system that assists users with resume building and job search strategies.',
    techStack: ['LangChain', 'LangGraph', 'OpenAI API', 'Google Search API'],
    metrics: 'Comprehensive automated resume building and personalized job guidance.',
    github: 'https://github.com/Navin-Jamule/CareerForge-AI'
  }
];

const ProjectsPage = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-20 max-w-6xl">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          A selection of my recent work in AI, Machine Learning, and Full-Stack Development.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <AnimatedSection key={project.id} delay={index * 0.1}>
            <ProjectCard {...project} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;