"use client";

import { useState } from "react";

const messages = [
  "Lieve schat,",
  "Elke dag met jou is als een droom die uitkomt",
  "Jouw lach maakt mijn wereld zoveel mooier",
  "Samen met jou is mijn favoriete plek om te zijn",
  "Wil je mijn valentijn zijn?",
];

// Pre-generated heart positions - up and down, starting immediately
const hearts = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: `${5 + ((i * 6) % 90)}%`,
  size: `${14 + (i % 8)}px`,
  duration: `${8 + (i % 6)}s`,
  delay: `0s`,
  direction: i % 2 === 0 ? "up" : "down",
}));

function FloatingHearts() {
  return (
    <>
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className={`heart heart-${heart.direction}`}
          style={{
            left: heart.left,
            fontSize: heart.size,
            animationDuration: heart.duration,
            animationDelay: heart.delay,
          }}
        >
          ❤️
        </span>
      ))}
    </>
  );
}

export default function Home() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [answered, setAnswered] = useState<"yes" | "no" | null>(null);

  const isLastMessage = currentMessage === messages.length - 1;

  const handleNextMessage = () => {
    if (currentMessage < messages.length - 1) {
      setCurrentMessage((prev) => prev + 1);
    }
  };

  const handleYes = () => {
    setAnswered("yes");
  };

  const handleNo = () => {
    setAnswered("no");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Floating Hearts Background */}
      <FloatingHearts />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-12 text-center">
        {answered === "yes" ? (
          // Celebration screen
          <div className="max-w-md rounded-3xl bg-white/90 backdrop-blur-sm p-8 shadow-xl border-4 border-pink-400 rainbow-border celebrate">
            <div className="text-8xl mb-6 heart-bounce">❤️</div>
            <h1
              className="text-4xl md:text-5xl font-bold text-pink-600 sparkle-text"
              style={{ fontFamily: "var(--font-dancing)" }}
            >
              Ik hou van je!
            </h1>
            <p
              className="text-2xl text-pink-500 mt-4"
              style={{ fontFamily: "var(--font-dancing)" }}
            >
              Fijne Valentijnsdag! 💕
            </p>
          </div>
        ) : answered === "no" ? (
          // Playful "no" response
          <div className="max-w-md rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-xl border-2 border-pink-300 fade-in-up">
            <div className="text-6xl mb-4">🥺</div>
            <h1
              className="text-3xl font-bold text-pink-700 mb-4"
              style={{ fontFamily: "var(--font-dancing)" }}
            >
              Weet je het zeker...?
            </h1>
            <button
              onClick={() => setAnswered(null)}
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg"
              style={{ fontFamily: "var(--font-quicksand)" }}
            >
              Oké, laat me nog eens nadenken...
            </button>
          </div>
        ) : (
          // Normal message flow
          <div
            className={`max-w-md rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-xl border-2 border-pink-300 ${isLastMessage ? "rainbow-border" : ""}`}
          >
            {isLastMessage && (
              <div className="text-6xl mb-4 heart-bounce">💖</div>
            )}
            <h1
              className={`text-3xl md:text-4xl font-bold text-pink-700 mb-6 ${isLastMessage ? "sparkle-text" : "text-shadow-cute"}`}
              style={{ fontFamily: "var(--font-dancing)" }}
            >
              {messages[currentMessage]}
            </h1>

            {isLastMessage ? (
              // Yes/No buttons for the final question
              <div className="flex gap-4 justify-center fade-in-up">
                <button
                  onClick={handleYes}
                  className="button-pulse bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110"
                  style={{ fontFamily: "var(--font-quicksand)" }}
                >
                  Ja!
                </button>
                <button
                  onClick={handleNo}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-95"
                  style={{ fontFamily: "var(--font-quicksand)" }}
                >
                  Nee...
                </button>
              </div>
            ) : (
              // Regular next button
              <button
                onClick={handleNextMessage}
                className="button-pulse bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ fontFamily: "var(--font-quicksand)" }}
              >
                Klik hier
              </button>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
