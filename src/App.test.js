import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app title in header", () => {
  render(<App />);
  expect(screen.getByText(/Akant's Todos List/i)).toBeInTheDocument();
});
