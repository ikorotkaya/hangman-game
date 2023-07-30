import renderWithi18next from "./renderWithI18n";
import { Keyboard } from "./Keyboard";
import { getByText, getByRole } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { initI18n } from "../i18n";

describe("Keyboard component", () => {
  beforeAll(() => {
    initI18n()
  })

  test.only("renders correctly", () => {
    const activeLetters = ["A", "B"];
    const inactiveLetters = ["C", "D"];
    const disabled = false;
    const addGuessedLetter = jest.fn();

    // const { container } = renderWithi18next(
    //   <Keyboard
    //     activeLetters={activeLetters}
    //     inactiveLetters={inactiveLetters}
    //     disabled={disabled}
    //     addGuessedLetter={addGuessedLetter}
    //   />
    // );`

    render(<Keyboard
      activeLetters={activeLetters}
      inactiveLetters={inactiveLetters}
      disabled={disabled}
      addGuessedLetter={addGuessedLetter}
    />)

    // console.log("--> container")
    // console.log(getByRole(container, "keyboard-button", { name: "a" }))
    // Verify that the buttons are rendered correctly
    expect(screen.getByRole("keyboard-button", { name: "a" })).toBeDefined();
    // expect(getByRole(container, "keyboard-button", { name: "a" })).toBeDefined();
    // expect(getByText(container, "b")).toBeInTheD]ocument();
    // expect(getByText(container, "c")).toBeInTheDocument();
    // expect(getByText(container, "d")).toBeInTheDocument();

    // // Verify that the active and inactive buttons have the correct class names
    // expect(getByText("a").classList.contains("active")).toBe(true);
    // expect(getByText("b").classList.contains("active")).toBe(true);
    // expect(getByText("c").classList.contains("inactive")).toBe(true);
    // expect(getByText("d").classList.contains("inactive")).toBe(true);

    // // Verify that the disabled button is disabled
    // expect((getByText("a") as HTMLButtonElement).disabled).toBe(false);
    // expect((getByText("b") as HTMLButtonElement).disabled).toBe(false);
    // expect((getByText("c") as HTMLButtonElement).disabled).toBe(false);
    // expect((getByText("d") as HTMLButtonElement).disabled).toBe(false);
  });

})