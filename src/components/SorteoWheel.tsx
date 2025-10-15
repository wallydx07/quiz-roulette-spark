import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface Prize {
    name: string;
    color: string;
    icon: string;
}

// Aquí definimos los premios del sorteo
const prizes: Prize[] = [
    { name: "10 Créditos", color: "from-green-500 to-emerald-600", icon: "💰" },
    { name: "20 Créditos", color: "from-blue-500 to-cyan-600", icon: "🎁" },
    { name: "30 Créditos", color: "from-purple-500 to-pink-600", icon: "🏆" },
    { name: "50 Créditos", color: "from-indigo-500 to-blue-600", icon: "✨" },
    { name: "100 Créditos", color: "from-amber-500 to-orange-600", icon: "💎" },
];

interface SorteoWheelProps {
    onPrizeSelected: (prize: string) => void;
}

export const SorteoWheel = ({ onPrizeSelected }: SorteoWheelProps) => {
    const [spinning, setSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [selectedPrize, setSelectedPrize] = useState<string | null>(null);

    const spinWheel = () => {
        setSpinning(true);
        setSelectedPrize(null);

        // Siempre mínimo 10 vueltas
        const baseRotations = 10 + Math.random() * 10; // entre 10 y 20 vueltas
        const randomAngle = Math.random() * 360;
        const totalRotation = baseRotations * 360 + randomAngle;

        setRotation(rotation + totalRotation);

        setTimeout(() => {
            const finalAngle = (rotation + totalRotation) % 360;
            const segmentAngle = 360 / prizes.length;
            const selectedIndex = Math.floor((360 - finalAngle) / segmentAngle) % prizes.length;
            const prize = prizes[selectedIndex].name;

            setSelectedPrize(prize);
            setSpinning(false);

            setTimeout(() => {
                onPrizeSelected(prize);
            }, 1000);
        }, 8000);
    };

    return (
        <div className="flex flex-col items-center gap-8 animate-fade-in">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                🎉 Sorteo Aleatorio
            </h1>
            <p className="text-xl text-muted-foreground">¡Gira la ruleta y gana un premio!</p>

            <div className="relative">
                {/* Pointer */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-primary drop-shadow-lg" />
                </div>

                {/* Wheel */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl animate-pulse-glow">
                    <div
                        className="w-full h-full transition-transform duration-[8000ms] ease-out"
                        style={{
                            transform: `rotate(${rotation}deg)`,
                            transitionTimingFunction: spinning ? "cubic-bezier(0.17, 0.67, 0.12, 0.99)" : "ease-out",
                        }}
                    >
                        {prizes.map((prize, index) => {
                            const angle = (360 / prizes.length) * index;
                            return (
                                <div
                                    key={prize.name}
                                    className={`absolute w-full h-full bg-gradient-to-br ${prize.color}`}
                                    style={{
                                        clipPath: `polygon(50% 50%, ${50 + 50 * Math.sin((angle * Math.PI) / 180)}% ${
                                            50 - 50 * Math.cos((angle * Math.PI) / 180)
                                        }%, ${50 + 50 * Math.sin(((angle + 360 / prizes.length) * Math.PI) / 180)}% ${
                                            50 - 50 * Math.cos(((angle + 360 / prizes.length) * Math.PI) / 180)
                                        }%)`,
                                    }}
                                >
                                    <div
                                        className="absolute inset-0 flex items-center justify-center"
                                        style={{
                                            transform: `rotate(${angle + 360 / prizes.length / 2}deg)`,
                                        }}
                                    >
                                        <div className="flex flex-col items-center gap-1 -mt-20">
                                            <span className="text-4xl">{prize.icon}</span>
                                            <span className="text-white font-bold text-sm drop-shadow-lg">{prize.name}</span>
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

            {selectedPrize && (
                <div className="text-2xl font-bold text-primary animate-scale-in">
                    ¡Ganaste {selectedPrize}! 🎉
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
