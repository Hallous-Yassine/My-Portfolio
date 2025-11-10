import { ChevronDown, ChevronRight, Mail, Phone, Linkedin, Github } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [openSections, setOpenSections] = useState({
    personalInfo: true,
    education: true,
    contacts: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="flex min-h-[calc(100vh-120px)]">
      {/* Sidebar */}
      <aside className="w-80 border-r border-border overflow-y-auto">
        <div className="p-4 space-y-2">
          {/* Personal Info */}
          <div>
            <button
              onClick={() => toggleSection("personalInfo")}
              className="flex items-center gap-2 text-sm font-mono text-foreground hover:text-primary transition-colors w-full"
            >
              {openSections.personalInfo ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
              personal-info
            </button>
            {openSections.personalInfo && (
              <div className="ml-6 mt-2 space-y-1 text-sm font-mono">
                <div className="text-muted-foreground">📍 Tunis, Tunisia</div>
                <div className="text-muted-foreground">🎓 ISITCOM</div>
                <div className="text-muted-foreground">🏆 IEEE Chair</div>
              </div>
            )}
          </div>

          {/* Education */}
          <div>
            <button
              onClick={() => toggleSection("education")}
              className="flex items-center gap-2 text-sm font-mono text-foreground hover:text-primary transition-colors w-full"
            >
              {openSections.education ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
              education
            </button>
            {openSections.education && (
              <div className="ml-6 mt-2 space-y-2 text-sm">
                <div>
                  <div className="text-foreground font-mono">ISITCOM</div>
                  <div className="text-muted-foreground text-xs">Computer Engineering</div>
                  <div className="text-muted-foreground text-xs">GPA: 16.63/20.00</div>
                </div>
              </div>
            )}
          </div>

          {/* Contacts */}
          <div>
            <button
              onClick={() => toggleSection("contacts")}
              className="flex items-center gap-2 text-sm font-mono text-foreground hover:text-primary transition-colors w-full"
            >
              {openSections.contacts ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
              contacts
            </button>
            {openSections.contacts && (
              <div className="ml-6 mt-2 space-y-2">
                <a
                  href="mailto:yassine_hallous@ieee.org"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-xs">yassine_hallous@ieee.org</span>
                </a>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span className="text-xs">+216-98477182</span>
                </div>
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground font-mono mb-2">find-me-also-in</p>
            <div className="space-y-2">
              <a
                href="https://linkedin.com/in/yassine-hallous"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-xs">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Hallous-Yassine"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-xs">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-3xl">
          <div className="font-mono text-sm space-y-4">
            <pre className="text-code-purple">/**</pre>
            <pre className="text-muted-foreground"> * About me</pre>
            <pre className="text-muted-foreground"> * Third-year Computer Engineering student at ISITCOM</pre>
            <pre className="text-muted-foreground"> * Specializing in Embedded Systems & IoT</pre>
            <pre className="text-muted-foreground"> * </pre>
            <pre className="text-muted-foreground"> * Passionate about:</pre>
            <pre className="text-muted-foreground"> * - Backend system architecture</pre>
            <pre className="text-muted-foreground"> * - IoT and embedded solutions</pre>
            <pre className="text-muted-foreground"> * - Automation and smart systems</pre>
            <pre className="text-muted-foreground"> * - Cybersecurity</pre>
            <pre className="text-muted-foreground"> * </pre>
            <pre className="text-muted-foreground"> * Current Focus:</pre>
            <pre className="text-muted-foreground"> * - Building intelligent industrial automation platforms</pre>
            <pre className="text-muted-foreground"> * - AI-powered security solutions</pre>
            <pre className="text-muted-foreground"> * - Real-time IoT data processing</pre>
            <pre className="text-code-purple"> */</pre>
          </div>

          <div className="mt-12 space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4 text-primary font-mono">// Skills</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-mono text-code-orange mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "C", "C++", "Java", "JavaScript", "TypeScript"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-accent text-xs font-mono rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-mono text-code-orange mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "React", "Flutter", "Docker", "PostgreSQL"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-accent text-xs font-mono rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-primary font-mono">// Interests</h2>
              <div className="flex gap-4">
                <span className="text-2xl">♟️ Chess</span>
                <span className="text-2xl">📈 Trading</span>
                <span className="text-2xl">🥋 Jiu Jitsu</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
