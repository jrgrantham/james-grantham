import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import Homepage from './Homepage';

test('links Kitchen and explains unconnected projects without a dead link', () => {
  const { getByText } = render(<Homepage />);
  expect(getByText('Kitchen').closest('a').getAttribute('href')).toBe('https://kitchen.jamesgrantham.me');
  fireEvent.click(getByText('RC Garage'));
  expect(getByText('RC Garage: a destination has not been connected yet.')).toBeInTheDocument();
});

test('failed delivery preserves the message and reports failure', async () => {
  global.fetch = jest.fn().mockResolvedValue({ ok: false });
  const { getByLabelText, getByText } = render(<Homepage />);
  fireEvent.change(getByLabelText('Name'), { target: { value: 'Test' } });
  fireEvent.change(getByLabelText('Email'), { target: { value: 'test@example.com' } });
  fireEvent.change(getByLabelText('Message'), { target: { value: 'Keep this draft' } });
  fireEvent.submit(getByText('Send message').closest('form'));
  await waitForElement(() => getByText(/Your message could not be sent/));
  expect(getByLabelText('Message').value).toBe('Keep this draft');
  expect(global.fetch).toHaveBeenCalledTimes(1);
  delete global.fetch;
});
