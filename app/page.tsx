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
    title: "WITAJCIE W KRYPTOGRZE!",
    content: "Celem gry jest sprawdzenie waszych umiejętności z kryptografi i kryptoanalizy, ale bez obaw te trudne słowa to tylko przykyrwka na dobrze przez was znane przecież szyfry i sposoby kodowania danych prawda? Zobaczymy, w razie jakich kolwiek problemów zgłaszajcie się prosze od mistrza gry i aby rozpocząć musicie się zautoryzować wpisując podane wam wcześniej hasło"
  },
  {
    title: "1. NA POCZĄTEK...",
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
  {
    title: "3. Trochę Teorii",
    content: "Alfabet - Zbiór wszystkich dostępnych znaków (np. litery, cyfry, znaki specjalne), z których zbudowana jest wiadomość przed lub po zaszyfrowaniu.\n"+
    "Tekst jawny - Twoja oryginalna, czytelna wiadomość przed ukryciem. To zrozumiałe dane, które chcesz zabezpieczyć.\n"+
    "Szyfrogram - wynik procesu szyfrowania.\n"+
    "Szyfr - Konkretny algorytm matematyczny lub zbiór ścisłych reguł postępowania, które instruują, w jaki sposób zamienić tekst jawny na szyfrogram (i z powrotem).\n"+
    "Szyfrogram to `tekst jawny` a szyfrem jest szyfr cezara (o 3 litery w prawo ide podczas szyfrowania) z polskim alfabetem. Tekst jawny otrzymany po zdeszyfrowaniu szyfrogramu jest hasłem\n"+
    "ps. polski alfabet ma 32 znaki\n"
  },
  {
    title: "4. Steganografia",
    content: "Omawiany tu tajny sposób\n" +
         "raczej omija szyfrowanie.\n" +
         "informacja jest widoczna,\n" +
         "ewidentnie, jak na tacy.\n" +
         "nikt jednak nie wie o niej.\n" +
         "To właśnie steganografia!\n" +
         "atrament z soku cytryny,\n" +
         "lub kropka w starym liście.\n" +
         "Inne to ostatnie litery...\n" +
         "Spójrz uważnie na ten tekst ;D"
  },
  {
    title: "5. Szyfrowanie symetryczne",
    content:"Polega na tym że do procesu szyforwania i deszyfrowania używa się tego tego samego klucza, zaletą tych szyfrów jest fakt iż mogą szyfrować BARDZO SZYBKO DUŻĄ ilość danych (co jest na przykład niezbędne to szyfrowania zdjęć czy filmów gdzie ilość danych jest ogromna) Problem natomiast polega natomiast na dystrybujcji klucza czyli jak dwie osoby nie posiadającego bezpiecznego sposobu klucza mają go wybrać aby osoba trzecia go nie podsłuchała? ",
    image: "/obrazek_rebus_oboz.png"
  },
   {
    title: "6. A pamiętasz??",
    content:"Zaszyfrowany tekst jawny to:..."
  },
   {
    title: "7. Wracając, szyfrowanie asymetryczne",
    content:"Polega na szyfrowaniu danych za pomocą dwóch kluczy. \n" +
            "Klucza prywatnego - ten klucz zna tylko jego właściciel\n"+
            "Klucz publiczny - ten klucz jest publiczny i znany przez każdego\n"+
            " \n"+
            "Można to porównać do sytuacji, w której Bob chce wysłać Alicji paczkę i mieć absolutną pewność, że nikt niepożądany jej nie otworzy. Sytuacja wygląda tak: Bob ma do dyspozycji dwie otwarte kłódki – swoją oraz Alicji, ale posiada w kieszeni kluczyk pasujący tylko do swojej własnej kłódki. Alicja jest w identycznej sytuacji: ma pod ręką otwartą kłódkę swoją oraz Boba, jednak posiada kluczyk wyłącznie do swojej kłódki. Załóżmy, że otwarta kłódka to klucz publiczny (każdy może ją wziąć i zatrzasnąć), a pasujący do niej kluczyk to klucz prywatny (ma go tylko właściciel). Czyjej kłódki (klucza publicznego) powinien użyć Bob do zamknięcia paczki, aby mieć pewność, że tylko Alicja będzie w stanie ją rozpakować? \n"+
            "\n"
            

  },
   {
    title: "8. Brawo!",
    content:"Zrozumiałeś jak działa szyfrowanie asymetryczne, oczywiście w faktycznych implemantacjach jest do szyfrowania używna arytmetyka modularna i duże liczby pierwsze dzięki czemu nasz klucz publiczny i prywanty jest równocześnie `kłódką i kluczem`. Właśnie dzięki matematyce działa ten mechanizm że wiadomość zaszyfrowana k. publicznym może być odszyfrowana tylko kluczem prywantym, i na odwrót (po prostu są to do siebie liczby odwrtone)\n" +
    "\n" +
    "Inna sytuacja: Są 4 osoby: Alicja, Bob, Celina i Dariusz. Każdy ma swój klucz prywatny, oraz klucze publiczne reszty. Powiedzmy że Alicja Dariusz i Celina chcą aby Bob potwierdził że zapoznał się z umową którą otrzymał od reszty. Którym kluczem powienien Bob zaszyfrować umowę aby wszytskie pozostałe osoby mogły ją odszyfrować i mieć pewność że tylko Bob mógł zaszyfrować tak tę umowę. Jakim kluczem Bob powienien szyfrować?\n"
    
  },
   {
    title: "9. A czy to pamiętasz??",
    content:"Żeby szybko zaszyfrować dużą ilość danych użujesz..."
  },
  {
    title: "10. Podpis cyfrowy i uwierzytelnianie",
    content:"Wracając w taki właśnie sposób jak opisałem wcześniej działa nasz podpis cyfrowy dzięki któremu możemy uwierzytelnić się że Ja to Ja, a czemu to takie ważne?\n"+
    "\n"+
    "A no żeby ktoś nie wziął na nas pożyczki, nie podpisał umowy z którą się nie zapoznaliśmy albo nie pasowały nam jej warunki albo po prostu okradł nas z danych bądź pieniędzy. (W Polsce jak i całej Unii Europejskiej kwalifikowany podpis elektroniczy stoi na RÓWNI z tradycyjnym podpisem)\n"+
    "\n"+
    "A czym jest to uwierzytelnianie? - potwierdzenie czyjejś tożsamości wobec innej jednostki, służy temu aby właśnie nie doszło do sytuacji wymienionych powyżej\n"+
    "\n"+
    "Uwierzytelniając się potwierdzasz swoją..."
  },
  {
    title: "11. Czy istnieje szyfr idealny nie do złamania?",
    content:"Teoretycznie tak, musi on natomiast spełniać określone warunki: \n"+
    "1. Długość klucza jest równa długości tekstu jawnego\n"+
    "2. Każdy klucz jest używany jeden raz\n"+
    "3. Klucz jest w pełni losowy\n"+
    "\n"+
    "Wtedy przy użyciu np. szyfru Vigenera możemy zaszyfrować dowolnie wielką wiadomość tak aby była nie do odszyfrowania\n"+
    "\n"+
    "Szyfr Vignera polega na porównywaniu ze sobą liter z tekstu jawnego i klucza według macierzy, przykład np. dla klucza `koty` i tekstu jawnego `pies`, otrzymujemy szyfrogram: ZWXQ ",
    image: "/jak_szyfrować.png",
    content2: 'Teraz musisz zaszyfrować tekst jawny: "bukszpryt", a kluczem do niego jest "fordewind", szyfrogram jest hasłem które potrzebujesz wpisać',
    image2: "/szyfry-vigenerea.png"
  },
  {
    title: "12. Protokuł Diffiego-Hellmana",
    content:"Skoro jest to szyfr idealny to czemu się go nie używa zawsze i wszędzie?\n"+
    "\n"+
    "A no dlatego że transportowanie klucza który jest tej samej długości co tekst jawny generuje kolejny problem, jak przekazać tajny klucz aby na pewno nikt nie poznał jego treści - i w taki sposób się zapętlamy bo chcąc zachować poufność tekstu jawnego, musimy przekazać klucz tej samej wielkość też poufnie\n"+
    "\n"+
    "Czyli wracamy do szyfrowania symetrycznego i asymetrycznego gdzie również potrzebujemy klucza żeby zachować poufność wiadomości, ALE nie nie tak dużego jak sam tekst jawny. Najpopularniejszym sposobem ustania klucza jest protokuł Diffiego-Hellmana, który można przedstawić na podstawie mieszania kolorów",
    image: "/deffie_zagadak.png",
    content2: "Bob i Alicja mają wspólny publiczny kolor (żółty) i po jednym swoim prywatnym (Alicja - pomarańczowy, a Bob - niebieski), mieszją swój prywatny kolor z publicznym i wysyłają mieszankę do drugiej osoby. Ktoś transpotujący nie wie jakie są prywante kolory Boba i Alicji ale trzyma ich mieszanki. Kiedy Bob i Alicja otrzymają miesznakę od dugiej osoby, dodają tam swój prywanty kolor i każdy z nich otrzymuje końcowo ten sam kolor\n"+
    "\n"+
    "Jaki kolor musi dodać do otrzymanej mieszanki z obrazka Alicja aby otrzymać taki sam kolor jak Bob?"
  },
   {
    title: "13. ",
    content:"Do szyfrowania asymetrycznego jest potrzebny klucz prywanty i klucz..."
  },
   {
    title: "14. Biały wywiad (OSINT) ",
    content:"OSINT - Open Source Intelligence czyli biały wywiad polegający na pozyskiwaniu i analizowania informacji z publicznie dostępnych źródeł, takich jak Internet, rejestry publiczne czy media społecznościowe.\n"+
    "\n"+
    "Na początek coś prostego, w jakim mieście znajduje się figurant?",
    image:"/osint_final.png"
  },
  {
    title: "15. Fragment rozmowy (OSINT)",
    content:"Udało się przechwycić fragment nieszyfrowanej rozmowy dwóch osób, w jakim mieście znajdował się figurant od 18.37, 15 lipca?",
    image:"/zapis_rozmowy.png"
  },
   {
    title: "Gratulacje!!!",
    content:"Udało Ci się przejść całą kryptogrę - zgłoś się do mistrza gra!"
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
        // Dodaliśmy Headers - to ułatwia komunikację z serwerem Next.js
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

  if (level >= puzzles.length - 1) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#1f4220] text-white p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#facc15]">{currentPuzzle.title}</h1>
        <p className="text-xl text-center max-w-md text-gray-100">{currentPuzzle.content}</p>
      </main>
    );
  }

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
      {/* NOWE: Drugi tekst (pojawia się pod pierwszym obrazkiem) */}
      {currentPuzzle.content2 && (
        <p className="text-base sm:text-lg md:text-xl mb-8 mx-auto w-fit text-center text-gray-100 whitespace-pre-line px-4">
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
          <p className="text-red-400 text-sm text-center font-bold">
            Błędne hasło, spróbuj ponownie!
          </p>
        )}
        
        <button 
          className="w-full max-w-xs font-bold py-3 px-4 rounded transition-colors bg-[#b93721] text-[#c8c3b5] hover:bg-[#9a2d1b]"
        >
          SPRAWDŹ
        </button>
      </div>

    </main>
  );
}