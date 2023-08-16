import renderWithi18next from "./renderWithI18n";
import { getByText, getByRole } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { initI18n } from "../i18n";

import { DropdownLanguage } from "./DropdownLanguage";

describe("DropdownLanguage component", () => {
  beforeAll(() => {
    initI18n()
  })
  
  test("renders the correct number of languages", () => {
    render(<DropdownLanguage />);
    const languages = screen.getAllByRole("language");

    expect(languages).toHaveLength(2);

    expect(screen.getByRole("language", {name: "en"})).toBeDefined();
    expect(screen.getByRole("language", {name: "de"})).toBeDefined();

  });
} );

