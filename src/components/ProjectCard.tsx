import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  impact: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

const ProjectCard = ({
  title,
  description,
  features,
  impact,
  tags,
  githubUrl,
  liveUrl,
  image,
}: ProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`flashcard ${isFlipped ? "flipped" : ""}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flashcard-inner">
        {/* Front Side */}
        <div className="flashcard-front flex flex-col">
          {/* Project Image */}
          <div className="relative w-full h-[250px] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col p-6">
            <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-xs font-medium rounded-full border"
                  style={{
                    background: "hsla(var(--cyan-accent), 0.15)",
                    borderColor: "hsla(var(--cyan-accent), 0.3)",
                    color: "hsl(var(--cyan-accent))",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-auto">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-blue-accent hover:scale-105 transition-transform"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-blue-accent hover:scale-105 transition-transform"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Live Demo</span>
                </a>
              )}
            </div>

            {/* Flip Indicator */}
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Click to see details →
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div className="flashcard-back flex flex-col p-6 overflow-y-auto">
          <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
          <div
            className="h-1 w-20 rounded mb-6"
            style={{
              background: "linear-gradient(90deg, hsl(var(--cyan-accent)), hsl(var(--purple-accent)))",
            }}
          />

          <p className="text-gray-text leading-relaxed mb-6 text-sm">
            {description}
          </p>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-3">
              ✨ Key Features:
            </h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-green-accent"
                >
                  <span>›</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-3">
              📊 Impact:
            </h4>
            <ul className="space-y-2">
              {impact.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-orange-accent font-semibold"
                >
                  <span>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Back Button */}
          <p className="text-sm text-muted-foreground mt-auto text-center hover:text-cyan-accent transition-colors">
            ← Back to overview
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
