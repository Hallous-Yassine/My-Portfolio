import { useState } from "react";
import { Settings } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import ProjectCard from "@/components/ProjectCard";

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
      features: [
        "Real-time GUI for violation tracking",
        "Automated testing pipeline",
        "Custom rule configuration"
      ],
      impact: ["70% reduction in manual code review time", "Improved code quality across teams"]
    },
    {
      id: 2,
      name: "Defensys",
      subtitle: "// ai-security",
      description: "1st Place IAS TAM Challenge. AI-powered proactive application security platform providing protection before and after deployment.",
      tech: ["AI/ML", "Python"],
      github: "https://github.com/Hallous-Yassine",
      features: [
        "Proactive threat detection",
        "Real-time vulnerability scanning",
        "AI-powered security recommendations"
      ],
      impact: ["Won 1st place at IAS TAM Challenge", "Protection before and after deployment"]
    },
    {
      id: 3,
      name: "MNIST Classifier",
      subtitle: "// digit-recognition",
      description: "Handwritten digit recognition with 99.5% accuracy. Interactive web application built with TensorFlow and React.",
      tech: ["Python", "React", "AI/ML"],
      github: "https://github.com/Hallous-Yassine",
      features: [
        "99.5% accuracy rate",
        "Interactive web interface",
        "Real-time digit recognition"
      ],
      impact: ["High accuracy model", "User-friendly interface"]
    },
    {
      id: 4,
      name: "Nexova",
      subtitle: "// industrial-automation",
      description: "Industrial process automation platform with real-time IoT sensor data processing using Node.js and PostgreSQL.",
      tech: ["Node.js", "IoT"],
      github: "https://github.com/Hallous-Yassine",
      features: [
        "Real-time IoT sensor data processing",
        "Process automation workflows",
        "PostgreSQL database integration"
      ],
      impact: ["Improved industrial efficiency", "Real-time monitoring and control"]
    },
    {
      id: 5,
      name: "IoT Mobile App",
      subtitle: "// esp32-integration",
      description: "Flutter application integrated with ESP32 for real-time DHT11 sensor monitoring. Built during SofiaTech internship.",
      tech: ["Flutter", "IoT"],
      github: "https://github.com/Hallous-Yassine",
      features: [
        "ESP32 integration",
        "Real-time DHT11 sensor monitoring",
        "MQTT protocol communication"
      ],
      impact: ["Built during SofiaTech internship", "Responsive mobile interface"]
    },
    {
      id: 6,
      name: "QuizNight",
      subtitle: "// quiz-platform",
      description: "Full-stack quiz game platform with user management, leaderboards, and custom quiz creation capabilities.",
      tech: ["Node.js"],
      github: "https://github.com/Hallous-Yassine",
      features: [
        "User management system",
        "Dynamic leaderboards",
        "Custom quiz creation"
      ],
      impact: ["Full-stack implementation", "Engaging quiz experience"]
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                subtitle={project.subtitle}
                description={project.description}
                tech={project.tech}
                github={project.github}
                features={project.features}
                impact={project.impact}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
