import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import AdCard from "./AdCard";

test("displays ad card", async () => {
  render(<AdCard picture="" price={12} title="Vends 206" id={1} />);

  await screen.findAllByText("Vends 206");

  expect(await screen.findByText("Vends 206")).toBeInTheDocument();
});
