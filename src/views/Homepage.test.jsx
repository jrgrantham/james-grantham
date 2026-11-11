import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Homepage from './Homepage';

test('links Kitchen and explains unconnected projects without a dead link', () => {
  const { getByText } = render(<Homepage />);
  expect(getByText('Kitchen').closest('a').getAttribute('href')).toBe('https://kitchen.jamesgrantham.me');
  fireEvent.click(getByText('RC Garage'));
  expect(getByText('RC Garage: a destination has not been connected yet.')).toBeInTheDocument();
});

test('offers the established email recipient instead of a submission form', () => {
  const { getByText, container } = render(<Homepage />);
  expect(getByText('jamesrgrantham@gmail.com').getAttribute('href')).toBe('mailto:jamesrgrantham@gmail.com');
  expect(container.querySelector('form, input, textarea, button[type="submit"]')).toBeNull();
});
