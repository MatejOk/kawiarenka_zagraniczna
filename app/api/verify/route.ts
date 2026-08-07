import { NextResponse } from "next/server";

// To jest nasza tajna lista haseł. Gracze nigdy nie zobaczą tego kodu.
// Pierwsze hasło jest dla etapu 0, drugie dla etapu 1, itd.
const answers = [
  "start!", // Hasło startowe
  "gchtdysztga",     // Odpowiedź na zagadkę 1
  "90",      // Odpowiedź na zagadkę 2
  "RCHÓR GZŚLT",
  "orientalis",
  "szyfrowanie asymetryczne",
  "Szyfrogram",
  "klucza publicznego Alicji",
  "kluczem prywatnym Boba",
  "szyfrowania symetrycznego",
  "tożsamość",
  "GIBVDLZLW",
  "Pomarańczowy",
  "publiczny",
  "Paryż",
  "Sanok"
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