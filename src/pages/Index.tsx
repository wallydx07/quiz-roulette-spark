import { useState } from "react";
import { RouletteWheel } from "@/components/RouletteWheel";
import { Quiz } from "@/components/Quiz";

const Index = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleTopicSelected = (topic: string) => {
    setSelectedTopic(topic);
  };

  const handleRestart = () => {
    setSelectedTopic(null);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-8"
      style={{
        background: "var(--gradient-bg), hsl(var(--background))",
      }}
    >
      <div className="w-full max-w-4xl">
        {!selectedTopic ? (
          <RouletteWheel onTopicSelected={handleTopicSelected} />
        ) : (
          <Quiz topic={selectedTopic} onRestart={handleRestart} />
        )}
      </div>
    </div>
  );
};

export default Index;
