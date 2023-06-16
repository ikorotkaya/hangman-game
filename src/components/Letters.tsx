
type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
}

export function Letters({ guessedLetters, wordToGuess }: HangmanWordProps) {
  
  return (
    <div className="letters-container">
      {wordToGuess.split("").map((letter, index) => (
        <span className="letters-container__letter-block" key={index}>
          <span className="letters-container__letter" style={{
            visibility: guessedLetters.includes(letter) 
            ? "visible" 
            : "hidden",
          }}>{letter}</span>
        </span>
      ))}
    </div>
  )
}