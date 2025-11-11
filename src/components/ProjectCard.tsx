import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  impact: string[];
  tags: string[];
  techStack?: string[];
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
  techStack,
  githubUrl,
  liveUrl,
  image,
}: ProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Color mapping for tech tags
  const getTechColor = (tech: string) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      // Languages
      Python: { bg: "hsla(50, 100%, 70%, 0.15)", border: "hsla(50, 100%, 70%, 0.3)", text: "hsl(50, 100%, 70%)" },
      JavaScript: { bg: "hsla(45, 100%, 65%, 0.15)", border: "hsla(45, 100%, 65%, 0.3)", text: "hsl(45, 100%, 65%)" },
      TypeScript: { bg: "hsla(225, 100%, 65%, 0.15)", border: "hsla(225, 100%, 65%, 0.3)", text: "hsl(225, 100%, 65%)" },
      Java: { bg: "hsla(15, 100%, 60%, 0.15)", border: "hsla(15, 100%, 60%, 0.3)", text: "hsl(15, 100%, 60%)" },
      Kotlin: { bg: "hsla(270, 100%, 65%, 0.15)", border: "hsla(270, 100%, 65%, 0.3)", text: "hsl(270, 100%, 65%)" },
      C: { bg: "hsla(0, 0%, 70%, 0.15)", border: "hsla(0, 0%, 70%, 0.3)", text: "hsl(0, 0%, 70%)" },
      "C#": { bg: "hsla(270, 90%, 60%, 0.15)", border: "hsla(270, 90%, 60%, 0.3)", text: "hsl(270, 90%, 60%)" },
      Dart: { bg: "hsla(190, 100%, 50%, 0.15)", border: "hsla(190, 100%, 50%, 0.3)", text: "hsl(190, 100%, 50%)" },
      // Frameworks & Libraries
      React: { bg: "hsla(190, 100%, 60%, 0.15)", border: "hsla(190, 100%, 60%, 0.3)", text: "hsl(190, 100%, 60%)" },
      "Node.js": { bg: "hsla(120, 90%, 50%, 0.15)", border: "hsla(120, 90%, 50%, 0.3)", text: "hsl(120, 90%, 50%)" },
      Flask: { bg: "hsla(0, 100%, 70%, 0.15)", border: "hsla(0, 100%, 70%, 0.3)", text: "hsl(0, 100%, 70%)" },
      Flutter: { bg: "hsla(190, 100%, 50%, 0.15)", border: "hsla(190, 100%, 50%, 0.3)", text: "hsl(190, 100%, 50%)" },
      TensorFlow: { bg: "hsla(35, 100%, 60%, 0.15)", border: "hsla(35, 100%, 60%, 0.3)", text: "hsl(35, 100%, 60%)" },
      Keras: { bg: "hsla(35, 100%, 60%, 0.15)", border: "hsla(35, 100%, 60%, 0.3)", text: "hsl(35, 100%, 60%)" },
      "Scikit-learn": { bg: "hsla(200, 100%, 60%, 0.15)", border: "hsla(200, 100%, 60%, 0.3)", text: "hsl(200, 100%, 60%)" },
      Docker: { bg: "hsla(190, 100%, 50%, 0.15)", border: "hsla(190, 100%, 50%, 0.3)", text: "hsl(190, 100%, 50%)" },
      // Databases & Tools
      PostgreSQL: { bg: "hsla(225, 90%, 60%, 0.15)", border: "hsla(225, 90%, 60%, 0.3)", text: "hsl(225, 90%, 60%)" },
      SQLite: { bg: "hsla(200, 80%, 60%, 0.15)", border: "hsla(200, 80%, 60%, 0.3)", text: "hsl(200, 80%, 60%)" },
      MySQL: { bg: "hsla(180, 100%, 40%, 0.15)", border: "hsla(180, 100%, 40%, 0.3)", text: "hsl(180, 100%, 40%)" },
      MongoDB: { bg: "hsla(120, 100%, 50%, 0.15)", border: "hsla(120, 100%, 50%, 0.3)", text: "hsl(120, 100%, 50%)" },
      // Hardware & IoT
      ESP32: { bg: "hsla(25, 100%, 60%, 0.15)", border: "hsla(25, 100%, 60%, 0.3)", text: "hsl(25, 100%, 60%)" },
      Arduino: { bg: "hsla(200, 100%, 50%, 0.15)", border: "hsla(200, 100%, 50%, 0.3)", text: "hsl(200, 100%, 50%)" },
    };

    return colors[tech] || { bg: "hsla(177, 58%, 60%, 0.15)", border: "hsla(177, 58%, 60%, 0.3)", text: "hsl(177, 58%, 60%)" };
  };

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

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium rounded border"
                  style={{
                    background: "hsla(177, 58%, 60%, 0.15)",
                    borderColor: "hsla(177, 58%, 60%, 0.3)",
                    color: "hsl(177, 58%, 60%)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Tech Stack */}
            {techStack && techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {techStack.map((tech, index) => {
                  const colors = getTechColor(tech);
                  return (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium rounded-full border"
                      style={{
                        background: colors.bg,
                        borderColor: colors.border,
                        color: colors.text,
                      }}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            )}

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
