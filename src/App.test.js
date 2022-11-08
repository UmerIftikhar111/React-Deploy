import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import List from './List';

test('renders learn react link', () => {
  render(<List />);
  const linkElement = screen.getByTestId("lister");
  expect(linkElement).toHaveTextContent('Bat');
});
