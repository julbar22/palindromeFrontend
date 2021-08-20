import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Results/i);
  expect(linkElement).toBeInTheDocument();
});

test('error data', async () => {
  render(<App />);
  const buttonSend = screen.getByTestId('btnSend');
  userEvent.click(buttonSend);
  const alert = await screen.findByTestId('alertError');
  expect(alert).toBeInTheDocument();

})

test('test several words', async () => {
  render(<App />);
  const inputSend = screen.getByTestId('inputSend');
  const buttonSend = screen.getByTestId('btnSend');
  userEvent.type(inputSend, 'anita lava la tina');
  userEvent.click(buttonSend);
  await screen.findByText(/anitalavalatina/i);
  userEvent.type(inputSend, 'no palindromo');
  userEvent.click(buttonSend);
  await screen.findByText(/omordnilapon/i);
  const listWords = screen.getByTestId("listWords");
  expect(listWords.childElementCount).toEqual(2);
})
