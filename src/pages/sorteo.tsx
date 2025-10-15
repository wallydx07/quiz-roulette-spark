import { SorteoWheel } from "@/components/SorteoWheel";
import { useState } from "react";

export default function Sorteo() {
    const [premio, setPremio] = useState<string | null>(null);

    return (
        <div className="p-8 flex flex-col items-center">
            <SorteoWheel onPrizeSelected={(p) => setPremio(p)} />
            {premio && <p className="mt-6 text-xl">¡Felicitaciones! Ganaste: {premio}</p>}
        </div>
    );
}
