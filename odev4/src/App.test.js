import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App Tests", () => {
  beforeEach(() => {render(<App />);});

  test("header", () => {
    const header = screen.getByText("Emoji Search");
    expect(header).toBeInTheDocument();
  });

  test("Emoji list", () => {
    const items = screen.getAllByText("Click to copy emoji");
    expect(items.length).toEqual(20);
  });

  test("Filter", () => {
    const emoji = "Snowflake";
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: emoji } });
    expect(screen.getByText(emoji)).toBeInTheDocument();
  });

  test("Copy", () => {
    const click = screen.getAllByText("Click to copy emoji").at(0);
    const parent = click.parentElement;
    expect(parent.getAttribute("data-clipboard-text").length).toBeGreaterThan(0);
  });
});