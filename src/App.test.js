import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero section with name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Yudi Maryadi/i);
  expect(nameElement).toBeInTheDocument();
});