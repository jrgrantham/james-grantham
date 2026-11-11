import React, { useEffect } from 'react';
import Homepage from './views/Homepage';

export default function App() {
  useEffect(() => {
    // Netlify redirects old URLs; also canonicalise paths on SPA preview hosts.
    if (window.location.pathname !== '/') {
      window.history.replaceState(null, '', '/');
    }
  }, []);

  return <Homepage />;
}
