import { useState, useEffect } from "react";
import { Settings } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import ProjectCard from "@/components/ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  impact: string[];
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  techStack: string[];
}

const Projects = () => {
  const [filters, setFilters] = useState({
    React: true,
    Python: true,
    "Node.js": false,
    Flutter: false,
    "AI/ML": false,
    IoT: false,
  });

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/data/projects.json');
        if (!response.ok) {
          throw new Error('Failed to fetch projects data');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const toggleFilter = (tech: keyof typeof filters) => {
    setFilters((prev) => ({ ...prev, [tech]: !prev[tech] }));
  };

  const filteredProjects = projects.filter((project) => {
    const activeTechs = Object.entries(filters)
      .filter(([_, active]) => active)
      .map(([tech]) => tech);
    
    if (activeTechs.length === 0) return true;
    return project.techStack.some((t) => activeTechs.includes(t));
  });

  return (
    <div className="flex min-h-[calc(100vh-120px)]">
      {/* Sidebar Filters */}
      <aside className="w-64 border-r border-border p-4">
        <div className="flex items-center gap-2 mb-4">
          <Settings className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-mono text-foreground">Filter Projects</span>
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

        {/* Filter Summary */}
        <div className="mt-6 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground font-mono">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>
      </aside>

      {/* Projects Grid */}
      <div className="flex-1 overflow-y-auto">
        {/* Tab Header */}
        <div className="border-b border-border px-6 py-2 flex items-center gap-2">
          <span className="text-sm font-mono text-foreground">projects.tsx</span>
          <button className="ml-auto text-muted-foreground hover:text-foreground">×</button>
        </div>

        {/* Content */}
        <div className="p-8">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <p className="text-muted-foreground font-mono">
                Loading projects...
              </p>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-64">
              <p className="text-red-500 font-mono">
                Error: {error}
              </p>
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  features={project.features}
                  impact={project.impact}
                  tags={project.tags}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  image={project.image}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-64">
              <p className="text-muted-foreground font-mono">
                No projects match the selected filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;