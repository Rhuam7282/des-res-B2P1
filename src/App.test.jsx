import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Teste de renderização básica do componente App
test('verifica link "learn react"', () => {
  render(<App />);
  
  // Procura elemento contendo texto (case insensitive)
  const linkElement = screen.getByText(/learn react/i);
  
  // Assertion para verificar presença no DOM
  expect(linkElement).toBeInTheDocument();
});