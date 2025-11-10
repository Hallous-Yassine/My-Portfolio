import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SnakeGame from "@/components/SnakeGame";

const Home = () => {
  const [gameCompleted, setGameCompleted] = useState(false);
  const navigate = useNavigate();

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
                <p className="text-muted-foreground font-mono text-sm mb-2">Hi all. I am</p>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                  Yassine Hallous
                </h1>
                <p className="text-primary text-xl font-mono">
                  {">"} Computer Engineering Student
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
                  href="https://github.com/Hallous-Yassine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-code-orange hover:underline interactive-element inline-block"
                >
                  "https://github.com/Hallous-Yassine"
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
                {"> continue_to_portfolio"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
