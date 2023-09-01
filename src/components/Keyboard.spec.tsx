import renderWithi18next from "./renderWithI18n";
import { Keyboard } from "./Keyboard";
// import { getByText, getByRole } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { initI18n } from "../i18n";

describe("Keyboard component", () => {
  beforeAll(() => {
    initI18n();
  });

  test("renders correctly", () => {
    const activeLetters = ["A", "B"];
    const inactiveLetters = ["C", "D"];
    const disabled = false;
    const addGuessedLetter = jest.fn();

    render(
      <Keyboard
        activeLetters={activeLetters}
        inactiveLetters={inactiveLetters}
        disabled={disabled}
        addGuessedLetter={addGuessedLetter}
      />
    );

    // Verify that the buttons are rendered correctly
    expect(screen.getByRole("button", { name: "a" })).toBeDefined();
    expect(screen.getByRole("button", { name: "b" })).toBeDefined();

  //   // Verify that the active and inactive buttons have the correct class names

    // Verify that the disabled button is disabled
  });
});