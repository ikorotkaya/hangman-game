import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";

import { HangmanDrawing } from "./HangmanDrawing";

describe("HangmanDrawing component", () => {
  const props = {
    numberOfGuesses: 3,
  };

  test("renders the correct number of body parts", () => {
    render(<HangmanDrawing {...props} />);
    const bodyParts = screen.getAllByRole("body-part");

    
    expect(bodyParts).toHaveLength(props.numberOfGuesses);

    expect(screen.getByTestId('head')).toBeInTheDocument();
    expect(screen.getByTestId('body')).toBeInTheDocument();
    expect(screen.getByTestId('right-arm')).toBeInTheDocument();

  });

  test("renders parts in the correct order", () => {
    render(<HangmanDrawing {...props} />);
    const bodyParts = screen.getAllByRole("body-part");

    expect(bodyParts[0]).toHaveAttribute("data-testid", "head");
    expect(bodyParts[1]).toHaveAttribute("data-testid", "body");
    expect(bodyParts[2]).toHaveAttribute("data-testid", "right-arm");
  });
});
