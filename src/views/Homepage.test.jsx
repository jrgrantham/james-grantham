import React from 'react';
import { render } from '@testing-library/react';
import Homepage from './Homepage';

test('links every project icon to its subdomain', () => {
  const { getByText, queryByRole } = render(<Homepage />);
  const destinations = {
    Kitchen: 'kitchen',
    'RC Garage': 'garage',
    Music: 'music',
    Aquarium: 'aquarium',
    'Project management tool': 'projects',
  };
  Object.entries(destinations).forEach(([name, subdomain]) => {
    expect(getByText(name, { selector: 'a span, a strong' }).closest('a').getAttribute('href')).toBe(`https://${subdomain}.jamesgrantham.me`);
  });
  expect(queryByRole('status')).toBeNull();
});

test('offers the established email recipient instead of a submission form', () => {
  const { getByText, container } = render(<Homepage />);
  expect(getByText('jamesrgrantham@gmail.com').getAttribute('href')).toBe('mailto:jamesrgrantham@gmail.com');
  expect(container.querySelector('form, input, textarea, button[type="submit"]')).toBeNull();
});
