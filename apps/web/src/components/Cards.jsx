import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowUpRight, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Progress } from './ui/progress';

export const EducationCard = ({ degree, institution, duration, cgpa }) => (
  <Card className="relative overflow-hidden border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <CardHeader className="pb-2">
      <CardTitle className="text-xl">{degree}</CardTitle>
      <CardDescription className="text-base font-medium text-foreground">{institution}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {duration}</span>
        <span className="font-semibold text-primary">CGPA: {cgpa}</span>
      </div>
    </CardContent>
  </Card>
);

export const ExperienceCard = ({ role, company, duration, location, achievements }) => (
  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <CardHeader>
      <CardTitle className="text-xl text-primary">{role}</CardTitle>
      <CardDescription className="text-lg font-medium text-foreground">{company}</CardDescription>
      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {duration}</span>
        {location && <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {location}</span>}
      </div>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {achievements.map((achievement, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span className="text-muted-foreground">{achievement}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export const ProjectCard = ({ id, title, description, techStack, metrics, github, deploy }) => (
  <Card className="flex flex-col h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
    <CardHeader>
      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
        {title}
      </CardTitle>
      <CardDescription className="text-base mt-2">
        {description}
      </CardDescription>
    </CardHeader>

    <CardContent className="flex-grow">
      <div className="mb-4">
        <p className="text-sm font-semibold mb-2">Key Metrics:</p>
        <p className="text-sm text-muted-foreground">{metrics}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {techStack.map((tech, i) => (
          <Badge key={i} variant="secondary">{tech}</Badge>
        ))}
      </div>
    </CardContent>

    <div className="p-6 pt-0 mt-auto flex items-center justify-between">
      <div className="flex items-center gap-2">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" title="View Source Code" className="p-2 rounded-full hover:bg-muted transition">
            <Github className="w-5 h-5" />
          </a>
        )}
        {deploy && (
          <a href={deploy} target="_blank" rel="noopener noreferrer" title="View Live Demo" className="p-2 rounded-full hover:bg-muted transition">
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
      <Link to={`/projects/${id}`} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
        View Case Study
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  </Card>
);

export const SkillCard = ({ name, percentage, icon: Icon }) => (
  <div className="p-4 rounded-xl border bg-card hover:shadow-md transition-all duration-300">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-5 h-5 text-primary" />}
        <span className="font-medium">{name}</span>
      </div>
      <span className="text-sm text-muted-foreground">{percentage}%</span>
    </div>
    <Progress value={percentage} className="h-2" />
  </div>
);

export const CertificationCard = ({ name, issuer, date }) => (
  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <CardHeader className="flex flex-row items-start gap-4 space-y-0">
      <div className="p-2 bg-primary/10 rounded-lg text-primary">
        <Award className="w-6 h-6" />
      </div>
      <div>
        <CardTitle className="text-lg leading-tight">{name}</CardTitle>
        <CardDescription className="mt-1">{issuer}</CardDescription>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground flex items-center gap-1">
        <Calendar className="w-4 h-4" /> Issued: {date}
      </p>
    </CardContent>
  </Card>
);