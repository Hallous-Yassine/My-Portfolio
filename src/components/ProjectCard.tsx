import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string;
  features?: string[];
  impact?: string[];
}

const ProjectCard = ({ name, subtitle, description, tech, github, features, impact }: ProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="project-card h-[400px] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`card-inner relative w-full h-full transition-transform duration-600 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of Card */}
        <div className="card-face absolute w-full h-full backface-hidden bg-card border border-border rounded-xl p-6 flex flex-col justify-between hover:border-primary transition-colors glow-cyan">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-primary font-mono text-lg font-semibold">{name}</h3>
                <p className="text-muted-foreground text-xs font-mono">{subtitle}</p>
              </div>
              <div className="flex gap-2">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-muted-foreground hover:text-primary transition-colors interactive-element"
                >
                  <Github className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="text-muted-foreground hover:text-primary transition-colors interactive-element"
                >
                  <ExternalLink className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 bg-accent text-xs font-mono rounded text-muted-foreground border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <p className="text-sm text-center text-muted-foreground font-mono">
              Click to learn more →
            </p>
          </div>
        </div>

        {/* Back of Card */}
        <div className="card-face absolute w-full h-full backface-hidden bg-card border border-primary rounded-xl p-6 rotate-y-180 overflow-y-auto glow-purple">
          <div className="space-y-4">
            <div>
              <h3 className="text-primary font-mono text-sm mb-2">✨ Project Details</h3>
              <div className="border-t border-border mb-4" />
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

            {features && features.length > 0 && (
              <div>
                <h4 className="text-code-orange font-mono text-sm mb-2">🎯 Key Features:</h4>
                <ul className="space-y-1">
                  {features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground ml-4">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {impact && impact.length > 0 && (
              <div>
                <h4 className="text-code-green font-mono text-sm mb-2">📊 Impact:</h4>
                <ul className="space-y-1">
                  {impact.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground ml-4">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-xs text-center text-muted-foreground font-mono">← Click to go back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
