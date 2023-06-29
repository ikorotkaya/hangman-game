import { render, fireEvent } from "@testing-library/react";
import { Keyboard } from "../components/Keyboard";

describe("Keyboard", () => {
  it("calls addGuessedLetter with the correct letter when a button is clicked", () => {
    // Define a mock function for addGuessedLetter
    const mockAddGuessedLetter = jest.fn();

    // Render the Keyboard component with the mock function
    const { getByText } = render(
      <Keyboard
        activeLetters={[]}
        inactiveLetters={[]}
        disabled={false}
        addGuessedLetter={mockAddGuessedLetter}
      />
    );

    // Get a button element by its text content
    const button = getByText("A");

    // Simulate a click event on the button
    fireEvent.click(button);

    // Assert that addGuessedLetter was called with the correct letter
    expect(mockAddGuessedLetter).toHaveBeenCalledWith("A");
  });
});
