import React, { useEffect } from 'react';
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
            'Designed a ensemble approach using RAG with GPT-5-mini, a QLoRA fine-tuned LLaMA 3.2 specialist agent, and a neural network model',
            'Benchmarked 19+ models and reduced prediction error from 101.6 MSE (Linear Regression) to 29.9 MSE using ensemble approach',
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
          tech: ['Python', 'OpenAI GPT-5-mini', 'ChromaDB','PyTorch', 'Scikit-learn', 'Gradio', 'Selenium', 'QLoRA', 'LLaMA 3.2'],
          learnings: [
            'Learned to design and orchestrate multi-agent AI systems',
            'Gained deep understanding of combining LLMs, RAG, and ML models effectively',
            'Developed skills in model evaluation, benchmarking, and ensemble learning'
          ]
        },
    'cuemath-ai-tutor-screener': {
          title: 'Cuemath AI Tutor Screener',
          subtitle: 'AI-Powered Voice Interview Platform',
          whatIDid: [
            'Built a fully serverless Next.js voice interview platform that conducts structured teaching interviews with AI-driven follow-up probing and auto-generates a PDF recruiter report — no human recruiter needed in the loop',
            'Designed a hybrid scoring engine: LLM evaluates content quality (75% weight — explanation 30%, clarity 25%, engagement 20%) while rule-based logic scores voice signals extracted from Whisper word-level timestamps (fluency 15%, confidence 10%)',
            'Reduced response wait time from 7–11s to near-instant by running TTS audio fetch in parallel with screen updates, eliminating a 2–3s silence after every candidate answer',
            'Cut cost to ~$0.03–0.05 per full interview (8x cheaper than GPT-4o native audio at ~$0.42) using a Whisper → text → GPT-4o-mini pipeline with WPM, filler word count, and pause detection at no extra cost',
            'Deployed fully on Vercel with stateless serverless architecture — session state managed entirely in React refs, zero infrastructure required'
          ],
          challenges: [
            {
              problem: 'Pipeline was fully sequential — transcribe → GPT → TTS → play — causing 7–11s of silence after every answer, making the interview feel broken',
              solution: 'Started TTS prefetch the instant GPT responded, running it in parallel with React state updates so audio was already buffered by the time the UI finished updating — reducing perceived latency to near-instant'
            },
            {
              problem: 'MicButton used onMouseDown/onMouseUp, so a single click both started and stopped recording instantly, capturing 0 bytes of audio every time',
              solution: 'Replaced press-and-hold with a toggle onClick pattern — first click starts recording, second click stops it — and added a visual pill transformation to make the state unambiguous to candidates'
            },
            {
              problem: 'Whisper rejected all audio with a 400 Invalid file format error because formidable saved uploads without a file extension, but the app showed no errors — just empty transcripts silently',
              solution: 'Combined 3 fixes: set absolute uploadDir via os.tmpdir(), copied file to a .webm path before sending, and used new File([buffer], audio.webm) to set MIME type explicitly at the SDK level'
            },
            {
              problem: 'Interview never progressed past Question 1 — the AI kept rephrasing Q1 indefinitely with no errors or 500s anywhere in the logs',
              solution: 'Traced it to a field name mismatch: questionBank.js used mainQuestion but respond.js was reading .main, returning undefined — GPT never received a valid next question to move to'
            }
          ],
          outcome: [
            'Produced Pass / Hold / Reject verdict out of 10 with thresholds at ≥7, 5.5–6.9, and <5.5 — fully automated end-to-end with no recruiter in the loop',
            'Reduced per-interview cost to ~$0.03–0.05 vs ~$0.42 for GPT-4o native audio — an 8x cost reduction',
            'Eliminated 2–3s TTS latency from perceived wait time, making the voice interview feel natural and conversational',
            'Auto-generated structured PDF recruiter report per session with full dimension scores, voice signals, and final verdict'
          ],
          example: [
            'Candidate: Navin — Teaching Math (Fractions)',
            'Explanation Quality: 6.5/10 → used real-life pizza example, but skipped steps',
            'Clarity: 7.0/10 → easy to follow, avoided jargon',
            'Engagement: 6.0/10 → showed some energy, limited student interaction',
            'Fluency: WPM 138 (ideal range) → 2 filler words detected → 1.4/1.5',
            'Confidence: 2 thinking pauses (positive), 1 hesitation pause (penalty) → 0.85/1.0',
            'Final Score: 6.4/10 → Verdict: HOLD'
          ],
          tech: ['Next.js 14', 'OpenAI Whisper', 'GPT-4o-mini', 'TTS-1', 'Web Audio API', 'Vercel', 'React', 'JavaScript'],
          learnings: [
            'Learned to design and optimize a real-time voice pipeline — balancing transcription, LLM inference, and TTS into a low-latency conversational flow',
            'Gained hands-on experience with parallel async patterns in React to eliminate perceived latency in sequential AI pipelines',
            'Understood how to extract meaningful voice signals (WPM, pauses, fillers) from Whisper word-level timestamps without any additional ML model',
            'Learned to debug silent failures in AI pipelines where graceful error handling hides the root cause completely'
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

  useEffect(() => {
    // Force scroll to top using multiple methods
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);

    // Also do it after a tiny delay in case something else scrolls after render
    const timer = setTimeout(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    }, 50);

    return () => clearTimeout(timer);
  }, [slug]);

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

        <AnimatedSection useInView={false}>
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

          <AnimatedSection delay={0.1} useInView={false}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">What I Did</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed text-muted-foreground space-y-2">
              {project.whatIDid.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2} useInView={false}>
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

          <AnimatedSection delay={0.3} useInView={false}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Example Outputs</h2>
            <div className="bg-muted p-6 rounded-lg space-y-3 font-mono text-sm">
              {project.example.map((ex, index) => (
                <p key={index} className={ex.startsWith('Model Output') ? 'text-primary mb-4' : 'text-foreground'}>
                  {ex}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} useInView={false}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Outcome</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed text-muted-foreground space-y-2">
              {project.outcome.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.5} useInView={false}>
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