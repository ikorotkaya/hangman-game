import React, { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";
import { DropdownLanguage } from "./components/DropdownLanguage";
import LegacyWelcomeClass from "./components/LegacyWelcomeClass";

import { useTranslation, withTranslation } from "react-i18next";
import { throttle } from "@github/mini-throttle";

import "./App.scss";
import Confetti from "react-confetti";

// allows the component to render the translated text using t("title") in the render() method
const Welcome = withTranslation()(LegacyWelcomeClass);

// App uses the hook
export default function App() {
  const { t, i18n } = useTranslation();

  const getNewWord = () => {
    const words = t("wordList", { returnObjects: true }) as string[];
    const lowercaseWords = words.map((word) => word.toLowerCase());
    return lowercaseWords[Math.floor(Math.random() * lowercaseWords.length)];
  };

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wordToGuess, setWordToGuess] = useState(getNewWord());
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // get incorrect letters from guessed letters
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  // check if user has lost
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    // add event listener for keypress event
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    handleReset();
  }, [i18n.language]);

  useEffect(() => {
    // add event listener for enter key
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getNewWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  // add event listener for click event on reset button
  const handleReset = () => {
    setGuessedLetters([]);
    setWordToGuess(getNewWord());
    setShowConfetti(false);
  };  

  useEffect(() => {
    if (isWinner) {
      setShowConfetti(true);
      const wordElement = document.querySelector(
        ".hangman-word"
      ) as HTMLElement;
      wordElement.classList.add("zoom-in");
      setTimeout(() => {
        setShowConfetti(false);
        wordElement.classList.remove("zoom-in");
      }, 6000);
    }
  }, [isWinner]);  

  useEffect(() => {
    const handleResize = throttle(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 1000);
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="app">
      <div className="app__navbar">
        <div className="navbar__language">
          <DropdownLanguage />
        </div>
        <div className="app__header">
          <Welcome />
        </div>
        <div className="navbar__reset">
          <button onClick={() => handleReset()}>{t("reset")}</button>
        </div>
      </div>

      <div className="app__title">
        {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} />}
        {isWinner && t("description.win")}
        {isLoser && t("description.lose")}
        {!isLoser && !isWinner && t("description.play")}
      </div>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      
      <div className="app__keyboard">
        <Keyboard
          disabled={isLoser || isWinner}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}
