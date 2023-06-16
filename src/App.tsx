import { useState } from 'react'
import words from './wordList.json'
import { HangmanDrawing } from './components/HangmanDrawing';
import { HangmanWord } from './components/HangmanWord';
import { Keyboard } from './components/Keyboard';
import './App.scss';

function App() {
  // get a random word from the word list
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });

  // get guessed letters from user
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter))

  return (
    <div className="app">
      <div className="app__title">Lose Win</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord />
      <div className="app__keyboard">
        <Keyboard />
      </div>
    </div>

  )
}

export default App
