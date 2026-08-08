import { NextResponse } from "next/server";

// To jest nasza tajna lista haseł. Gracze nigdy nie zobaczą tego kodu.
// Pierwsze hasło jest dla etapu 0, drugie dla etapu 1, itd.
const answers = [
  "start!", // Hasło startowe
  "2023",
  "Korei Południowej",
  "Polsce",
  "Brazylia",
  "Szwecja",
  "Roverway",
  "Francja",
  "WOSM",
  "Intercamp",
  "26",
  "Australii",
  "F",
  "87CÓJ",
  




  
];

export async function POST(request: Request) {
  const data = await request.json();
  const level = data.level; // Otrzymujemy informację, na jakim etapie jest gracz
  const guess = data.guess; // Otrzymujemy hasło wpisane przez gracza

  const correctAnswer = answers[level];
  
  if (!correctAnswer) {
    return NextResponse.json({ success: false });
  }

  // Sprawdzamy hasło - ignorujemy wielkość liter (np. "Namiot" to to samo co "namiot") 
  // oraz ucinamy przypadkowe spacje na końcu.
  const isCorrect = guess.toLowerCase().trim() === correctAnswer.toLowerCase().trim();

  return NextResponse.json({ success: isCorrect });
}