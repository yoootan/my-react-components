import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";
import React from "react";

describe("Button", () => {
  it("propsで渡されたlabelが表示されているか", () => {
    render(
      <Button label="Test Button" color="black" backgroundColor="blue_100" />
    );

    const buttonElement = screen.getByText("Test Button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("ボタン押下時にonClickがコールされているか", () => {
    const handleClick = jest.fn();
    render(
      <Button
        label="Clickable Button"
        color="black"
        backgroundColor="blue_100"
        onClick={handleClick}
      />
    );

    const buttonElement = screen.getByText("Clickable Button");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});


