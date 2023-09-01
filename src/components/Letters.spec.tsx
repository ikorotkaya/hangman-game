import { render, screen } from "@testing-library/react";

import { Letters } from "./Letters";

describe("Letters component", () => {
  const props = {
    wordToGuess: "HELLO",
    guessedLetters: ["H", "L"],
    reveal: false,
  };

  test("renders the correct number of letter blocks", () => {
    render(<Letters {...props} />);

    const letterBlocks = screen.getAllByTestId("letter-block");

    expect(letterBlocks).toHaveLength(props.wordToGuess.length);
  });
});
