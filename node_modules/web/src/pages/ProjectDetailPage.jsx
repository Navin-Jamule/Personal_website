import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import AnimatedSection from '../components/AnimatedSection.jsx';

const projectData = {

    'dealpilot': {
          title: 'DealPilot',
          subtitle: 'Autonomous Multi-Agent Deal Discovery System',

          whatIDid: [
            'Built a multi-agent system to automatically discover, evaluate, and surface high-value online deals',
            'Designed a hybrid pricing engine using RAG with GPT-5-mini, a QLoRA fine-tuned LLaMA 3.2 specialist agent, and a neural network model',
            'Benchmarked 19+ models and reduced prediction error from 101.6 MSE (Linear Regression) to 29.9 MSE using an ensemble approach',
            'Integrated ChromaDB for vector storage and retrieval to enhance contextual reasoning',
            'Developed a Gradio dashboard for real-time deal tracking, logging, and 3D embedding visualization'
          ],

          challenges: [
            {
              problem: 'Single models failed to provide consistent pricing accuracy across different product types',
              solution: 'Designed an ensemble system combining LLMs, fine-tuned models, and neural networks for robust estimation'
            },
            {
              problem: 'Lack of contextual understanding in traditional ML models',
              solution: 'Implemented RAG with GPT-5-mini to incorporate external knowledge for better reasoning'
            },
          ],

          outcome: [
            'Achieved lowest error of 29.9 MSE, outperforming individual ML and LLM models',
            'Built an end-to-end autonomous system from scraping to decision-making and alerting',
            'Enabled real-time identification of high-discount opportunities with intelligent notifications'
          ],

          example: [
            'Deal: Product listed at $500',
            'Model Estimates: GPT (RAG) → $650, Specialist → $630, Neural Net → $640',
            'Final Output: Estimated Value ≈ $640, Discount = $140',

            'Deal: Product listed at $120',
            'Model Estimates: GPT → $150, Specialist → $140, Neural Net → $145',
            'Final Output: Estimated Value ≈ $145, Discount = $25'
          ],

          tech: ['Python', 'OpenAI GPT-5-mini', 'ChromaDB', 'PyTorch', 'Scikit-learn', 'Gradio', 'Selenium', 'QLoRA', 'LLaMA 3.2'],

          learnings: [
            'Learned to design and orchestrate multi-agent AI systems',
            'Gained deep understanding of combining LLMs, RAG, and ML models effectively',
            'Developed skills in model evaluation, benchmarking, and ensemble learning'
          ]
        },
    'shopinion-ai': {
      title: 'Shopinion AI',
      subtitle: 'Aspect-Based Sentiment Analysis Platform',

      whatIDid: [
        'Built an NLP system to analyze product reviews and extract sentiment for specific aspects like battery, camera, and performance',
        'Used RoBERTa and DeBERTa models for aspect extraction and sentiment classification',
        'Implemented real-time review scraping using Selenium',
        'Achieved 91.03% accuracy in sentiment classification',
        'Designed ranking logic to identify top pros and cons using score aggregation (Positive = +1, Negative = -1)'
      ],

      challenges: [
        {
          problem: 'Noisy real-world data with spelling errors and mixed content',
          solution: 'Handled using text cleaning, preprocessing, and proper tokenization'
        },
        {
          problem: 'Multiple sentiments in a single sentence',
          solution: 'Designed a two-step pipeline: aspect extraction followed by sentiment classification'
        },
        {
          problem: 'Dynamic scraping of reviews from websites',
          solution: 'Handled using XPath, CSS selectors, and class-based element targeting in Selenium'
        }
      ],

      outcome: [
        'Built a complete full-stack system using FastAPI and React',
        'Enabled real-time review scraping and analysis',
        'Provided clear and structured pros and cons for products'
      ],
      example: [
      'Review: "Display is good, but battery is terrible"',
      'Model Output: Display → Positive (+1), Battery → Negative (-1)',

      'Review: "Camera is amazing but phone heats a lot"',
      'Model Output: Camera → Positive (+1), Heating → Negative (-1)',

      'Review: "Performance is smooth and battery backup is decent"',
      'Model Output: Performance → Positive (+1), Battery → Positive (+1)'
    ],

      tech: ['FastAPI', 'React', 'RoBERTa', 'DeBERTa', 'Selenium', 'Tailwind CSS', 'Python'],

      learnings: [
        'Learned to handle real-world messy data effectively',
        'Gained strong understanding of transformer-based NLP models',
        'Built complete end-to-end AI systems from model to deployment'
      ]
    },
    'careerforge-ai': {
          title: 'CareerForge AI',
          subtitle: 'Multi-Agent Career Intelligence Platform',

          whatIDid: [
            'Built a full-stack AI platform to assist with resume generation, interview preparation, and job search',
            'Implemented a multi-agent system using LangGraph for intelligent query routing based on user intent',
            'Designed a deterministic job search agent using Google Custom Search API to fetch real-time job listings',
            'Developed ATS-friendly resume generation and structured mock interview question pipelines',
            'Integrated FastAPI backend with React frontend for seamless real-time interaction'
          ],
          challenges: [
            {
              problem: 'LLM hallucination in job search results',
              solution: 'Solved using deterministic tool-based retrieval and restricting LLM to only format real-time search data'
            },
            {
              problem: 'Unreliable tool invocation by LLM',
              solution: 'Replaced agent-based tool calling with explicit API invocation to ensure deterministic behavior'
            },
          ],

          outcome: [
            'Built a complete multi-agent AI system with real-time data integration',
            'Enabled reliable job search with live data instead of static LLM responses',
            'Delivered a clean and intuitive frontend interface for interacting with AI agents'
          ],

          example: [
            'Query: "jobs for machine learning engineer in Bangalore"',
            'System Flow: Google Search → Fetch live results → LLM formats output',

            'Query: "mock interview for data scientist"',
            'Output: Structured sections with technical, practical, and scenario-based questions',

            'Query: "create a resume for software engineer"',
            'Output: ATS-friendly Markdown resume with structured sections'
          ],

          tech: ['FastAPI', 'React', 'LangGraph', 'LangChain', 'OpenAI API', 'Google Custom Search API', 'Python'],

          learnings: [
            'Learned to design multi-agent AI systems with clear separation of concerns',
            'Understood the importance of tool-based retrieval to prevent LLM hallucination',
            'Gained experience in building production-style full-stack AI applications'
          ]
        }
};

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projectData[slug];

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Button asChild><Link to="/#projects">Back to Projects</Link></Button>
      </div>
    );
  }

