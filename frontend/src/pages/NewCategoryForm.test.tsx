import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewCategoryForm from "./NewCategoryForm";

test("error message when less than 3 characters", async () => {
  render(<NewCategoryForm />);

  userEvent.type(screen.getByRole("textbox"), "aa");

  userEvent.click(screen.getByRole("button"));

  expect(
    await screen.findByText("Category must have at least 3 characters")
  ).toBeInTheDocument();
});
