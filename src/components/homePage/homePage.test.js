import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to my Senior Project Process Website!/i);
  expect(linkElement).toBeInTheDocument();
});
