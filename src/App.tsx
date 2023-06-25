import { useCallback, useEffect, useState } from 'react'
import { HangmanDrawing } from './components/HangmanDrawing';
import { HangmanWord } from './components/HangmanWord';
import { Keyboard } from './components/Keyboard';
import { DropdownLanguage } from './components/DropdownLanguage';
import { Reset } from './components/Reset';

import './App.scss';
import Confetti from 'react-confetti'
import getNewWord from './modules/getNewWord';
import getLanguage from './modules/getLanguage';

export default function App() {

  // get a random word from the word list
  // get guessed letters from user
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wordToGuess, setWordToGuess] = useState(getNewWord);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [language, setLanguage] = useState(getLanguage);

  // get incorrect letters from guessed letters
  const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter))

  // check if user has lost
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter));

  // add guessed letter to guessed letters
  const addGuessedLetter = useCallback((letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters, isLoser, isWinner])

  // add event listener for keypress event
  useEffect(() => {
    // add event listener for keypress event
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    }

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    }
  }, [guessedLetters])

  // add event listener for enter key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getNewWord());
    }

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    }
  }, [guessedLetters])


  function handleWindowSize() {
    setWindowSize({width: window.innerWidth, height: window.innerHeight});
    console.log(window.innerWidth, window.innerHeight)
  }

  useEffect(() => {
    if (isWinner) {
      setShowConfetti(true)
      setTimeout(() => {
        setShowConfetti(false)
      }
      , 6000)
    }
  }, [isWinner])


  useEffect(() => {
    window.onresize = () => handleWindowSize();
  }, [])

  return (
    <div className="app">
      <div className='app__reset'>
        <Reset />
      </div>
      <div className="app__title">
        {showConfetti && <Confetti />}
        {isWinner && 'You win! Refresh the page to play again'}
        {isLoser && 'Nice try! Refresh the page to try again'}
        {!isLoser && !isWinner && 'Press any key to guess a letter'}
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
          activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter} 
        />
      </div>
      <div className='app__language'>
        <DropdownLanguage />
      </div>
    </div>

  )
}