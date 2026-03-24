import React from 'react';
import { Code, BrainCircuit, Wrench, Database, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import { SkillCard } from '../components/Cards.jsx';

// const skillCategories = [
//   {
//     title: 'Programming',
//     icon: Code,
//     skills: [
//       { name: 'Python', percentage: 90 },
//       { name: 'SQL', percentage: 85 },
//       { name: 'FastAPI', percentage: 80 },
//       { name: 'Git', percentage: 85 }
//     ]
//   },
//   {
//     title: 'Machine Learning & AI',
//     icon: BrainCircuit,
//     skills: [
//       { name: 'NLP', percentage: 88 },
//       { name: 'Transformers', percentage: 85 },
//       { name: 'Scikit-learn', percentage: 90 },
//       { name: 'Pandas/NumPy', percentage: 95 }
//     ]
//   },
//   {
//     title: 'Generative AI',
//     icon: Sparkles,
//     skills: [
//       { name: 'LangChain', percentage: 85 },
//       { name: 'LangGraph', percentage: 80 },
//       { name: 'OpenAI API', percentage: 90 }
//     ]
//   },
//   {
//     title: 'Tools & Frameworks',
//     icon: Wrench,
//     skills: [
//       { name: 'Selenium', percentage: 85 },
//       { name: 'Streamlit', percentage: 80 },
//       { name: 'Postman', percentage: 85 },
//       { name: 'pytest', percentage: 75 }
//     ]
//   },
//   {
//     title: 'Databases',
//     icon: Database,
//     skills: [
//       { name: 'PostgreSQL', percentage: 80 }
//     ]
//   }
// ];

const skillCategories = [
  {
    title: 'Programming',
    icon: Code,
    skills: [
      { name: 'Python', percentage: 92 },
      { name: 'Data Structures & Algorithms', percentage: 75 },
      { name: 'FastAPI', percentage: 70 },
      { name: 'React', percentage: 50 },
      { name: 'SQL', percentage: 65 },
      { name: 'Git', percentage: 80 }
    ]
  },
  {
    title: 'Machine Learning & AI',
    icon: BrainCircuit,
    skills: [
      { name: 'Scikit-learn', percentage: 87},
      { name: 'PyTorch', percentage: 70 },
      { name: 'NLP', percentage: 76 },
      { name: 'Pandas/NumPy', percentage: 63 }
    ]
  },
  {
    title: 'Generative AI',
    icon: Sparkles,
    skills: [
      { name: 'OpenAI API', percentage: 93 },
      { name: 'RAG', percentage: 84 },
      { name: 'LangChain', percentage: 80 },
      { name: 'LangGraph', percentage: 72 },
      { name: 'LLM Fine-tuning', percentage: 65 },
      { name: 'Transformers', percentage: 70 }
    ]
  },
  {
    title: 'Tools & Frameworks',
    icon: Wrench,
    skills: [
      { name: 'Selenium', percentage: 90 },
      { name: 'BeautifulSoup', percentage: 85 },
      { name: 'Gradio', percentage: 70 },
      { name: 'pytest', percentage: 65 },
      { name: 'Postman', percentage: 55 }
    ]
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'ChromaDB', percentage: 73 },
      { name: 'PostgreSQL', percentage: 70 }
    ]
  }
];

const SkillsPage = () => {
  return (
    <section id="skills" className="container mx-auto px-4 py-20 max-w-6xl">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Technical Expertise</h2>
      </AnimatedSection>

      <div className="space-y-16">
        {skillCategories.map((category, catIndex) => (
          <AnimatedSection key={category.title} delay={catIndex * 0.1}>
            <div className="flex items-center gap-3 mb-6">
              <category.icon className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">{category.title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;