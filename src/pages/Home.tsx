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
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-cyan opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-glow-orange opacity-20 blur-3xl pointer-events-none" />
      
      <div className="container px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-glow-cyan opacity-20 blur-2xl" />
              <div className="relative">
                <p className="text-muted-foreground font-mono text-sm mb-2">{homeData.heroSection.greeting}</p>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                  {homeData.heroSection.name}
                </h1>
                <p className="text-primary text-xl font-mono">
                  {">"} {homeData.heroSection.title}
                </p>
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
              <div className="absolute -inset-8 bg-glow-orange opacity-25 blur-3xl" />
              <div className="relative">
                <SnakeGame onComplete={() => setGameCompleted(true)} />
              </div>
            </div>
            
            {gameCompleted && (
              <Button
                onClick={() => navigate("/about")}
                size="lg"
                className="font-mono glow-cyan animate-fade-in hover:scale-105 transition-transform duration-300"
              >
                {homeData.gameSection.continueButton}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
