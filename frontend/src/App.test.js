// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza el encabezado de InnovaSalud', () => {
  render(<App />);
  // Busca el título principal de la aplicación
  const headingElement = screen.getByText(/InnovaSalud/i);
  expect(headingElement).toBeInTheDocument();
});