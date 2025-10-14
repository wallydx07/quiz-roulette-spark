import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, X, RotateCcw } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correct: number;
}

const questions: Record<string, Question[]> = {
  Biología: [
    {
      question: "¿Cuál es la unidad básica de la vida?",
      options: ["Átomo", "Célula", "Molécula", "Tejido"],
      correct: 1,
    },
    {
      question: "¿Qué gas producen las plantas durante la fotosíntesis?",
      options: ["CO2", "Nitrógeno", "Oxígeno", "Hidrógeno"],
      correct: 2,
    },
    {
      question: "¿Cuántos cromosomas tiene una célula humana normal?",
      options: ["23", "46", "48", "92"],
      correct: 1,
    },
  ],
  Física: [
    {
      question: "¿Cuál es la velocidad de la luz en el vacío?",
      options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"],
      correct: 0,
    },
    {
      question: "¿Qué fuerza mantiene a los planetas en órbita?",
      options: ["Electromagnética", "Nuclear", "Gravitacional", "Fricción"],
      correct: 2,
    },
    {
      question: "¿Quién formuló la teoría de la relatividad?",
      options: ["Newton", "Einstein", "Galileo", "Hawking"],
      correct: 1,
    },
  ],
  Química: [
    {
      question: "¿Cuál es el símbolo químico del oro?",
      options: ["Go", "Au", "Or", "Ag"],
      correct: 1,
    },
    {
      question: "¿Cuántos elementos hay en la tabla periódica?",
      options: ["92", "108", "118", "126"],
      correct: 2,
    },
    {
      question: "¿Qué tipo de enlace comparte electrones?",
      options: ["Iónico", "Metálico", "Covalente", "Van der Waals"],
      correct: 2,
    },
  ],
  Astronomía: [
    {
      question: "¿Cuál es el planeta más grande del sistema solar?",
      options: ["Saturno", "Júpiter", "Urano", "Neptuno"],
      correct: 1,
    },
    {
      question: "¿Cuántas lunas tiene Marte?",
      options: ["1", "2", "3", "4"],
      correct: 1,
    },
    {
      question: "¿Qué es una nebulosa?",
      options: ["Una estrella", "Una galaxia", "Nube de gas y polvo", "Un agujero negro"],
      correct: 2,
    },
  ],
  Geología: [
    {
      question: "¿Cuál es la capa más externa de la Tierra?",
      options: ["Manto", "Núcleo", "Corteza", "Litosfera"],
      correct: 2,
    },
    {
      question: "¿Qué escala mide la intensidad de los terremotos?",
      options: ["Celsius", "Richter", "Beaufort", "Kelvin"],
      correct: 1,
    },
    {
      question: "¿Qué tipo de roca se forma del magma?",
      options: ["Sedimentaria", "Metamórfica", "Ígnea", "Calcárea"],
      correct: 2,
    },
  ],
  Matemáticas: [
    {
      question: "¿Cuánto es π (pi) aproximadamente?",
      options: ["3.14", "2.71", "1.61", "4.20"],
      correct: 0,
    },
    {
      question: "¿Qué es un número primo?",
      options: ["Divisible por 2", "Solo divisible por 1 y sí mismo", "Número par", "Número negativo"],
      correct: 1,
    },
    {
      question: "¿Cuál es el resultado de 2³?",
      options: ["6", "8", "9", "12"],
      correct: 1,
    },
  ],
};

interface QuizProps {
  topic: string;
  onRestart: () => void;
}

export const Quiz = ({ topic, onRestart }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);

  const topicQuestions = questions[topic] || [];
  const question = topicQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / topicQuestions.length) * 100;

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    if (index === question.correct) {
      setScore(score + 1);
    }
    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < topicQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setFinished(true);
      }
    }, 2000);
  };

  if (finished) {
    return (
      <Card className="p-8 max-w-2xl mx-auto animate-scale-in bg-card/50 backdrop-blur border-primary/20">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ¡Quiz Completado!
          </h2>
          <div className="text-6xl font-bold text-primary">
            {score}/{topicQuestions.length}
          </div>
          <p className="text-2xl text-foreground">
            {score === topicQuestions.length
              ? "¡Perfecto! 🎉"
              : score >= topicQuestions.length / 2
              ? "¡Bien hecho! 👏"
              : "Sigue practicando 💪"}
          </p>
          <p className="text-muted-foreground">
            Has completado el quiz de {topic}
          </p>
          <Button
            onClick={onRestart}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            Nuevo Quiz
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Pregunta {currentQuestion + 1} de {topicQuestions.length}</span>
          <span>Puntuación: {score}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
              {topic === "Biología" && "🧬"}
              {topic === "Física" && "⚛️"}
              {topic === "Química" && "🧪"}
              {topic === "Astronomía" && "🌌"}
              {topic === "Geología" && "🌋"}
              {topic === "Matemáticas" && "📐"}
            </div>
            <h3 className="text-2xl font-bold text-foreground">{topic}</h3>
          </div>

          <h2 className="text-xl font-semibold text-foreground">
            {question.question}
          </h2>

          <div className="grid gap-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correct;
              const showCorrect = showResult && isCorrect;
              const showIncorrect = showResult && isSelected && !isCorrect;

              return (
                <Button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  variant="outline"
                  className={`justify-start h-auto py-4 px-6 text-left transition-all ${
                    showCorrect
                      ? "bg-green-500/20 border-green-500 text-green-100"
                      : showIncorrect
                      ? "bg-red-500/20 border-red-500 text-red-100"
                      : "hover:bg-primary/10 hover:border-primary"
                  }`}
                >
                  <span className="flex items-center gap-3 w-full">
                    <span className="flex-1">{option}</span>
                    {showCorrect && <Check className="h-5 w-5 text-green-400" />}
                    {showIncorrect && <X className="h-5 w-5 text-red-400" />}
                  </span>
                </Button>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};
