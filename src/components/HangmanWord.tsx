import { Letters } from "./Letters"

export function HangmanWord({guessedLetters, wordToGuess}) {


  return (
    <div className="hangman-word">
        <Letters guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
    </div>
  )
}