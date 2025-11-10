export const aboutContent = {
  bio: `/**
 * @name Yassine Hallous
 * @role Backend Engineer | Embedded Systems Specialist
 * @focus AI • IoT • Cybersecurity
 * 
 * Building the invisible infrastructure that powers tomorrow's
 * intelligent systems. From embedded firmware to cloud architectures,
 * I architect solutions where hardware meets software.
 * 
 * My Expertise:
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * 🔧 Backend Architecture
 *    Designing scalable systems with Node.js, PostgreSQL, and RESTful APIs.
 *    Building real-time data pipelines for IoT ecosystems.
 * 
 * 🤖 Artificial Intelligence
 *    Implementing ML models with TensorFlow and Scikit-learn.
 *    Creating intelligent automation for industrial processes.
 * 
 * 📡 Internet of Things
 *    Programming ESP32, Arduino, and Raspberry Pi devices.
 *    MQTT protocols and sensor data integration.
 * 
 * 🔐 Cybersecurity
 *    Application security and vulnerability assessment.
 *    CTF competitor and security-first development advocate.
 * 
 * Currently working on Defensys - an AI-powered security platform
 * that protects applications before and after deployment.
 * 
 * When I'm not coding, you'll find me competing in hackathons,
 * leading IEEE technical bootcamps, or strategizing my next chess move.
 */`,

  skills: `interface Developer {
  skills: {
    programming_languages: string[];
    ai_machine_learning: string[];
    mobile_backend: string[];
    devops_cloud: string[];
    embedded_iot: string[];
    tools_platforms: string[];
  };
}

const yassine: Developer = {
  skills: {
    programming_languages: [
      "C", "C++", "Python", "Java", "Kotlin", 
      "Dart", "JavaScript", "TypeScript", "PHP", 
      "HTML", "CSS"
    ],
    ai_machine_learning: [
      "TensorFlow", "Scikit-learn", "Pandas", 
      "NumPy", "Flask"
    ],
    mobile_backend: [
      "Flutter", "Node.js", "Express.js", 
      "MySQL", "PostgreSQL", "MongoDB", "Firebase"
    ],
    devops_cloud: [
      "Docker", "CI/CD", "Nginx", "AWS"
    ],
    embedded_iot: [
      "ESP32", "Arduino", "Raspberry-Pi", "MQTT"
    ],
    tools_platforms: [
      "Git", "GitHub", "Postman", "Matlab", 
      "Kali Linux", "Ubuntu"
    ]
  }
};`,

  education: `/**
 * Education Background
 */

// University
const university = {
  institution: "ISITCOM",
  degree: "Bachelor's in Computer Engineering",
  specialization: "Embedded Systems & IoT",
  period: "2023 - 2026",
  gpa: "16.63/20.00",
  achievements: [
    "Top 10% of class",
    "IEEE Chair - IAS, IES, PES Joint Chapter",
    "Multiple hackathon victories"
  ]
};

// High School
const highSchool = {
  institution: "Dar El Amen High School",
  degree: "Mathematics Baccalaureate",
  period: "2023",
  gpa: "14.3/20.00",
  focus: "Mathematics & Computer Science"
};`,

  experience: `/**
 * Professional Experience
 */

// SofiaTech Internship 2025
const sofiatech2025 = {
  role: "Software Engineering Intern",
  company: "SofiaTech",
  period: "Summer 2025",
  location: "Tunisia",
  project: "RuleGuard",
  description: "Python-based code verification automation tool",
  achievements: [
    "Developed real-time GUI for violation tracking",
    "Reduced manual code review time by 70%",
    "Implemented automated testing pipeline"
  ],
  technologies: ["Python", "GUI Frameworks", "Automation"]
};

// SofiaTech Internship 2024
const sofiatech2024 = {
  role: "IoT Development Intern",
  company: "SofiaTech",
  period: "Summer 2024",
  location: "Tunisia",
  project: "IoT Mobile Application",
  description: "Flutter app integrated with ESP32",
  achievements: [
    "Built real-time DHT11 sensor monitoring system",
    "Implemented MQTT protocol communication",
    "Designed responsive mobile interface"
  ],
  technologies: ["Flutter", "ESP32", "Embedded C", "PHP", "MySQL"]
};`,

  certifications: `/**
 * Certifications & Achievements
 */

const certifications = [
  {
    title: "Python Essentials 1 & 2",
    issuer: "Cisco Networking Academy",
    date: "2024",
    skills: ["Python Programming", "Data Structures", "OOP"]
  },
  {
    title: "Pre-Security Learning Path",
    issuer: "TryHackMe",
    date: "2024",
    skills: ["Network Security", "Linux", "Web Security"]
  },
  {
    title: "Introduction à la Cybersécurité",
    issuer: "Cisco",
    date: "2024",
    skills: ["Security Fundamentals", "Threat Analysis"]
  },
  {
    title: "Notions de base sur les réseaux",
    issuer: "Cisco",
    date: "2024",
    skills: ["Networking", "TCP/IP", "Network Protocols"]
  },
  {
    title: "IEEEXtreme 18.0 Programming Competition",
    issuer: "IEEE",
    date: "October 2024",
    type: "Competition"
  }
];`,

  leadership: `/**
 * Leadership & Volunteer Work
 */

// IEEE Chair Position
const ieeeChair = {
  position: "Chair of IAS, IES, PES Joint Chapter",
  organization: "IEEE ESSTHS Student Branch",
  period: "October 2023 - Present",
  responsibilities: [
    "Leading 3 technical societies (IAS, IES, PES)",
    "Organizing technical bootcamps and workshops",
    "Coordinating industrial visits and partnerships",
    "Managing team of 20+ volunteers",
    "Budgeting and resource allocation"
  ],
  achievements: [
    "Increased chapter membership by 150%",
    "Organized 5+ major technical events",
    "Established partnerships with industry leaders"
  ]
};

// Major Events Organized
const eventsOrganized = [
  {
    name: "Sight Day Congress",
    role: "Main Organizer",
    date: "2024",
    attendees: "200+",
    description: "Technology conference focused on social impact"
  },
  {
    name: "Robots League 2.0",
    role: "Event Coordinator",
    date: "2024",
    participants: "50+ teams",
    description: "Robotics competition for autonomous robots"
  },
  {
    name: "TSYP 11 Congress",
    role: "Organizing Committee Member",
    date: "2024",
    description: "Young professionals technical congress"
  }
];`
};
