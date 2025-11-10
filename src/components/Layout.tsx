import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "_hello" },
    { path: "/about", label: "_about-me" },
    { path: "/projects", label: "_projects" },
    { path: "/contact", label: "_contact-me" },
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top Navigation */}
      <header className="border-b border-border">
        <div className="flex items-center">
          <div className="px-6 py-3 border-r border-border">
            <span className="text-muted-foreground font-mono text-sm">yassine-hallous</span>
          </div>
          <nav className="flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-6 py-3 text-sm font-mono border-r border-border transition-colors relative ${
                  isActive(item.path)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary" />
                )}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-sm font-mono">find me in:</span>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/yassine-hallous"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <a
            href="https://github.com/Hallous-Yassine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors border-l border-border pl-4"
          >
            <span className="text-sm font-mono">@Hallous-Yassine</span>
            <Github className="w-4 h-4" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
