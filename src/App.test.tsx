import { render, screen } from '@testing-library/react';
import App from './App';

test('should be true', () => {
  render(<App />);
  const countBtn = screen.getByRole('button', {
    name: /dung count is0/i,
  });
  const heading = screen.getByRole('heading', {
    name: /vitee \+ react/i,
  });
  expect(countBtn).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  screen.debug();
});