return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Helmet>
          <title>{project.title} | Navin Jamule</title>
        </Helmet>

        <AnimatedSection>
          <Link to="/#projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{project.subtitle}</p>

          <div className="flex flex-wrap gap-2 mb-12">
            {project.tech.map(t => (
              <Badge key={t} variant="secondary" className="text-sm">{t}</Badge>
            ))}
          </div>
        </AnimatedSection>

        <div className="space-y-12">

          {/* What I Did Section */}
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">What I Did</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed text-muted-foreground space-y-2">
              {project.whatIDid.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Challenges & Solutions Section */}
          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Challenges & Solutions</h2>
            <div className="space-y-4">
              {project.challenges.map((item, index) => (
                <div key={index} className="bg-secondary/30 p-4 rounded-lg border border-border">
                  <p className="font-medium text-foreground mb-1">
                    <span className="font-bold">Challenge:</span> {item.problem}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-bold">Solution:</span> {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Example Outputs Section */}
          <AnimatedSection delay={0.3}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Example Outputs</h2>
            <div className="bg-muted p-6 rounded-lg space-y-3 font-mono text-sm">
              {project.example.map((ex, index) => (
                <p key={index} className={ex.startsWith('Model Output') ? 'text-primary mb-4' : 'text-foreground'}>
                  {ex}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Outcomes Section */}
          <AnimatedSection delay={0.4}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Outcome</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed text-muted-foreground space-y-2">
              {project.outcome.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Key Learnings Section */}
          <AnimatedSection delay={0.5}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Key Learnings</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed text-muted-foreground space-y-2">
              {project.learnings.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </AnimatedSection>

        </div>
      </div>
   );
};

export default ProjectDetailPage;