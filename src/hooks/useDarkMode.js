import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage("Dark", initialValue);
  const toggleMode = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    darkMode
      ? document.querySelector("body").classList.add("dark-mode")
      : document.querySelector("body").classList.remove("dark-mode");
  });
  return [darkMode, toggleMode];
};

export default useDarkMode;