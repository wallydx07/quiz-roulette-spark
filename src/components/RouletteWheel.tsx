import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface Topic {
  name: string;
  color: string;
  icon: string;
}

// Temas de la ruleta
const topics: Topic[] = [
  { name: "Biología", color: "from-green-500 to-emerald-600", icon: "🧬" },
  { name: "Física", color: "from-blue-500 to-cyan-600", icon: "⚛️" },
  { name: "Química", color: "from-purple-500 to-pink-600", icon: "🧪" },
  { name: "Astronomía", color: "from-indigo-500 to-blue-600", icon: "🌌" },
  { name: "Geología", color: "from-amber-500 to-orange-600", icon: "🌋" },
  { name: "Matemáticas", color: "from-red-500 to-rose-600", icon: "📐" },
];

interface RouletteWheelProps {
  onTopicSelected: (topic: string) => void;
}

// Configuraciones fáciles de modificar
const MIN_ROTATIONS = 10;  // mínimo de vueltas
const MAX_EXTRA_ROTATIONS = 20; // vueltas extra aleatorias
const SPIN_DURATION_MS = 8000; // duración del giro en ms

export const RouletteWheel = ({ onTopicSelected }: RouletteWheelProps) => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const spinWheel = () => {
    setSpinning(true);
    setSelectedTopic(null);

    // Calcular vueltas
    const baseRotations = MIN_ROTATIONS + Math.random() * MAX_EXTRA_ROTATIONS;
    const randomAngle = Math.random() * 360;
    const totalRotation = baseRotations * 360 + randomAngle;

    // Aplicar rotación acumulada
    setRotation(prev => prev + totalRotation);

    setTimeout(() => {
      const finalAngle = totalRotation % 360;
      const segmentAngle = 360 / topics.length;
      const selectedIndex = Math.floor((360 - finalAngle) / segmentAngle) % topics.length;
      const topic = topics[selectedIndex].name;

      setSelectedTopic(topic);
      setSpinning(false);

      setTimeout(() => {
        onTopicSelected(topic);
      }, 1000);
    }, SPIN_DURATION_MS);
  };

  return (
      <div className="flex flex-col items-center gap-8 animate-fade-in">
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Quiz de Ciencia
          </h1>
          <p className="text-xl text-muted-foreground">¡Gira la ruleta para elegir tu tema!</p>
        </div>

        <div className="relative">
          {/* Pointer */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
            <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-primary drop-shadow-lg" />
          </div>

          {/* Wheel */}
          <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl animate-pulse-glow">
            <div
                className="w-full h-full transition-transform"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: `transform ${SPIN_DURATION_MS}ms cubic-bezier(0.17, 0.67, 0.12, 0.99)`,
                }}
            >
              {topics.map((topic, index) => {
                const angle = (360 / topics.length) * index;
                return (
                    <div
                        key={topic.name}
                        className={`absolute w-full h-full bg-gradient-to-br ${topic.color}`}
                        style={{
                          clipPath: `polygon(50% 50%, ${50 + 50 * Math.sin((angle * Math.PI) / 180)}% ${
                              50 - 50 * Math.cos((angle * Math.PI) / 180)
                          }%, ${50 + 50 * Math.sin(((angle + 360 / topics.length) * Math.PI) / 180)}% ${
                              50 - 50 * Math.cos(((angle + 360 / topics.length) * Math.PI) / 180)
                          }%)`,
                        }}
                    >
                      <div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ transform: `rotate(${angle + 360 / topics.length / 2}deg)` }}
                      >
                        <div className="flex flex-col items-center gap-1 -mt-20">
                          <span className="text-4xl">{topic.icon}</span>
                          <span className="text-white font-bold text-sm drop-shadow-lg">{topic.name}</span>
                        </div>
                      </div>
                    </div>
                );
              })}
            </div>

            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-card border-4 border-primary rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>

        {selectedTopic && (
            <div className="text-2xl font-bold text-primary animate-scale-in">
              ¡{selectedTopic}! 🎉
            </div>
        )}

        <Button
            onClick={spinWheel}
            disabled={spinning}
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-white font-bold text-xl px-8 py-6 shadow-lg hover:shadow-xl transition-all"
        >
          {spinning ? "Girando..." : "¡GIRAR LA RULETA!"}
        </Button>
      </div>
  );
};
