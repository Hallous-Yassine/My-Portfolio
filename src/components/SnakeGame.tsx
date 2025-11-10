import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";

type Position = { x: number; y: number };
type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

const GRID_SIZE = 15;
const CELL_SIZE = 20;

const SnakeGame = ({ onComplete }: { onComplete: () => void }) => {
  const [snake, setSnake] = useState<Position[]>([{ x: 7, y: 7 }]);
  const [food, setFood] = useState<Position>({ x: 10, y: 10 });
  const [direction, setDirection] = useState<Direction>("RIGHT");
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [foodLeft, setFoodLeft] = useState(5);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    setFood(newFood);
  }, []);

  const moveSnake = useCallback(() => {
    if (!gameStarted || gameOver) return;

    setSnake((prevSnake) => {
      const head = prevSnake[0];
      let newHead: Position;

      switch (direction) {
        case "UP":
          newHead = { x: head.x, y: head.y - 1 };
          break;
        case "DOWN":
          newHead = { x: head.x, y: head.y + 1 };
          break;
        case "LEFT":
          newHead = { x: head.x - 1, y: head.y };
          break;
        case "RIGHT":
          newHead = { x: head.x + 1, y: head.y };
          break;
      }

      // Check wall collision
      if (
        newHead.x < 0 ||
        newHead.x >= GRID_SIZE ||
        newHead.y < 0 ||
        newHead.y >= GRID_SIZE
      ) {
        setGameOver(true);
        return prevSnake;
      }

      // Check self collision
      if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameOver(true);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check food collision
      if (newHead.x === food.x && newHead.y === food.y) {
        const newFoodLeft = foodLeft - 1;
        setFoodLeft(newFoodLeft);
        
        if (newFoodLeft === 0) {
          setGameOver(true);
          setTimeout(() => onComplete(), 1000);
        } else {
          generateFood();
        }
        
        return newSnake;
      }

      newSnake.pop();
      return newSnake;
    });
  }, [direction, food, gameStarted, gameOver, foodLeft, generateFood, onComplete]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        setGameStarted(true);
      }

      switch (e.key) {
        case "ArrowUp":
          setDirection((prev) => (prev !== "DOWN" ? "UP" : prev));
          break;
        case "ArrowDown":
          setDirection((prev) => (prev !== "UP" ? "DOWN" : prev));
          break;
        case "ArrowLeft":
          setDirection((prev) => (prev !== "RIGHT" ? "LEFT" : prev));
          break;
        case "ArrowRight":
          setDirection((prev) => (prev !== "LEFT" ? "RIGHT" : prev));
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [gameStarted]);

  useEffect(() => {
    const interval = setInterval(moveSnake, 150);
    return () => clearInterval(interval);
  }, [moveSnake]);

  const startGame = () => {
    setGameStarted(true);
  };

  const resetGame = () => {
    setSnake([{ x: 7, y: 7 }]);
    setDirection("RIGHT");
    setGameOver(false);
    setGameStarted(false);
    setFoodLeft(5);
    generateFood();
  };

  return (
    <div className="relative bg-card border border-border rounded-lg p-8">
      <div
        className="relative bg-accent mx-auto"
        style={{
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE,
        }}
      >
        {/* Snake */}
        {snake.map((segment, index) => (
          <div
            key={index}
            className="absolute bg-primary transition-all"
            style={{
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
            }}
          />
        ))}
        
        {/* Food */}
        <div
          className="absolute bg-secondary rounded-sm"
          style={{
            width: CELL_SIZE - 4,
            height: CELL_SIZE - 4,
            left: food.x * CELL_SIZE + 2,
            top: food.y * CELL_SIZE + 2,
          }}
        />

        {/* Game Over / Instructions Overlay */}
        {(!gameStarted || gameOver) && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <div className="text-center">
              {gameOver && foodLeft === 0 ? (
                <p className="text-primary font-mono mb-4">Game Complete! ✓</p>
              ) : gameOver ? (
                <p className="text-destructive font-mono mb-4">Game Over!</p>
              ) : (
                <p className="text-muted-foreground font-mono mb-4">Press arrow keys to start</p>
              )}
              {gameOver && foodLeft > 0 && (
                <Button onClick={resetGame} size="sm" variant="outline">
                  Retry
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Game Info */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between text-sm font-mono">
          <span className="text-muted-foreground">// use keyboard</span>
          <span className="text-muted-foreground">// arrows to play</span>
        </div>
        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-sm ${
                  i < foodLeft ? "bg-secondary" : "bg-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-mono">// food left</span>
        </div>
        {!gameStarted && (
          <div className="flex justify-center pt-2">
            <Button onClick={startGame} size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              start-game
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SnakeGame;
