import { Mail, Phone, Linkedin, Github, Code, GraduationCap, Briefcase, Award } from "lucide-react";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ContentSection = "overview" | "skills" | "education" | "experience" | "certifications";

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
  bio: string;
  skills: string;
  education: string;
  experience: string;
  certifications: string;
  leadership: string;
}

const AboutNew = () => {
  const [activeTab, setActiveTab] = useState<ContentSection>("overview");
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);


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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "Kotlin", "Dart", "PHP", "HTML", "CSS"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Flask"]
    },
    {
      title: "Mobile & Backend",
      skills: ["Flutter", "Node.js", "Express.js", "PostgreSQL", "MySQL", "MongoDB", "Firebase"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "CI/CD", "Nginx", "AWS"]
    },
    {
      title: "Embedded & IoT",
      skills: ["ESP32", "Arduino", "Raspberry Pi", "MQTT"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Postman", "MATLAB", "Kali Linux", "Ubuntu"]
    }
  ];

  const certifications = [
    { title: "Python Essentials 2", issuer: "Cisco Networking Academy", date: "July 2025", link: "#" },
    { title: "Python Essentials 1", issuer: "Cisco Networking Academy", date: "June 2025", link: "#" },
    { title: "Pre-Security Learning Path", issuer: "TryHackMe", date: "July 2025", link: "#" },
    { title: "Introduction à la cybersécurité", issuer: "Cisco Networking Academy", date: "June 2025", link: "#" },
    { title: "Notions de base sur les réseaux", issuer: "Cisco Networking Academy", date: "April 2025", link: "#" },
    { title: "IEEEXtreme 18.0", issuer: "IEEE", date: "October 2024", link: "#" }
  ];

  return (
    <div className="min-h-[calc(100vh-120px)] bg-background">
      {/* Header */}
      <div className="border-b border-border px-8 py-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">// About Yassine Hallous</h1>
        <p className="text-muted-foreground font-mono text-sm">Computer Engineering Student | Backend & Embedded Systems Specialist</p>
      </div>

      {/* Main Content with Tabs */}
      <div className="px-8 py-8 max-w-7xl mx-auto">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ContentSection)} className="space-y-6">
          <TabsList className="bg-card border border-border p-1">
            <TabsTrigger value="overview" className="font-mono data-[state=active]:bg-accent data-[state=active]:text-primary">
              Overview
            </TabsTrigger>
            <TabsTrigger value="skills" className="font-mono data-[state=active]:bg-accent data-[state=active]:text-primary">
              Skills
            </TabsTrigger>
            <TabsTrigger value="education" className="font-mono data-[state=active]:bg-accent data-[state=active]:text-primary">
              Education
            </TabsTrigger>
            <TabsTrigger value="experience" className="font-mono data-[state=active]:bg-accent data-[state=active]:text-primary">
              Experience
            </TabsTrigger>
            <TabsTrigger value="certifications" className="font-mono data-[state=active]:bg-accent data-[state=active]:text-primary">
              Certifications
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6 animate-fade-in">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl font-mono">👨‍💻 Yassine Hallous</CardTitle>
                <CardDescription className="text-base">
                  🎓 Computer Engineering Student | 📍 Tunis, Tunisia | 🏢 ISITCOM | GPA: 16.63/20
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 interactive-element bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Code className="w-5 h-5 text-primary" />
                    Backend Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">Scalable systems with Node.js, PostgreSQL, and RESTful APIs</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/20 interactive-element bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    🤖 AI & Machine Learning
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">ML models with TensorFlow and intelligent automation</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">TensorFlow</Badge>
                    <Badge variant="secondary">Scikit-learn</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/20 interactive-element bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    📡 IoT & Embedded
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">ESP32, Arduino, and MQTT protocols</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">ESP32</Badge>
                    <Badge variant="secondary">Arduino</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/20 hover:border-destructive/50 transition-all hover:shadow-lg hover:shadow-destructive/20 interactive-element bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    🔐 Cybersecurity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">Application security and CTF competitor</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">CTF</Badge>
                    <Badge variant="secondary">Pentesting</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-muted-foreground font-mono">find me:</span>
                  <a href={`mailto:${aboutData?.contactInfo.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="text-xs">{aboutData?.contactInfo.email}</span>
                  </a>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span className="text-xs">{aboutData?.contactInfo.phone}</span>
                  </div>
                  <a href={aboutData?.socialLinks.linkedin.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={aboutData?.socialLinks.github.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6 animate-fade-in">
            {skillCategories.map((category, idx) => (
              <Card key={idx} className="border-border bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-lg font-mono">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <Badge 
                        key={skillIdx} 
                        variant="outline" 
                        className="px-4 py-2 bg-primary/10 border-primary/30 hover:bg-primary/20 hover:border-primary/50 hover:scale-105 transition-all cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education" className="space-y-6 animate-fade-in">
            <div className="relative space-y-8">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              
              <Card className="ml-16 border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 relative bg-card/50 backdrop-blur">
                <div className="absolute -left-[4.5rem] top-6 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    ISITCOM
                  </CardTitle>
                  <CardDescription>Bachelor's in Computer Engineering</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">📅 September 2023 - June 2026</p>
                  <p className="text-sm">📍 Sousse, Tunisia</p>
                  <p className="text-sm">🎯 GPA: 16.63/20.00</p>
                  <p className="text-sm font-semibold text-primary">Specialization: Embedded Systems & IoT</p>
                </CardContent>
              </Card>

              <Card className="ml-16 border-border hover:border-primary/30 transition-all relative bg-card/50 backdrop-blur">
                <div className="absolute -left-[4.5rem] top-6 w-4 h-4 rounded-full bg-muted border-4 border-background"></div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-muted-foreground" />
                    Dar El Amen High School
                  </CardTitle>
                  <CardDescription>Mathematics Baccalaureate</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">📅 2023</p>
                  <p className="text-sm">📍 Kairouan, Tunisia</p>
                  <p className="text-sm">🎯 GPA: 14.3/20.00</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-6 animate-fade-in">
            <Card className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Briefcase className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <CardTitle>SofiaTech</CardTitle>
                    <CardDescription>Software Engineering Intern | July - August 2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">🚀 RuleGuard - Code Verification Tool</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Automated C code verification</li>
                    <li>Built Python GUI with real-time tracking</li>
                    <li>Reduced review time by 70%</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>GUI</Badge>
                  <Badge>Automation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Briefcase className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <CardTitle>SofiaTech</CardTitle>
                    <CardDescription>IoT Development Intern | July - August 2024</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-secondary mb-2">📱 IoT Mobile Application</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Flutter app + ESP32 integration</li>
                    <li>Real-time DHT11 sensor monitoring</li>
                    <li>PHP/MySQL backend system</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>Flutter</Badge>
                  <Badge>ESP32</Badge>
                  <Badge>Embedded C</Badge>
                  <Badge>PHP</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Briefcase className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <CardTitle>IEEE ESSTHS Student Branch</CardTitle>
                    <CardDescription>Chair - IAS/IES/PES Chapter | October 2023 - Present</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-accent mb-2">👥 Leadership & Organization</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Led technical bootcamps & industrial visits</li>
                    <li>Organized Sight Day Congress</li>
                    <li>Coordinated Robots League 2.0</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>Leadership</Badge>
                  <Badge>Events</Badge>
                  <Badge>Community</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certifications Tab */}
          <TabsContent value="certifications" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <Card key={idx} className="border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 interactive-element bg-card/50 backdrop-blur group">
                  <CardHeader>
                    <div className="flex items-center justify-center w-full h-32 bg-muted/30 rounded-lg mb-4">
                      <Award className="w-16 h-16 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-base">{cert.title}</CardTitle>
                    <CardDescription className="text-xs">{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-xs text-muted-foreground">📅 {cert.date}</p>
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                    >
                      View Certificate →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AboutNew;
