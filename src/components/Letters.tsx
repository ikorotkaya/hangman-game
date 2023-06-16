export function Letters() {
  const word = "TEST"
  const guestLetters = ["T"]
  
  return (
    <div className="letters-container">
      {word.split("").map((letter, index) => (
        <span className="letters-container__letter-block" key={index}>
          <span className="letters-container__letter" style={{
            visibility: guestLetters.includes(letter) 
            ? "visible" 
            : "hidden",
          }}>{letter}</span>
        </span>
      ))}
    </div>
  )
}