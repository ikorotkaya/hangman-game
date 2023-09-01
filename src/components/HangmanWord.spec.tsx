import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { HangmanWord } from "./HangmanWord";

describe("HangmanWord component", () => {
  const props = {
    wordToGuess: "test",
    guessedLetters: ["t", "e", "s"],
    reveal: false,
  };

  test("renders the correct number of letters", () => {
    render(<HangmanWord {...props} />);

    const letters = screen.getAllByTestId("letter-block");

    expect(letters).toHaveLength(props.wordToGuess.length);
  });

  test("renders letters in the correct order", () => {
    render(<HangmanWord {...props} />);
    const letters = screen.getAllByTestId("letter-block");

    expect(letters[0]).toHaveTextContent("t");
    expect(letters[1]).toHaveTextContent("e");
    expect(letters[2]).toHaveTextContent("s");
  });
});
