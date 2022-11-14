import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import List from './List';
import App from './App';

test('have content test', () => {
  render(<List />);
  const linkElement = screen.getByTestId("lister");
  expect(linkElement).toHaveTextContent('Bat');
});

test('component exists test', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument();
});
