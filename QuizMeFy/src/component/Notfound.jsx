import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-main text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/2 -left-1/2 h-full w-full rounded-full bg-primary/5 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-accent/5 blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 px-6 text-center">
        <div className="relative mb-8">
          <h1
            className="text-[12rem] font-black leading-none tracking-tighter text-transparent md:text-[16rem]"
            style={{
              WebkitTextStroke: "2px hsl(var(--primary) / 0.3)",
              transform: `translate(${mousePosition.x * 0.5}px, ${
                mousePosition.y * 0.5
              }px)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            404
          </h1>
          <h1
            className="absolute inset-0 text-[12rem] font-black leading-none tracking-tighter text-primary md:text-[16rem]"
            style={{
              clipPath: "inset(0 0 50% 0)",
              transform: `translate(${mousePosition.x * -0.3}px, ${
                mousePosition.y * -0.3
              }px)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            404
          </h1>
        </div>

        <div className="mb-8 flex justify-center">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            className="animate-pulse"
          >
            <circle
              cx="60"
              cy="50"
              r="35"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              className="animate-[draw_2s_ease-in-out_infinite]"
              style={{
                strokeDasharray: 220,
                strokeDashoffset: 0,
              }}
            />
            <circle
              cx="48"
              cy="45"
              r="4"
              fill="hsl(var(--primary))"
              className="animate-bounce"
              style={{ animationDelay: "0.1s" }}
            />
            <circle
              cx="72"
              cy="45"
              r="4"
              fill="hsl(var(--primary))"
              className="animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
            <path
              d="M 45 62 Q 60 52 75 62"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <text
              x="60"
              y="105"
              textAnchor="middle"
              fill="hsl(var(--muted-foreground))"
              fontSize="12"
              fontWeight="500"
            >
              Page not found
            </text>
          </svg>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Oops! Lost in the quiz universe
          </h2>
          <p className="mx-auto max-w-md text-muted-foreground">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track!
          </p>
          <p className="text-sm text-muted-foreground/60">
            Attempted path:{" "}
            <code className="rounded bg-muted px-2 py-1 text-xs">
              {location.pathname}
            </code>
          </p>
        </div>
        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1 transition-colors hover:text-primary"
          >
            <Search className="h-3 w-3" />
            Browse Quizzes
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
