import { useCallback, useEffect, useState } from 'react'
import words from './wordList.json'
import { HangmanDrawing } from './components/HangmanDrawing';
import { HangmanWord } from './components/HangmanWord';
import { Keyboard } from './components/Keyboard';
import './App.scss';

function getNewWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  // get a random word from the word list
  // get guessed letters from user
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wordToGuess, setWordToGuess] = useState(getNewWord);

  const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters, isLoser, isWinner])

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

  return (
    <div className="app">
      <div className="app__title">
        {isWinner && 'You win! Refresh the page to play again'}
        {isLoser && 'Nice try! Refresh the page to try again'}
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
    </div>

  )
}

export default App
