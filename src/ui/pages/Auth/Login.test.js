import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import Login from "./Login"
import axios from "../../../axios-auth"

jest.mock('axios', () => {
  return {
    create: () => {
      return {
        post: jest.fn(() => Promise.resolve('')),
        get: jest.fn(() => Promise.resolve('')),
      }
    }
  }
});

test('renders Logowanie', () => {
  render(<Login />);
  expect(screen.getByText(/logowanie/i)).toBeInTheDocument();
});

test('changes email value', () => {
  const utils = render(<Login />);
  const emialInput = utils.getByLabelText('Email');

  fireEvent.change(emialInput, { target: { value: 'adam'} });
  expect(emialInput.value).toBe('adam');
});

test('show error on fail login', async () => {
  axios.post.mockImplementation(() =>
    Promise.reject({ response: { data: { error: { message: 'Błędne dane' }}}})
  );

  const utils = render(<Login />);
  const submitButton = utils.getByText('Zaloguj');

  fireEvent.click(submitButton);

  await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
  expect(screen.getByText('Błędne dane')).toBeInTheDocument();
});