import React from "react"
import { render, screen } from "@testing-library/react"
import App from "../App"

test("renders App component correctly", () => {
  render(<App />)

  // Vérifie que le titre est présent
  const titleElement = screen.getByText(/mon application react/i)
  expect(titleElement).toBeInTheDocument()

  // Vérifie que le paragraphe est présent
  const paragraphElement = screen.getByText(/ceci est un composant jsx/i)
  expect(paragraphElement).toBeInTheDocument()
})
