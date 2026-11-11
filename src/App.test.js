import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(() => {
  cleanup();
  window.history.replaceState(null, '', '/');
});

test.each(['/about', '/aboutme', '/cv', '/cv2', '/login', '/phonenumbers', '/contact', '/family', '/family/photos', '/rc', '/rc-garage', '/garage', '/projects', '/unknown'])('%s resolves only to the approved homepage', path => {
  window.history.replaceState(null, '', path + '?legacy=true');
  const { getByRole, container } = render(<App />);
  expect(window.location.pathname).toBe('/');
  expect(window.location.search).toBe('');
  expect(getByRole('heading', { name: 'James Grantham' })).toBeInTheDocument();
  expect(container.querySelector('form')).toBeNull();
  expect(container.querySelector('a[href^="mailto:"]')).toBeInTheDocument();
});
