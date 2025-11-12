import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SnakeGame from "@/components/SnakeGame";

interface HomeData {
  heroSection: {
    greeting: string;
    name: string;
    title: string;
    githubLink: string;
  };
  gameSection: {
    continueButton: string;
  };
}

const Home = () => {
  const [gameCompleted, setGameCompleted] = useState(false);
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/home.json')
      .then(response => response.json())
      .then(data => {
        setHomeData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading home data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!homeData) {
    return (
      <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
        <div className="text-red-500">Error loading home data</div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(78,205,196,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(78,205,196,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/15 to-transparent blur-[80px] animate-float pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-code-purple/12 to-transparent blur-[90px] animate-float-delayed pointer-events-none" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-secondary/10 to-transparent blur-[70px] animate-pulse pointer-events-none" />
      
      <div className="container px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="relative">
              <div className="relative">
                <p className="text-muted-foreground font-mono text-sm mb-2 animate-fade-in">{homeData.heroSection.greeting}</p>
                <h1 className="text-5xl lg:text-7xl font-bold mb-4 animate-fade-in bg-gradient-to-r from-primary via-code-purple to-secondary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                  {homeData.heroSection.name}
                </h1>
                <div className="text-primary text-xl font-mono animate-fade-in">
                  <span className="inline-block animate-pulse">{">"}</span> {homeData.heroSection.title}
                </div>
              </div>
            </div>

            <div className="space-y-2 font-mono text-sm">
              <p className="text-muted-foreground">// complete the game to continue</p>
              <p className="text-muted-foreground">// find my profile on Github:</p>
              <p>
                <span className="text-code-purple">const</span>{" "}
                <span className="text-code-blue">githubLink</span>{" "}
                <span className="text-foreground">=</span>{" "}
                <a
                  href={homeData.heroSection.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-code-orange hover:underline interactive-element inline-block"
                >
                  "{homeData.heroSection.githubLink}"
                </a>
              </p>
            </div>
          </div>

          {/* Right - Game */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-secondary/25 to-primary/25 opacity-50 blur-3xl rounded-full animate-pulse" />
              <div className="relative border-2 border-primary/30 rounded-2xl p-2 bg-card/50 backdrop-blur shadow-2xl shadow-primary/20 hover:border-primary/50 transition-all">
                <SnakeGame onComplete={() => setGameCompleted(true)} />
              </div>
            </div>
            
            {gameCompleted && (
              <Button
                onClick={() => navigate("/about")}
                size="lg"
                className="font-mono bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground shadow-lg shadow-primary/50 animate-fade-in hover:scale-105 transition-all duration-300 glow-cyan"
              >
                → Explore Portfolio
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
