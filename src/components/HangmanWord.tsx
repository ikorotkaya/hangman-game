import { Letters } from "./Letters"

type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
  reveal?: boolean;
}

export function HangmanWord({guessedLetters, wordToGuess, reveal = false}: HangmanWordProps) {

  return (
    <div className="hangman-word">
        <Letters reveal={reveal} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
    </div>
  )
}