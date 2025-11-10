import { useState } from "react";
import { Button } from "@/components/ui/button";
import SnakeGame from "@/components/SnakeGame";

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
      <div className="container px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground font-mono text-sm mb-2">Hi all. I am</p>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                Yassine Hallous
              </h1>
              <p className="text-primary text-xl font-mono">
                {">"} Computer Engineering Student
              </p>
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
                  className="text-code-orange hover:underline"
                >
                  "https://github.com/Hallous-Yassine"
                </a>
              </p>
            </div>
          </div>

          {/* Right - Game */}
          <div className="flex flex-col items-center gap-4">
            <SnakeGame onComplete={() => setShowContent(true)} />
            {showContent && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowContent(false)}
                className="font-mono"
              >
                skip
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
