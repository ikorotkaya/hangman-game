const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type KeyboardProps= {
  activeLetters: string[]
  disabled: boolean
  inactiveLetters: string[]
  // it returns nothing so it's void
  addGuessedLetter: (letter: string) => void
  }

export function Keyboard({activeLetters, inactiveLetters, disabled, addGuessedLetter}: KeyboardProps) {
  return (
    <div className="keyboard-container" >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button 
            onClick={() => addGuessedLetter(key)} 
            className={"button" + (isActive ? " active" : "") + (isInactive ? " disabled" : "")}
            disabled={isActive || isInactive || disabled}
            key={key}>
              {key}
          </button>
        )
      })}
    </div>
  )
}