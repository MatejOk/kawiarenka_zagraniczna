"use client";

import { useState } from "react";

type Puzzle = {
  title: string;
  content: string;
  image?: string;
  audio?: string;
  content2?: string; 
  image2?: string;
};

const puzzles: Puzzle[] = [
  {
    title: "Witajcie w grze kawiarenki zagranicznej!",
    content: "Jeżeli uda Ci się przejść całą gre zgłoś się do osoby z kawiarenki zagraniczej otrzymasz nagrodę ;D \n"+
            "\n"+
            "Gra polega na wpisywaniu odpowiedzi na pytania w kolejnych etapach, nie ma znaczenia wielkość liter, w razie jakichkoliwek problemów proszę zgłoś się do osoby z kawiarenki zagranicznej \n"+
            "\n"+
            "Pierwsze hasło to: start! "
  },
  {
    title: "1. NA POCZĄ",
    content: "Zaczniemy od czegoś prostego co na pewno znacie - szyfry podstawieniowe czyli te które polegają na podstawianiu liter według pewnego klucza na inne litery lub ustalone znaki. Jest to najpopularniejszy typ szyfrów w naszym środowisku harceskim i skautowym. Są to  między innymi szyfry: czekoladka, gaderypoluki, malinowe buty, szyfr telefonowy czy szyfr cezara. \n" +
    "SZYFOGRAM: ACHTERSZTAG"
  },
  {
    title: "2. Kod a Szyfr?",
    content: "Dla laików tematu jest to to samo, ale czy jest tak na pewno?\n"+
    "Otóż nie zaskoczę was ale NIE, to nie jest to samo.\n"+
    "SZYFROWANIE - jest to czynność polegająca na przekształacaniu tekstu jawnego do postaci nieczytelnej dla osób nie posiadających klucza.\n"+
    "KODOWANIE - zmiana zapisu danych tak żeby mogłby być łatwiej np. przesłane dalej, zapisane lub odczytane\n"+
    "Zatem odpowiedzią jest liczba: 1011010 zakodowana w systemie dziesiętnym :D"
  },
  
];

export default function Home() {
  const [level, setLevel] = useState(0);
  const [guess, setGuess] = useState("");
  const [error, setError] = useState(false);

  const checkPassword = async () => {
    // Jeśli pole jest puste, nie robimy nic
    if (!guess.trim()) return;

    setError(false); 
    
    try {
      const res = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ level: level, guess: guess }),
      });
      const data = await res.json();

      if (data.success) {
        setLevel(level + 1);
        setGuess("");
      } else {
        setError(true);
      }
    } catch (err) {
      alert("Brak połączenia z serwerem. Odśwież stronę.");
    }
  };

  // Ta funkcja wyłapuje kliknięcie "Enter" / "Gotowe" na klawiaturze telefonu
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      checkPassword();
    }
  };

  const currentPuzzle = puzzles[level];

  // EKRAN KOŃCOWY GRY
  if (level >= puzzles.length - 1) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#1f4220] text-white p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#facc15]">{currentPuzzle.title}</h1>
        <p className="text-xl text-center max-w-md text-gray-100">{currentPuzzle.content}</p>
      </main>
    );
  }

  // GŁÓWNY EKRAN ZAGADEK (Upewnij się w layout.tsx, że czcionka posiada polskie znaki!)
  return (
    <main className="min-h-screen bg-[#c8c3b5] flex flex-col items-center justify-center p-4">
      
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center text-[#b93721]">
        {currentPuzzle.title}
      </h1>
      
      <p className="text-base sm:text-lg md:text-xl mb-8 mx-auto w-fit text-center text-[#b93721] whitespace-pre-line px-4">
      {currentPuzzle.content}
      </p>
      
      {/* NOWE: Jeśli zagadka ma obrazek, wyświetl go */}
      {currentPuzzle.image && (
        <img 
          src={currentPuzzle.image} 
          alt="Podpowiedź do zagadki" 
          className="mb-8 w-full max-w-md rounded-lg shadow-lg border-2 border-[#facc15]"
        />
      )}

      {/* NOWE: Drugi tekst (pojawia się pod pierwszym obrazkiem, kolor z chusty) */}
      {currentPuzzle.content2 && (
        <p className="text-base sm:text-lg md:text-xl mb-8 mx-auto w-fit text-center text-[#b93721] whitespace-pre-line px-4">
          {currentPuzzle.content2}
        </p>
      )}

      {/* NOWE: Drugi obrazek (pojawia się pod drugim tekstem) */}
      {currentPuzzle.image2 && (
        <img 
          src={currentPuzzle.image2} 
          alt="Druga podpowiedź do zagadki" 
          className="mb-8 w-full max-w-md rounded-lg shadow-lg border-2 border-[#facc15]"
        />
      )}

      {/* NOWE: Jeśli zagadka ma dźwięk, pokaż odtwarzacz */}
      {currentPuzzle.audio && (
        <audio 
          controls 
          src={currentPuzzle.audio} 
          className="mb-8 w-full max-w-xs"
        />
      )}

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <input 
          type="text" 
          placeholder="Hasło..." 
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          onKeyDown={handleKeyDown} // Nasłuchiwanie klawisza Enter
          className="px-4 py-3 rounded-md bg-[#0f2110] text-white placeholder-white font-bold text-center outline-none border-2 border-transparent focus:border-[#facc15] w-full"
        />
        
        {error && (
          <p className="text-red-600 text-sm text-center font-bold">
            Błędne hasło, spróbuj ponownie!
          </p>
        )}
        
        <button
          onClick={checkPassword} // DODANE: Przycisk w końcu wywołuje funkcję!
          className="relative z-50 w-full max-w-xs font-bold py-3 px-4 rounded transition-colors bg-[#b93721] text-[#c8c3b5] hover:bg-[#9a2d1b] active:scale-95"
        >
          SPRAWDŹ
        </button>
      </div>

    </main>
  );
}