import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Test: Welcome test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
