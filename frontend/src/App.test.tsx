import React from "react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Frontend handles getting next", () => {
  const server = setupServer(
    http.get("http://localhost:3001/fizzbuzz/next", () => {
      return HttpResponse.json({ next: "placeholder" });
    }),
  )

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test("Gets next properly", async () => {
    render(<App />);
    await screen.findByRole("list");
    expect(screen.getByRole("list")).not.toHaveTextContent("placeholder");
    fireEvent.click(screen.getByText("Get next"));
    await screen.findByText("placeholder");
    expect(screen.getByRole("list")).toHaveTextContent("placeholder");
  })

});