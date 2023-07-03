import { render, screen } from "@testing-library/react";

import { HangmanDrawing } from "./HangmanDrawing";

describe("HangmanDrawing component", () => {
  const props = {
    numberOfGuesses: 3,
  };

  test("renders the correct number of body parts", () => {
    render(<HangmanDrawing {...props} />);
    const bodyParts = screen.getAllByTestId("body-part");

    expect(bodyParts).toHaveLength(props.numberOfGuesses);
  });
});
