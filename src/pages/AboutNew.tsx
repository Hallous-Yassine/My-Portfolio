import { 
  Mail, Phone, Linkedin, Github, Code, GraduationCap, Briefcase, Award,
  User, MapPin, Building2, Server, Brain, Cpu, Shield, Terminal, Database,
  Calendar, Target, Zap, Cloud, Wifi, Lock, Trophy, Activity, Wrench,
  GitBranch, ExternalLink, FileCode, Package, Smartphone
} from "lucide-react";
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
      icon: Code,
      color: "purple",
      lineNumber: "001",
      skills: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "Kotlin", "Dart", "PHP"]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "orange",
      lineNumber: "002",
      skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Flask"]
    },
    {
      title: "Mobile & Backend",
      icon: Server,
      color: "cyan",
      lineNumber: "003",
      skills: ["Flutter", "Node.js", "Express.js", "PostgreSQL", "MySQL", "MongoDB", "Firebase"]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "blue",
      lineNumber: "004",
      skills: ["Docker", "CI/CD", "Nginx", "AWS"]
    },
    {
      title: "Embedded & IoT",
      icon: Cpu,
      color: "green",
      lineNumber: "005",
      skills: ["ESP32", "Arduino", "Raspberry Pi", "MQTT"]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "teal",
      lineNumber: "006",
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
    <div className="min-h-[calc(100vh-120px)] bg-background relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: 'linear-gradient(rgba(78, 205, 196, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(78, 205, 196, 0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] rounded-full opacity-60 pointer-events-none animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(78, 205, 196, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}></div>
        <div className="absolute bottom-[20%] left-[5%] w-[600px] h-[600px] rounded-full opacity-60 pointer-events-none animate-float-delayed"
          style={{
            background: 'radial-gradient(circle, rgba(195, 119, 224, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-60 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(247, 140, 108, 0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'pulse 8s ease-in-out infinite'
          }}></div>
      </div>

      {/* Header */}
      <div className="border-b border-border px-8 py-6 relative z-10 bg-background/80 backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-foreground mb-2">// About Yassine Hallous</h1>
        <p className="text-muted-foreground font-mono text-sm">Computer Engineering Student | Backend & Embedded Systems Specialist</p>
      </div>

      {/* Main Content with Tabs */}
      <div className="px-8 py-8 max-w-7xl mx-auto relative z-10">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ContentSection)} className="space-y-6">
          <TabsList className="bg-transparent border-b border-border p-0 h-auto rounded-none gap-0">
            <TabsTrigger 
              value="overview" 
              className="font-mono text-sm px-6 py-3 rounded-none border-r border-border data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=inactive]:text-muted-foreground data-[state=inactive]:bg-card/60 hover:bg-card/80 transition-all relative after:content-['×'] after:ml-3 after:opacity-0 hover:after:opacity-50 after:transition-opacity"
            >
              overview.tsx
            </TabsTrigger>
            <TabsTrigger 
              value="skills" 
              className="font-mono text-sm px-6 py-3 rounded-none border-r border-border data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=inactive]:text-muted-foreground data-[state=inactive]:bg-card/60 hover:bg-card/80 transition-all relative after:content-['×'] after:ml-3 after:opacity-0 hover:after:opacity-50 after:transition-opacity"
            >
              skills.tsx
            </TabsTrigger>
            <TabsTrigger 
              value="education" 
              className="font-mono text-sm px-6 py-3 rounded-none border-r border-border data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=inactive]:text-muted-foreground data-[state=inactive]:bg-card/60 hover:bg-card/80 transition-all relative after:content-['×'] after:ml-3 after:opacity-0 hover:after:opacity-50 after:transition-opacity"
            >
              education.tsx
            </TabsTrigger>
            <TabsTrigger 
              value="experience" 
              className="font-mono text-sm px-6 py-3 rounded-none border-r border-border data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=inactive]:text-muted-foreground data-[state=inactive]:bg-card/60 hover:bg-card/80 transition-all relative after:content-['×'] after:ml-3 after:opacity-0 hover:after:opacity-50 after:transition-opacity"
            >
              experience.tsx
            </TabsTrigger>
            <TabsTrigger 
              value="certifications" 
              className="font-mono text-sm px-6 py-3 rounded-none data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=inactive]:text-muted-foreground data-[state=inactive]:bg-card/60 hover:bg-card/80 transition-all relative after:content-['×'] after:ml-3 after:opacity-0 hover:after:opacity-50 after:transition-opacity"
            >
              certifications.tsx
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6 animate-fade-in">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle className="text-2xl font-mono">Yassine Hallous</CardTitle>
                    <CardDescription className="text-base mt-1">
                      Backend Engineer & Embedded Systems Specialist
                    </CardDescription>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                    <span>Computer Engineering Student</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-orange-400" />
                    <span>Tunis, Tunisia</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="w-5 h-5 text-purple-400" />
                    <span>ISITCOM | GPA: 16.63/20</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 interactive-element bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Server className="w-6 h-6 text-primary" />
                    Backend Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">Architecting scalable APIs with Node.js & PostgreSQL</p>
                  <div className="flex items-center gap-3 text-sm">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Node.js</span>
                    <Database className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">PostgreSQL</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 interactive-element bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Brain className="w-6 h-6 text-purple-400" />
                    Artificial Intelligence
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">ML models with TensorFlow achieving 99.5% accuracy</p>
                  <div className="flex items-center gap-3 text-sm">
                    <Activity className="w-4 h-4 text-purple-400" />
                    <span className="text-muted-foreground">TensorFlow</span>
                    <Target className="w-4 h-4 text-purple-400" />
                    <span className="text-muted-foreground">Scikit-learn</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-500/20 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/20 interactive-element bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Cpu className="w-6 h-6 text-orange-400" />
                    IoT & Embedded
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">Programming ESP32, Arduino, Raspberry Pi</p>
                  <div className="flex items-center gap-3 text-sm">
                    <Wifi className="w-4 h-4 text-orange-400" />
                    <span className="text-muted-foreground">MQTT</span>
                    <Zap className="w-4 h-4 text-orange-400" />
                    <span className="text-muted-foreground">ESP32</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-500/20 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/20 interactive-element bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Shield className="w-6 h-6 text-green-400" />
                    Cybersecurity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">CTF competitions & security-first development</p>
                  <div className="flex items-center gap-3 text-sm">
                    <Lock className="w-4 h-4 text-green-400" />
                    <span className="text-muted-foreground">Pentesting</span>
                    <Trophy className="w-4 h-4 text-green-400" />
                    <span className="text-muted-foreground">CTF</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex flex-wrap items-center gap-4 text-sm">
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
          <TabsContent value="skills" className="space-y-0 animate-fade-in">
            {skillCategories.map((category, idx) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={idx} 
                  className={`mb-8 p-5 bg-card/50 backdrop-blur border-l-4 transition-all hover:bg-card/80 skill-category-${category.color}`}
                  style={{ borderLeftColor: 'currentColor' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className={`w-5 h-5 text-${category.color}-400`} />
                    <h3 className={`text-lg font-mono text-${category.color}-400`}>{category.title}</h3>
                    <span className="ml-auto text-xs text-muted-foreground font-mono">{category.lineNumber}</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIdx) => (
                      <span 
                        key={skillIdx}
                        className={`skill-badge-${category.color} px-3.5 py-1.5 rounded-md text-sm font-mono font-medium transition-all cursor-default hover:scale-105 hover:-translate-y-0.5`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education" className="space-y-6 animate-fade-in">
            <div className="relative space-y-8">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              
              <Card className="ml-16 border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 relative bg-card/50 backdrop-blur">
                <div className="absolute -left-[4.5rem] top-6 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">ISITCOM</CardTitle>
                  </div>
                  <CardDescription className="text-base">Bachelor's in Computer Engineering</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>September 2023 - June 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Sousse, Tunisia</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-green-400">
                    <Target className="w-4 h-4" />
                    <span>GPA: 16.63/20.00</span>
                  </div>
                  <p className="text-sm font-semibold text-primary mt-3">Specialization: Embedded Systems & IoT</p>
                </CardContent>
              </Card>

              <Card className="ml-16 border-border hover:border-primary/30 transition-all relative bg-card/50 backdrop-blur">
                <div className="absolute -left-[4.5rem] top-6 w-4 h-4 rounded-full bg-muted border-4 border-background"></div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-purple-400" />
                    <CardTitle className="text-xl">Dar El Amen High School</CardTitle>
                  </div>
                  <CardDescription className="text-base">Mathematics Baccalaureate</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>2023</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Kairouan, Tunisia</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-green-400">
                    <Target className="w-4 h-4" />
                    <span>GPA: 14.3/20.00</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-6 animate-fade-in">
            <Card className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-3">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <CardTitle>SofiaTech</CardTitle>
                      <CardDescription>Summer Internship</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>July - August 2025</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-orange-400" />
                  <span className="font-semibold text-orange-400">RuleGuard - Code Verification Tool</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-7">
                  <li>Automated C code verification with Python</li>
                  <li>Built real-time GUI with violation tracking</li>
                  <li>Reduced review time by 70%</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="skill-badge-purple px-3 py-1 rounded-md text-sm">Python</span>
                  <span className="skill-badge-cyan px-3 py-1 rounded-md text-sm">GUI</span>
                  <span className="skill-badge-orange px-3 py-1 rounded-md text-sm">Automation</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-500/20 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-3">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-orange-400 mt-1" />
                    <div>
                      <CardTitle>SofiaTech</CardTitle>
                      <CardDescription>IoT Development Intern</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>July - August 2024</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <Smartphone className="w-5 h-5 text-cyan-400" />
                  <span className="font-semibold text-cyan-400">IoT Mobile Application</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-7">
                  <li>Flutter app + ESP32 integration</li>
                  <li>Real-time DHT11 sensor monitoring</li>
                  <li>PHP/MySQL backend system</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="skill-badge-cyan px-3 py-1 rounded-md text-sm">Flutter</span>
                  <span className="skill-badge-green px-3 py-1 rounded-md text-sm">ESP32</span>
                  <span className="skill-badge-orange px-3 py-1 rounded-md text-sm">Embedded C</span>
                  <span className="skill-badge-purple px-3 py-1 rounded-md text-sm">PHP</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-500/20 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-3">
                  <div className="flex items-start gap-3">
                    <Trophy className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <CardTitle>IEEE ESSTHS Student Branch</CardTitle>
                      <CardDescription>Chair - IAS/IES/PES Chapter</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>October 2023 - Present</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <User className="w-5 h-5 text-purple-400" />
                  <span className="font-semibold text-purple-400">Leadership & Organization</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-7">
                  <li>Led technical bootcamps & industrial visits</li>
                  <li>Organized Sight Day Congress</li>
                  <li>Coordinated Robots League 2.0</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="skill-badge-purple px-3 py-1 rounded-md text-sm">Leadership</span>
                  <span className="skill-badge-blue px-3 py-1 rounded-md text-sm">Events</span>
                  <span className="skill-badge-green px-3 py-1 rounded-md text-sm">Community</span>
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
                    <div className="flex items-center justify-center w-full h-32 bg-muted/30 rounded-lg mb-4 relative overflow-hidden">
                      <Award className="w-16 h-16 text-primary group-hover:scale-110 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="flex items-start gap-2 mb-2">
                      <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <CardTitle className="text-base">{cert.title}</CardTitle>
                    </div>
                    <CardDescription className="text-xs ml-7">{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 ml-7">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-primary hover:underline font-mono"
                    >
                      View Certificate
                      <ExternalLink className="w-3 h-3" />
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
