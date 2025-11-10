import { ChevronDown, ChevronRight, Mail, Phone, Linkedin, Github } from "lucide-react";
import { useState, useEffect } from "react";
import { aboutContent } from "./AboutContent";

type ContentSection = "bio" | "skills" | "education" | "experience" | "certifications" | "leadership";

interface AboutData {
  contactInfo: {
    email: string;
    phone: string;
  };
  socialLinks: {
    linkedin: {
      url: string;
      label: string;
    };
    github: {
      url: string;
      label: string;
    };
  };
}

const AboutNew = () => {
  const [openSections, setOpenSections] = useState({
    personalInfo: true,
    contacts: true,
  });
  
  const [activeContent, setActiveContent] = useState<ContentSection>("bio");
  const [breadcrumb, setBreadcrumb] = useState("personal-info > bio");
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  useEffect(() => {
    fetch('/data/about.json')
      .then(response => response.json())
      .then(data => {
        setAboutData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading about data:', error);
        setLoading(false);
      });
  }, []);

  const handleContentChange = (content: ContentSection, path: string) => {
    setActiveContent(content);
    setBreadcrumb(path);
  };

  const getContent = () => {
    return aboutContent[activeContent];
  };

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-120px)] items-center justify-center">
        <div className="text-muted-foreground">Loading about information...</div>
      </div>
    );
  }

  if (!aboutData) {
    return (
      <div className="flex min-h-[calc(100vh-120px)] items-center justify-center">
        <div className="text-red-500">Error loading about information</div>
      </div>
    );
  }

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
              <div className="ml-6 mt-2 space-y-2 text-sm font-mono">
                <button
                  onClick={() => handleContentChange("bio", "personal-info > bio")}
                  className={`flex items-center gap-2 w-full text-left hover:text-primary transition-colors ${
                    activeContent === "bio" ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <ChevronRight className="w-3 h-3" />
                  bio
                </button>
                
                <button
                  onClick={() => handleContentChange("skills", "personal-info > skills")}
                  className={`flex items-center gap-2 w-full text-left hover:text-primary transition-colors ${
                    activeContent === "skills" ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <ChevronRight className="w-3 h-3" />
                  skills
                </button>

                <button
                  onClick={() => handleContentChange("education", "personal-info > education")}
                  className={`flex items-center gap-2 w-full text-left hover:text-primary transition-colors ${
                    activeContent === "education" ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <ChevronRight className="w-3 h-3" />
                  education
                </button>

                <button
                  onClick={() => handleContentChange("experience", "personal-info > experience")}
                  className={`flex items-center gap-2 w-full text-left hover:text-primary transition-colors ${
                    activeContent === "experience" ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <ChevronRight className="w-3 h-3" />
                  experience
                </button>

                <button
                  onClick={() => handleContentChange("certifications", "personal-info > certifications")}
                  className={`flex items-center gap-2 w-full text-left hover:text-primary transition-colors ${
                    activeContent === "certifications" ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <ChevronRight className="w-3 h-3" />
                  certifications
                </button>

                <button
                  onClick={() => handleContentChange("leadership", "personal-info > leadership")}
                  className={`flex items-center gap-2 w-full text-left hover:text-primary transition-colors ${
                    activeContent === "leadership" ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <ChevronRight className="w-3 h-3" />
                  leadership
                </button>
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
                  href={`mailto:${aboutData.contactInfo.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" strokeWidth={1.5} />
                  <span className="text-xs">{aboutData.contactInfo.email}</span>
                </a>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" strokeWidth={1.5} />
                  <span className="text-xs">{aboutData.contactInfo.phone}</span>
                </div>
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground font-mono mb-2">find-me-also-in</p>
            <div className="space-y-2">
              <a
                href={aboutData.socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors interactive-element"
              >
                <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-xs">{aboutData.socialLinks.linkedin.label}</span>
              </a>
              <a
                href={aboutData.socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors interactive-element"
              >
                <Github className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-xs">{aboutData.socialLinks.github.label}</span>
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Breadcrumb */}
        <div className="border-b border-border px-6 py-2">
          <span className="text-xs font-mono text-muted-foreground">{breadcrumb}</span>
        </div>

        {/* Content */}
        <div className="p-8 max-w-4xl">
          <div className="font-mono text-sm">
            <pre className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
              {getContent()}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNew;
