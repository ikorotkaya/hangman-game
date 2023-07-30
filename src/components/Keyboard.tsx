import { useTranslation } from "react-i18next";

type KeyboardProps = {
  activeLetters: string[];
  disabled: boolean;
  inactiveLetters: string[];
  // it returns nothing so it's void
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  disabled,
  addGuessedLetter,
}: KeyboardProps) {
  const { t } = useTranslation();

  const keys: string[][] = t("keyboard_letters", { returnObjects: true });
  console.log("--> keys")
  console.log(keys)

  return (
    <div className="keyboard-container">
      {keys.map((row, index) => {
        return (
          <div className="keyboard-container__keyboard-row" key={index}>
            {row.map((letter) => {
              const isActive = activeLetters.includes(letter);
              const isInactive = inactiveLetters.includes(letter);
              return (
                <button
                  key={letter}
                  role="keyboard-button"
                  aria-label={letter}
                  className={`button ${isActive ? "active" : ""} ${
                    isInactive ? "inactive" : ""
                  }`}
                  disabled={disabled || isActive || isInactive}
                  onClick={() => addGuessedLetter(letter)}
                >{letter}</button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
