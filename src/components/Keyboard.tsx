const KEYS = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

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