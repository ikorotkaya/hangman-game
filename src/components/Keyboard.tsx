import { useTranslation } from "react-i18next";

type KeyboardProps= {
  activeLetters: string[]
  disabled: boolean
  inactiveLetters: string[]
  // it returns nothing so it's void
  addGuessedLetter: (letter: string) => void
  }

export function Keyboard({activeLetters, inactiveLetters, disabled, addGuessedLetter}: KeyboardProps) {
  const {t} = useTranslation();
  const keys = t("keyboard_letters", { returnObjects: true }) as string[];

  return (
    <div className="keyboard-container" >
      {keys.map((key) => {
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