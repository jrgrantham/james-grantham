import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
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

test('shows and dismisses tool information beneath the tool without changing project information', () => {
  const { getByText, container } = render(<Homepage />);
  fireEvent.click(getByText('RC Garage'));
  const projects = container.querySelector('.jg-projects');
  const tool = container.querySelector('.jg-tool');
  fireEvent.click(tool);
  const toolNotice = tool.nextElementSibling;
  expect(toolNotice).toHaveAttribute('role', 'status');
  expect(within(toolNotice).getByText('Project engineering tool: a destination has not been connected yet.')).toBeInTheDocument();
  expect(within(projects).getByText('RC Garage: a destination has not been connected yet.')).toBeInTheDocument();
  fireEvent.click(within(toolNotice).getByLabelText('Close tool information'));
  expect(tool.nextElementSibling).toBeNull();
  expect(within(projects).getByRole('status')).toBeInTheDocument();
});
