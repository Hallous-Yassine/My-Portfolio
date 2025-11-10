import { useState } from "react";
import { ExternalLink, Github, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Projects = () => {
  const [filters, setFilters] = useState({
    React: true,
    Python: true,
    "Node.js": false,
    Flutter: false,
    "AI/ML": false,
    IoT: false,
  });

  const projects = [
    {
      id: 1,
      name: "RuleGuard",
      subtitle: "// code-verification",
      description: "Python-based code verification automation tool with real-time GUI and violation tracking. Reduced manual review time by 70%.",
      tech: ["Python"],
      github: "https://github.com/Hallous-Yassine",
    },
    {
      id: 2,
      name: "Defensys",
      subtitle: "// ai-security",
      description: "1st Place IAS TAM Challenge. AI-powered proactive application security platform providing protection before and after deployment.",
      tech: ["AI/ML", "Python"],
      github: "https://github.com/Hallous-Yassine",
    },
    {
      id: 3,
      name: "MNIST Classifier",
      subtitle: "// digit-recognition",
      description: "Handwritten digit recognition with 99.5% accuracy. Interactive web application built with TensorFlow and React.",
      tech: ["Python", "React", "AI/ML"],
      github: "https://github.com/Hallous-Yassine",
    },
    {
      id: 4,
      name: "Nexova",
      subtitle: "// industrial-automation",
      description: "Industrial process automation platform with real-time IoT sensor data processing using Node.js and PostgreSQL.",
      tech: ["Node.js", "IoT"],
      github: "https://github.com/Hallous-Yassine",
    },
    {
      id: 5,
      name: "IoT Mobile App",
      subtitle: "// esp32-integration",
      description: "Flutter application integrated with ESP32 for real-time DHT11 sensor monitoring. Built during SofiaTech internship.",
      tech: ["Flutter", "IoT"],
      github: "https://github.com/Hallous-Yassine",
    },
    {
      id: 6,
      name: "QuizNight",
      subtitle: "// quiz-platform",
      description: "Full-stack quiz game platform with user management, leaderboards, and custom quiz creation capabilities.",
      tech: ["Node.js"],
      github: "https://github.com/Hallous-Yassine",
    },
  ];

  const toggleFilter = (tech: keyof typeof filters) => {
    setFilters((prev) => ({ ...prev, [tech]: !prev[tech] }));
  };

  const filteredProjects = projects.filter((project) => {
    const activeTechs = Object.entries(filters)
      .filter(([_, active]) => active)
      .map(([tech]) => tech);
    
    if (activeTechs.length === 0) return true;
    return project.tech.some((t) => activeTechs.includes(t));
  });

  return (
    <div className="flex min-h-[calc(100vh-120px)]">
      {/* Sidebar Filters */}
      <aside className="w-64 border-r border-border p-4">
        <div className="flex items-center gap-2 mb-4">
          <Settings className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-mono text-foreground">projects</span>
        </div>
        
        <div className="space-y-3">
          {Object.entries(filters).map(([tech, checked]) => (
            <label key={tech} className="flex items-center gap-2 cursor-pointer group">
              <Checkbox
                checked={checked}
                onCheckedChange={() => toggleFilter(tech as keyof typeof filters)}
              />
              <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                {tech}
              </span>
            </label>
          ))}
        </div>
      </aside>

      {/* Projects Grid */}
      <div className="flex-1 overflow-y-auto">
        {/* Tab Header */}
        <div className="border-b border-border px-6 py-2 flex items-center gap-2">
          <span className="text-sm font-mono text-foreground">React; Vue</span>
          <button className="ml-auto text-muted-foreground hover:text-foreground">×</button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors group"
              >
                {/* Project Header */}
                <div className="p-4 border-b border-border flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-primary font-mono text-sm mb-1">
                      Project {project.id} <span className="text-muted-foreground">{project.subtitle}</span>
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Project Image Placeholder */}
                <div className="aspect-video bg-accent relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/20">{project.name}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-accent text-xs font-mono rounded text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full font-mono"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      view-project
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
